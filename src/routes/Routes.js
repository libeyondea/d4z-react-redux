import React from 'react'
import { BrowserRouter as Switch, Route } from 'react-router-dom'
import HomeRoute from './HomeRoute'
import AuthRoute from './AuthRoute'
import PostRoute from './PostRoute'
import AnyRoute from './AnyRoute'

const Routes = () => {
    return (
        <Switch>
            <HomeRoute />
            <AuthRoute />
            <PostRoute />
            <AnyRoute />
        </Switch>
    )
}
export default Routes