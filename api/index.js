const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

let users = [
    {
        "userName": "May",
        "userId": "125",
        "userRole": "Candidate",
        "profileDescription": "Frontend developer with Angular experience.",
        "profileImage": "https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg?w=2000",
        "skills": ["Angular", "TypeScript", "HTML", "CSS"],
        "experienceYears": 2,
        "isActive": true,
        "address": {
            "current": {
                "city": "Pune",
                "state": "Maharashtra",
                "country": "India",
                "zipcode": "411001"
            },
            "permanent": {
                "city": "Latur",
                "state": "Maharashtra",
                "country": "India",
                "zipcode": "413512"
            }
        }
    },
    {
        "userName": "Rahul",
        "userId": "126",
        "userRole": "Candidate",
        "profileDescription": "Node.js backend developer working with MongoDB.",
        "profileImage": "https://storyblok-cdn.photoroom.com/f/191576/1200x800/a3640fdc4c/profile_picture_maker_before.webp",
        "skills": ["Node.js", "Express", "MongoDB"],
        "experienceYears": 3,
        "isActive": true,
        "address": {
            "current": {
                "city": "Mumbai",
                "state": "Maharashtra",
                "country": "India",
                "zipcode": "400001"
            },
            "permanent": {
                "city": "Nagpur",
                "state": "Maharashtra",
                "country": "India",
                "zipcode": "440001"
            }
        }
    },
    {
        "userName": "Sneha",
        "userId": "127",
        "userRole": "HR",
        "profileDescription": "HR executive handling recruitment and onboarding.",
        "profileImage": "https://images.pexels.com/photos/28908606/pexels-photo-28908606.jpeg?cs=srgb&dl=pexels-byb-byb-412101727-28908606.jpg&fm=jpg",
        "skills": ["Recruitment", "Communication", "MS Excel"],
        "experienceYears": 4,
        "isActive": true,
        "address": {
            "current": {
                "city": "Hyderabad",
                "state": "Telangana",
                "country": "India",
                "zipcode": "500001"
            },
            "permanent": {
                "city": "Nanded",
                "state": "Maharashtra",
                "country": "India",
                "zipcode": "431601"
            }
        }
    },
    {
        "userName": "Amit",
        "userId": "128",
        "userRole": "Admin",
        "profileDescription": "System administrator managing infrastructure.",
        "profileImage": "https://kmkm.com/best-profile-picture/male-pictures-for-fake-profile/male-pictures-for-fake-profile-19.jpg",
        "skills": ["Linux", "Networking", "AWS"],
        "experienceYears": 5,
        "isActive": false,
        "address": {
            "current": {
                "city": "Bangalore",
                "state": "Karnataka",
                "country": "India",
                "zipcode": "560001"
            },
            "permanent": {
                "city": "Solapur",
                "state": "Maharashtra",
                "country": "India",
                "zipcode": "413001"
            }
        }
    },
    {
        "userName": "Pooja",
        "userId": "129",
        "userRole": "Candidate",
        "profileDescription": "UI/UX designer with Figma and Adobe XD experience.",
        "profileImage": "https://scx2.b-cdn.net/gfx/news/hires/2018/whydosomanyp.jpg",
        "skills": ["Figma", "Adobe XD", "Wireframing"],
        "experienceYears": 3,
        "isActive": true,
        "address": {
            "current": {
                "city": "Pune",
                "state": "Maharashtra",
                "country": "India",
                "zipcode": "411002"
            },
            "permanent": {
                "city": "Kolhapur",
                "state": "Maharashtra",
                "country": "India",
                "zipcode": "416003"
            }
        }
    },
    {
        "userName": "Vikas",
        "userId": "130",
        "userRole": "Candidate",
        "profileDescription": "Full stack developer working on MEAN stack.",
        "profileImage": "https://scx2.b-cdn.net/gfx/news/hires/2018/whydosomanyp.jpg",
        "skills": ["Angular", "Node.js", "MongoDB", "Express"],
        "experienceYears": 4,
        "isActive": true,
        "address": {
            "current": {
                "city": "Nashik",
                "state": "Maharashtra",
                "country": "India",
                "zipcode": "422001"
            },
            "permanent": {
                "city": "Aurangabad",
                "state": "Maharashtra",
                "country": "India",
                "zipcode": "431001"
            }
        }
    },
    {
        "userName": "Kiran",
        "userId": "131",
        "userRole": "Manager",
        "profileDescription": "Project manager handling multiple web projects.",
        "profileImage": "https://scx2.b-cdn.net/gfx/news/hires/2018/whydosomanyp.jpg",
        "skills": ["Project Management", "Agile", "Scrum"],
        "experienceYears": 7,
        "isActive": true,
        "address": {
            "current": {
                "city": "Delhi",
                "state": "Delhi",
                "country": "India",
                "zipcode": "110001"
            },
            "permanent": {
                "city": "Jaipur",
                "state": "Rajasthan",
                "country": "India",
                "zipcode": "302001"
            }
        }
    },
    {
        "userName": "Neha",
        "userId": "132",
        "userRole": "Candidate",
        "profileDescription": "QA engineer experienced in manual and automation testing.",
        "profileImage": "https://scx2.b-cdn.net/gfx/news/hires/2018/whydosomanyp.jpg",
        "skills": ["Selenium", "Manual Testing", "API Testing"],
        "experienceYears": 3,
        "isActive": false,
        "address": {
            "current": {
                "city": "Chennai",
                "state": "Tamil Nadu",
                "country": "India",
                "zipcode": "600001"
            },
            "permanent": {
                "city": "Madurai",
                "state": "Tamil Nadu",
                "country": "India",
                "zipcode": "625001"
            }
        }
    },
    {
        "userName": "Arjun",
        "userId": "133",
        "userRole": "Candidate",
        "profileDescription": "Data analyst working with Python and Power BI.",
        "profileImage": "https://png.pngtree.com/background/20230610/original/pngtree-portrait-of-handsome-young-man-picture-image_3022259.jpg",
        "skills": ["Python", "Power BI", "SQL"],
        "experienceYears": 2,
        "isActive": true,
        "address": {
            "current": {
                "city": "Indore",
                "state": "Madhya Pradesh",
                "country": "India",
                "zipcode": "452001"
            },
            "permanent": {
                "city": "Bhopal",
                "state": "Madhya Pradesh",
                "country": "India",
                "zipcode": "462001"
            }
        }
    }
]

app.get('/api/users', (req, res) => {
    res.json(users);
});

app.get('/api/users/:userId', (req, res) => {
    const { userId } = req.params;

    const user = users.find(u => u.userId === userId);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
});

app.post('/api/users', (req, res) => {
    const newUser = req.body;

    if (!newUser.userId) {
        return res.status(400).json({ message: "userId is required" });
    }

    users.push(newUser);

    res.status(201).json(newUser);
});

app.put('/api/users/:userId', (req, res) => {
    const { userId } = req.params;

    const user = users.find(u => u.userId === userId);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    Object.assign(user, req.body);

    res.json(user);
});

app.delete('/api/users/:userId', (req, res) => {
    const { userId } = req.params;

    const index = users.findIndex(u => u.userId === userId);

    if (index === -1) {
        return res.status(404).json({ message: "User not found" });
    }

    const deletedUser = users.splice(index, 1);

    res.json(deletedUser[0]);
});

if (require.main === module) {
    app.listen(5000, () => {
        console.log("Server running on http://localhost:5000");
    });
}

module.exports = app;
