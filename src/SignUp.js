import React, { useState } from 'react';

function SignUp() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState('black');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
      });

      const data = await response.text();
      setMessage(data);
      setMessageColor('green');
      setEmail('');
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error sending email');
      setMessageColor('red');
    }
  };

  return (
    <div className="contact" style={{ backgroundColor: 'lightgrey', marginTop: '20px', marginBottom: '20px' }}>
      <form id="subscribe-form" onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'left', justifyContent: 'left', flexDirection: 'row' }}>
        <label htmlFor="subscribe-email" style={{ fontSize: '30px', padding: '10px', marginRight: '30px' }}>SIGN UP FOR OUR DAILY INSIDER:</label>
        <input 
          type="email" 
          id="subscribe-email" 
          name="email" 
          required 
          value={email} 
          onChange={e => setEmail(e.target.value)}
          placeholder="Enter your email"
          style={{ fontSize: '20px', marginRight: '30px', padding: '5px', width: '300px' }}
        />
        <input type="submit" value="Subscribe" style={{ fontSize: '15px', padding: '5px 10px' }}/>
      </form>
      <p id="message" style={{ color: messageColor }}>{message}</p>
    </div>
  );
}

export default SignUp;
