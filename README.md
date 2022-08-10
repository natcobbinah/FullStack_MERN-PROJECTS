# FullStack_MERN-PROJECTS
This project is a series of hands-on exercises following through Shama Hoque's FullStack_MERN-PROJECTS, making changes where necessary to get a working
code and meet the software development requirements as illustrated throughout the book

## On user_backend
  - The [user_backend] folder, serves as the (server-side) of the application using Node, Express, and MongoDB.
  - The [UserModel] for storing user data is implemented with Mongoose ODM (Object Data Modelling)
  - The [userAPI] endpoints to perform CRUD operations,was achieved with Express library
  - The [UserAuthentication] for protected routes was implemented with JWT and express-jwt
  - The [UserPassword field] was encrypted with crypto library in node
  
To run [user_backend] only
  1. clone project
  2. change directory to user_backend and perform (npm install)
  3. run (npm run development)
  
  User [API-ENDPOINTS]
  
      1. Creating a User
         > POST http://localhost:3000/api/users/
         Headers: Content-Type: application/json
         body sample
          { 
            "name":"name here",
            "email":"name@hello.info",
            "password":"yourpassHere"
          }   
       
     2. Listing all Users
       > GET http://localhost:3000/api/users
       Headers: Content-Type: application/json
       
     3. User-SignIn
       >POST http://localhost:3000/auth/signin
        Headers: Content-Type: application/json
        body sample
          { 
             "email":"name here",
             "password":"your_password here"
          }
      
      On accessing below protected-routes, a user token, must be added to [Authorization] header to have a valid response
      
      4. Updating User Account
      > PUT http://localhost:3000/api/users/:userId_Here
        Headers: Content-Type: application/json
                 Authorization Bearer [userToken_Here]
        body sample
            { 
                "name":"name here",
                "email":"name@hello.info",
                "password":"yourpassHere"
            }
      
      5. Deleting User Account
      > DELETE http://localhost:3000/api/users/:userId_Here
        Headers: Content-Type: application/json
                 Authorization Bearer [userToken_Here]
                 
      6. Accessing Own User Account Record
      > GET http://localhost:3000/api/users/:userId_Here
         Headers: Content-Type: application/json
                  Authorization Bearer [userToken_Here]
      
