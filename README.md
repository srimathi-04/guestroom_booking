# GUESTROOM_BOOKING
This is a MERN stack application that allows house owners to manage their properties and rooms, and customers to book rooms for a short stay. House owners can register their properties, create and manage rooms, while customers can browse, check availability, and book rooms.

## Features

- *User Management:*
  - House owners can register and manage their properties and rooms.
  - Customers can register, browse rooms, and book rooms.

- *Room Management:*
  - House owners can create, update, and delete rooms.
  - Customers can view room details and check availability.

- *Booking Management:*
  - Customers can book available rooms for a specified period.
  - Bookings prevent double-booking of the same room for overlapping periods.

## Technologies Used

- *Frontend:* React (not included in this repository)
- *Backend:* Node.js, Express.js
- *Database:* MongoDB
- *Authentication:* JWT (JSON Web Tokens)
##
#### Getting Started
##
##### Prerequisites
##
-  [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (You need an Atlas cluster or a local MongoDB instance)
- Postman (for testing the API)
##
1. **Clone the Repository**
##
##   ```bash
##   git clone https://github.com/srimathi-04/GUESTROOM_BOOKING
##   cd GRP
##   cd backend
### Install Dependencies
npm install
##
## Configure Environment Variables
##
## Create a .env file in the root directory of the project and add the following variables:
##
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=4000
##
## Start the Application
##
npm start
##
##  The server will start and listen on the port specified in the .env file (default is 4000).
##  API Endpoints
##  Authentication
##  Register House Owner
##  
##  POST /api/auth/register-owner
##  Request Body: { email, mobileNumber, password, role }
##  Login House Owner
##  
##  POST /api/auth/login-owner
##  Request Body: { email, password }
##  Register Customer
##  
##  POST /api/auth/register-customer
##  Request Body: { email, mobileNumber, password, role }
##  Login Customer
##
## POST /api/auth/login-customer
## Request Body: { email, password }
## Property
## Create Property
## POST /api/properties
## Request Body: { address, description }
## Room
## Create Room
## 
## POST /api/rooms
## Request Body: { propertyId, name, floorSize, numberOfBeds, amenities, rentAmount, minBookingPeriod, maxBookingPeriod, photos }
## Update Room
##
## PUT /api/rooms/:roomId
## Request Body: { name, floorSize, numberOfBeds, amenities, rentAmount, minBookingPeriod, maxBookingPeriod, photos }
## Delete Room
##
## DELETE /api/rooms/:roomId
## Booking
## Create Booking
## POST /api/bookings
## Request Body: { roomId, startDate, endDate }
## Middleware
## Authentication Middleware

## Protects routes and ensures that the user is authenticated. It verifies JWT tokens and attaches user information to the request object.
## Admin Middleware

## Ensures that only users with the 'house_owner' role have access to certain routes.
##
##
##### Instructions to Use the README
##
## 1. **Replace Placeholder Information:** Make sure to replace placeholders like `yourusername`, `your_mongodb_connection_string`, `your_jwt_secret_key`, and `your-email@example.com` with your actual information.
## 2. **Add License:** If you have a specific license, replace the license section accordingly or include a LICENSE file in your repository.
##3. **Additional Information:** You might want to add more details about the project or any specific instructions relevant to your project.
##
