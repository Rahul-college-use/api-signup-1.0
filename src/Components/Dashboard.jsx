// import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import React from "react";

const Dashboard = () => {
    const userdata = useLocation();
    const userData = userdata.state;
    console.log("Data received in Dashboard:", userData);


  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };


  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1>Dashboard</h1>

        <p>Welcome, <b>{userData.userData.name || "User"}</b></p>
        <p>Email: {userData.userData.email}</p>
        <button onClick={handleLogout} style={styles.button}>
          Logout
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f6f8",
  },
  card: {
    padding: "30px",
    borderRadius: "12px",
    backgroundColor: "white",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    textAlign: "center",
    width: "300px",
  },
  button: {
    marginTop: "20px",
    padding: "10px 15px",
    backgroundColor: "#000",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    borderRadius: "6px",
  },
};

export default Dashboard;