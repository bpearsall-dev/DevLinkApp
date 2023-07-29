function Hero() {
    return (
      <div>
        <div style={{ 
          margin: '0',
          backgroundImage: `url('https://picsum.photos/id/20/1750/300')`, 
          backgroundSize: 'contain', 
          backgroundPosition: 'center', 
          backgroundRepeat: 'no-repeat',
          width: '100vw', 
          height: '30vh',
        }} />
        <div style={{ 
          textAlign: 'center', 
          marginTop: '20px',
          fontSize: '40px',
          fontWeight: 'bold',
          color: 'black',
          marginBottom: '60px',
        }}>
          DEVLink - Connecting Developers and Clients
        </div>
      </div>
    );
  }
  
  export default Hero;
  