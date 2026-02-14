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
    res.status(200).json({
        success: true,
        count: users.length,
        data: users
    });
});

app.get('/api/users/:id', (req, res) => {

    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }

    res.status(200).json({
        success: true,
        data: user
    });
});

app.post('/api/users', (req, res) => {

    const { name, email, address, role } = req.body;

    if (!name || !email || !address || !role) {
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        });
    }

    const newUser = {
        id: nextId++,
        name,
        email,
        address,
        role
    };

    users.push(newUser);

    res.status(201).json({
        success: true,
        message: "User created successfully",
        data: newUser
    });
});

app.put('/api/users/:id', (req, res) => {

    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }

    const { name, email, address, role } = req.body;

    if (name) user.name = name;
    if (email) user.email = email;
    if (address) user.address = address;
    if (role) user.role = role;

    res.status(200).json({
        success: true,
        message: "User updated successfully",
        data: user
    });
});


app.delete('/api/users/:id', (req, res) => {

    const id = parseInt(req.params.id);
    const userIndex = users.findIndex(u => u.id === id);

    if (userIndex === -1) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }

    const deletedUser = users.splice(userIndex, 1);

    res.status(200).json({
        success: true,
        message: "User deleted successfully",
        data: deletedUser[0]
    });
});



if (require.main === module) {
    app.listen(5000, () => {
        console.log("Server running on http://localhost:5000");
    });
}

module.exports = app;
