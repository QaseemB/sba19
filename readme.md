Mongodb Project for Per scholas

Overview

This project is to show my ability to intergrate data with mongodb 

Features

User authentication and registration
CRUD operations for studio equipment and musical instruments
Responsive UI with Pug templates
RESTful API endpoints for user management and product listings


API Endpoints

GET /api/users: Retrieve all users or filter by query parameters.
POST /api/users: Create a new user.
DELETE /api/users/:id: Delete a user by ID.
GET /api/instrument: Retrieve all instruments or filter by query parameters.
POST /api/instrument: Add a new instrument.
DELETE /api/instrument/:id: Delete an instrument by ID.
GET /api/studio: Retrieve all studio equipment.
POST /api/studio: Add a new piece of studio equipment.
DELETE /api/studio/:id: Delete a piece of studio equipment by ID.


Usage

User Registration:

Navigate to /views/signup to register a new user.
Product Listings:

Visit /instruments for musical instruments.
Visit /studio for studio equipment.
User Dashboard:

Once registered, users can access /userhome for their dashboard.


Technologies Used

Express.js
Pug (formerly Jade)
Node.js
JavaScript (ES6+)

