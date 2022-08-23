import React from 'react'
import { Route, Routes, Navigate } from 'react-router'
import Home from './core/Home.js'
import Signin from './auth/Signin.js'
import Signup from './user/Signup.js'
import Users from './user/Users.js'
import Profile from './user/Profile.js'
import PrivateRoute from './auth/privateRoute.js'
import EditProfile from './user/EditProfile.js'
import auth from './auth/auth-helper.js'
import Menu from './core/Menu.js'

const MainRouter = () => {
    return (
        <div>
            <Menu/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="users" element={<Users />} />
                <Route path="signup" element={<Signup />} />
                <Route path="signin" element={<Signin />} />
                <Route path="/user/edit/:userId" element={
                    auth.isAuthenticated() ?
                        (
                            <EditProfile />
                        ) :
                        (
                            <Navigate to='/signin'/>
                        )
                } />
                <Route path="user/:userId" element={<Profile />} />
            </Routes>
        </div>
    )
}
export default MainRouter