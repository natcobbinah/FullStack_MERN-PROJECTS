# FullStack_MERN-PROJECTS
This project is a series of hands-on exercises following through Shama Hoque's FullStack_MERN-PROJECTS, making changes where necessary to get a working
code and meet the software development requirements as illustrated throughout the book

## On mern-configtest-app
A minimal full-stack app, to illustrate connecting a frontend-framework (react) to backend(server) app, configuring Webpack and Babel to compile and bundle code during development, and to build production-ready code.

To run [mern-configtest-app] only
  1. clone project
  2. change directory to mern-configtest-app and perform (yarn add)
  3. run (yarn run development)
  4. Open your browser and [http://localhost:3000] to view output, in
     the browser

## On mern-user-app
  - The [user_backend] folder, serves as the (server-side) of the application using Node, Express, and MongoDB.
  - The [UserModel] for storing user data is implemented with Mongoose ODM (Object Data Modelling)
  - The [userAPI] endpoints to perform CRUD operations,was achieved with Express library
  - The [UserAuthentication] for protected routes was implemented with JWT and express-jwt
  - The [UserPassword field] was encrypted with crypto library in node
  - The [ui_client] was implemented with react-library
  
To run [mern-user-app] only
  1. clone project
  2. change directory to [mern-user-app] and perform (npm install)
  3. run (npm run development)
  4. Open a second [cmd interface], and type [npm run start],
  5. Open the browser, [ http://localhost:3000 ], should present the UI to allow performing available operations and user interactions
  - Have your mongoDB instance running to be able to successfully persist data to it
  
  User [API-ENDPOINTS]
  Can be tested using any suitable restAPI test tools (PostMan, ARC(Advanced Rest Client a chrome extension) or curl
  
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
      
