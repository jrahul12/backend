const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

let users = [
    { id: 1, name: "Rahul", email: "rahul@gmail.com", address: "Hyderabad", role: "Frontend Developer" },
    { id: 2, name: "Amit", email: "amit@gmail.com", address: "Mumbai", role: "Backend Developer" },
    { id: 3, name: "Priya", email: "priya@gmail.com", address: "Delhi", role: "UI/UX Designer" },
    { id: 4, name: "Sneha", email: "sneha@gmail.com", address: "Bangalore", role: "QA Engineer" },
    { id: 5, name: "Arjun", email: "arjun@gmail.com", address: "Chennai", role: "Full Stack Developer" }
];

let nextId = 6;

app.get('/api/users', (req, res) => {
    res.json(users);
});

app.post('/api/users', (req, res) => {
    const { name, email, address, role } = req.body;

    const newUser = { id: nextId++, name, email, address, role };
    users.push(newUser);

    res.status(201).json(newUser);
});

app.put('/api/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);

    if (!user) return res.status(404).json({ message: "User not found" });

    Object.assign(user, req.body);
    res.json(user);
});

app.delete('/api/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    users = users.filter(u => u.id !== id);
    res.json({ message: "User deleted" });
});

module.exports = app;
