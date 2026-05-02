import React, { useState  } from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router";

const Login = () => {
    const navigate = useNavigate();
    const[msg, setMsg] = useState(false);
    const[des, setDes] = useState("");
    const [form, setForm] = useState({
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
        console.log("Login Data:", form);

        // Later: send to backend API
        const { email, password } = form;
        fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }, 
            body: JSON.stringify({ email, password }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("Response from backend:", data);
                // You can add logic here to handle success or error responses
                if (data.success) {
                    // Handle successful login
                    console.log("Login successful!");
                    // setMsg(true);
                    const responseData = data.user; 
                    console.log("User data from backend:", responseData);
                    navigate("/PageLogin", { state: { userData: responseData } });
                    // setDes("Login successful! Redirecting...");
                    // You can redirect to home page or dashboard here
                }
                else {
                    // Handle login error
                    console.error("Login failed:", data.message);
                    setMsg(true);
                    setDes(data.message || "Login failed. Please try again.");
                }
            })
            .catch((error) => {
                console.error("Error during login:", error);
                setMsg(true);
                setDes("Server not available. Please try again.");
            });

    };

    return (
        <div style={styles.container}>
            <h2>Login Page</h2>

            <form onSubmit={handleSubmit} style={styles.form}>
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
                    Login
                </button>
            </form>
            <h4>
                if you new user then {" "}
                <Link to='/signup'>SignUp</Link >
              </h4>
            {msg && <p>{des}</p>}
        </div>
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

export default Login;