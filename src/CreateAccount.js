import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

function CreateAccount() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState('black');
  const navigate = useNavigate();

  const auth = getAuth();
  const db = getFirestore();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, 'users', userCredential.user.uid), {
        firstName,
        lastName,
        email,
      });
      setMessage('User registered successfully. Please login.');
      setMessageColor('green');
      setEmail('');
      setFirstName('');
      setLastName('');
      setPassword('');
      navigate('/login'); // Redirect to the login page
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error registering user');
      setMessageColor('red');
    }
  };

  return (
    <div className="contact" style={{ backgroundColor: 'teal', marginTop: '30px', marginBottom: '20px', textAlign: 'center' }}>
      <h1 style={{ color: 'white' }}>Create a DevLink Account</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '20px' }}>
          <label htmlFor="firstName" style={{ color: 'white', marginRight: '10px', width: '200px', textAlign: 'right' }}>Name*</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter your first name"
            style={{ height: '30px', marginLeft: '10px' }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '20px' }}>
          <label htmlFor="lastName" style={{ color: 'white', marginRight: '10px', width: '200px', textAlign: 'right' }}>Last Name*</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter your last name"
            style={{ height: '30px', marginLeft: '10px' }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '20px' }}>
          <label htmlFor="email" style={{ color: 'white', marginRight: '10px', width: '200px', textAlign: 'right' }}>Email*</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            style={{ height: '30px', marginLeft: '10px' }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '20px' }}>
          <label htmlFor="password" style={{ color: 'white', marginRight: '10px', width: '200px', textAlign: 'right' }}>Password*</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            style={{ height: '30px', marginLeft: '10px' }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '20px' }}>
          <label htmlFor="confirmPassword" style={{ color: 'white', marginRight: '10px', width: '200px', textAlign: 'right' }}>Confirm Password*</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            required
            placeholder="Confirm your password"
            style={{ height: '30px', marginLeft: '10px' }}
          />
        </div>
        <button type="submit" style={{ backgroundColor: 'blue', color: 'white', padding: '10px', marginTop: '10px' }}>Create</button>
      </form>
      <p id="message" style={{ color: messageColor }}>{message}</p>
    </div>
  );
}

export default CreateAccount;
