import React, { useState } from 'react';
import { Button, Form, Message } from 'semantic-ui-react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const auth = getAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      setError('Error signing in with password and email!');
      console.error('Error signing in with password and email', error);
    }
  };

  return (
    <div className="contact" style={{ backgroundColor: 'teal', marginTop: '30px', marginBottom: '20px' }}>
      <h1 style={{ color: 'white', textAlign: 'center' }}>Login to DevLink</h1>
      
      <Form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Button as={Link} to="/createaccount" style={{ backgroundColor: 'blue', color: 'white', marginBottom: '10px', marginLeft: '400px' }}>Sign Up</Button>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '10px' }}>
        <label htmlFor="email" style={{ color: 'white', marginRight: '10px', width: '100px', textAlign: 'right' }}>Email</label>
        <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '10px' }}>
          <label htmlFor="password" style={{ color: 'white', marginRight: '10px', width: '100px', textAlign: 'right' }}>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button type="submit" style={{ backgroundColor: 'blue', color: 'white', padding: '10px', marginTop: '10px', marginRight: '70px' }}>Submit</Button>
      </Form>
      {error && <Message color="red">{error}</Message>}
    </div>
  );
};

export default Login;
