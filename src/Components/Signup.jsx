import React, { useState } from "react";
import { Link } from "react-router";

const Signup = () => {
    const [msg, setMsg] = useState(false);
    const [des, setDes] = useState("");
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Signup Data:", form);



        // Later you can send this to backend (API)
        const { name, email, password } = form;
        fetch("https://api-signup-1.vercel.app/api/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, password }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("Response from backend:", data);
                // You can add logic here to handle success or error responses
                if (data.success) {
                    // Handle successful signup
                    console.log("Signup successful!");
                    setMsg(true);
                    setDes("Signup successful! Please login.");
                    setForm({ name: "", email: "", password: "" }); // Clear form
                } else {
                    // Handle signup error
                    console.error("Signup failed:", data.message);
                    setMsg(true);
                    setDes(data.message || "Signup failed. Please try again.");
                }
            })
            .catch((error) => {
                console.error("Error during signup:", error);
                setMsg(true);
                setDes("server not available. Please try again.");
            });

    };

    return (
        <div style={styles.container}>
            <h2>Signup Page</h2>
                {msg && <p>{des}</p>}
            <form onSubmit={handleSubmit} style={styles.form}>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    value={form.name}
                    onChange={handleChange}
                    style={styles.input}
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={form.email}
                    onChange={handleChange}
                    style={styles.input}
                    required
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    value={form.password}
                    onChange={handleChange}
                    style={styles.input}
                    required
                />

                <button type="submit" style={styles.button}>
                    Signup
                </button>
            </form>
            <h4>
                If you have an account then go to{" "}
                <Link to="/login">Login</Link>
            </h4>    </div>
    );
};

const styles = {
    container: {
        textAlign: "center",
        marginTop: "50px",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        width: "250px",
        margin: "auto",
        gap: "10px",
    },
    input: {
        padding: "10px",
    },
    button: {
        padding: "10px",
        cursor: "pointer",
        backgroundColor: "black",
        color: "white",
        border: "none",
    },
};

export default Signup;