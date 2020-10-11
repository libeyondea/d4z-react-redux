import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
	login: state.auth.login
});
const AuthRouteLogF = (props) => {
	const { login, component: Component, ...rest } = props;
	return (
		<Route
			{...rest}
			render={(props) =>
				login.isAuthenticated ? (
					<Redirect
						to={{
							pathname: '/',
							state: { from: props.location }
						}}
					/>
				) : (
					<Component {...props} />
				)
			}
		/>
	);
};

export default connect(mapStateToProps)(AuthRouteLogF);
