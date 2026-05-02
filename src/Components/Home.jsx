import React from 'react';
import { Link } from 'react-router';

const Home = () => {
  return (
    <>
    
     <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Home Page</h1>

      <Link to="/login">
        <button style={{ padding: "10px 20px", cursor: "pointer" }}>
          Login
        </button>
      </Link>
    </div>
    
    </>
  );
}

export default Home;
