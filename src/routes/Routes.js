import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from '../components/Layouts/Navbar'
import Home from '../components/Pages/Home'
import Footer from '../components/Layouts/Footer'
import Register from '../components/Auth/Register'
import Login from '../components/Auth/Login'
import CreatePost from '../components/Posts/CreatePost'
import DetailPost from '../components/Posts/DetailPost'
import EditPost from '../components/Posts/EditPost'
import AuthRouteLogT from './AuthRouteT'
import AuthRouteLogF from './AuthRouteF'

const Routes = () => {
    return (
        <Router>
            <Navbar />
            <Route exact path="/" component={Home} />
            <AuthRouteLogF path="/login" component={Login} />
            <AuthRouteLogF path="/register" component={Register} />
            <AuthRouteLogT path="/create-post" component={CreatePost} />
            <Route path="/posts/:slug" component={DetailPost} />
            <AuthRouteLogT path="/edit-post/:slug" component={EditPost} />
            <Footer />
        </Router>
    )
}
export default Routes