import { Form, Grid } from 'semantic-ui-react';

const FreelanceJobForm = ({ jobData, onInputChange }) => (
  <div>
    <Grid>
      <Grid.Row>
        <Grid.Column width={2}>
          <label>Title/Position:</label>
        </Grid.Column>
        <Grid.Column width={5}>
          <Form.Input
            name="title"
            value={jobData.title || ""}
            onChange={onInputChange}
          />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={2}>
          <label>Description:</label>
        </Grid.Column>
        <Grid.Column width={8}>
          <Form.TextArea
            name="description"
            value={jobData.description || ""}
            onChange={onInputChange}
            style={{ minHeight: 100 }}
          />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={2}>
          <label>Skills:</label>
        </Grid.Column>
        <Grid.Column width={8}>
          <Form.Input
            name="skills"
            value={jobData.skills || ""}
            onChange={onInputChange}
            placeholder="Please add skills that your job requires e.g. Java"
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <p></p>
    <p>Developers will find your job based on the skills you added here.</p>

    <br />
    <div
      style={{
        background: "lightgray",
        marginBottom: "20px",
        padding: "10px",
        textAlign: "left",
      }}
    >
      <h2>Project Conditions</h2>
    </div>
    <Grid>
      <Grid.Row>
        <Grid.Column width={2}>
          <label>Project length:</label>
        </Grid.Column>
        <Grid.Column width={8}>
          <Form.Input
            name="projectLength"
            value={jobData.projectLength || ""}
            onChange={onInputChange}
          />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={2}>
          <label>Payment:</label>
        </Grid.Column>
        <Grid.Column width={3}>
          <Grid>
            <Grid.Row>
              <Grid.Column width={4}>
                <label>Min</label>
              </Grid.Column>
              <Grid.Column width={12}>
                <Form.Input
                  name="minPayment"
                  value={jobData.minPayment || ""}
                  onChange={onInputChange}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
        <Grid.Column width={3}>
          <Grid>
            <Grid.Row>
              <Grid.Column width={4}>
                <label>Max</label>
              </Grid.Column>
              <Grid.Column width={12}>
                <Form.Input
                  name="maxPayment"
                  value={jobData.maxPayment || ""}
                  onChange={onInputChange}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={2}>
          <label>Working hours:</label>
        </Grid.Column>
        <Grid.Column width={8}>
          <Form.Input
            name="workingHours"
            value={jobData.workingHours || ""}
            onChange={onInputChange}
          />
        </Grid.Column>
            </Grid.Row>
            
    </Grid>
  </div>
);

export default FreelanceJobForm;
