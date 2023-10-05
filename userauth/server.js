'use strict';
if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const express = require('express');
const path = require('path');
const app = express();
const bcrypt = require("bcrypt");
const initializePassport = require("./passport-config");
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");

initializePassport(
    passport,
    email => users.find(user => user.email === email),
    id => users.find(user => user.id === id)
);

// Middleware for parsing request body
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(flash());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

const users = []; // Your array to store users

// Configuring register.html
app.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        });
        console.log(users);

        res.redirect('/login');
    } catch (e) {
        res.redirect('/login');
    }
});

// Configuring login.html
app.post('/login', passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
    successFlash: "Login successful!"
}), (req, res) => {
    // This block handles custom error messages if needed
    const errorMessage = req.flash("error"); // Get the error message from flash
    if (errorMessage && errorMessage.length > 0) {
        // Flash message exists, handle it (you can customize this part)
        console.log(errorMessage[0]); // Log the error message to the console
    }

    // Redirect the user to another page or perform other actions
    res.redirect("/login");
});

// Add this route to your server.js or app.js file
app.get('/logout', (req, res) => {
    
    req.logOut();
    console.log("Logging out...");
     // This is provided by Passport.js to clear the user's session
    
    
    res.redirect('/login'); 
    console.log("Logged out.");
});
  


app.get('/register', async (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'register.html'));
});

app.get('/login', async (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

app.listen(3000, () => {
    console.log("Server successfully running on port 3000");
});
