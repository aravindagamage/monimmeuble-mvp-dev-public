require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, httpOnly: true },
  })
);

// MySQL Database Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mvpdb",
});

db.connect((err) => {
  if (err) throw err;
  console.log("MySQL Connected...");
});

// User Registration
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  db.query(
    "INSERT INTO users (username, password) VALUES (?, ?)",
    [username, hashedPassword],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.status(201).send("User registered successfully");
    }
  );
});

// User Login
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  db.query("SELECT * FROM users WHERE username = ?", [username], async (err, result) => {
    if (err) return res.status(500).send(err);
    if (result.length === 0) return res.status(401).send("Invalid credentials");

    const user = result[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) return res.status(401).send("Invalid credentials");

    const token = jwt.sign({ id: user.id }, "jwt_secret_key", { expiresIn: "1h" });

    res.cookie("token", token, { httpOnly: true, secure: false });
    res.json({ message: "Login successful", token });
  });
});

// User Logout
app.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.send("Logged out");
});

// Verify Token Middleware
const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(403).send("Access denied");

  jwt.verify(token, "jwt_secret_key", (err, decoded) => {
    if (err) return res.status(401).send("Invalid token");
    req.user = decoded;
    next();
  });
};

// Protected Route
app.get("/dashboard", verifyToken, (req, res) => {
  res.send("Welcome to the Dashboard");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
