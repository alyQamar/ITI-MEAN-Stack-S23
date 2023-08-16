const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// Create an array of products.
const products = ["glasses", "Watch", "Car"];

// Add the body-parser middleware to the app.
app.use(bodyParser.json());

// Define the GET method for the "/welcome" route.
app.get("/welcome", (req, res) => {
  // Get the username from the request body.
  const username = req.body.username;

  // Respond with a welcome message.
  res.send(`Welcome, ${username}`);
});

// Define the POST method for the "/login" route.
app.post("/login", (req, res) => {
  // Get the username and password from the request body.
  const username = req.body.username;
  const password = req.body.password;

  // Check if the username and password are valid.
  if (username === "admin" && password === "secret") {
    // Respond with a welcome message.
    res.send(`Welcome, ${username}`);
  } else {
    // Respond with an error message.
    res.send("Invalid username or password");
  }
});

// Define the "/products:id" route.
app.get("/products/:id", (req, res) => {
  // Get the product ID from the route parameters.
  const id = parseInt(req.params.id);

  // Check if the product ID is valid.
  if (id < 0 || id >= products.length) {
    // Respond with an error message.
    res.send("Invalid product ID");
  } else {
    // Respond with the product name.
    res.send(products[id]);
  }
});

// Listen on port 4000.
app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
