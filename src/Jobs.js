import React, { useState } from "react";
import { Button, Form, Radio } from 'semantic-ui-react';
import FreelanceJobForm from './FreelanceJobForm';
import EmploymentJobForm from './EmploymentJobForm';

const JobPage = () => {
  const [jobType, setJobType] = useState("");
  const [jobData, setJobData] = useState({});

  const handleJobTypeChange = (_, { value }) => {
    setJobType(value);
    setJobData({}); // Reset the job data whenever the job type changes
  };

  const handleInputChange = (_, { name, value }) => {
    setJobData({ ...jobData, [name]: value });
  };

  const handleFormSubmit = () => {
    console.log(jobType, jobData);
    // Handle form submission logic here
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <div style={{ background: "lightgray",  marginBottom: "10px", padding: "10px", textAlign: "left" }}>
        <h2>New Job</h2>
      </div>
      <Form.Field>
        Select job type:
            
        <Radio
          label='Freelance'
          name='jobType'
          value='freelance'
          checked={jobType === 'freelance'}
          onChange={handleJobTypeChange}
          style={{marginLeft: '50px', marginRight: '50px' }}
        />
        <Radio
          label='Employment'
          name='jobType'
          value='employment'
          checked={jobType === 'employment'}
          onChange={handleJobTypeChange}
        />
      </Form.Field>
      <div style={{ background: "lightgray", padding: "10px", marginBottom: "40px", textAlign: "left" }}>
        <h2>Describe your job</h2>
      </div>
      {jobType === "freelance" && (
        <FreelanceJobForm jobData={jobData} onInputChange={handleInputChange} />
      )}
      {jobType === "employment" && (
        <EmploymentJobForm jobData={jobData} onInputChange={handleInputChange} />
        )}
          
        <Button type='submit' floated='right' style={{ marginRight: '50px', marginBottom: '50px', fontSize: '20px', fontWeight: 'bold' }}>Post</Button>
          
    </Form>
  );
};

export default JobPage;
