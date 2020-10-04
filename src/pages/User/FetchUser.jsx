import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import isEmpty from '../../helpers/isEmpty';
import { fetchUserThunk, fetchUserResetedThunk } from '../../thunks/userThunk';
import MainLayout from '../../layouts/MainLayout';
import FetchUserLoading from '../../components/Loading/FetchUserLoading';

const propTypes = {
	fetchUserThunk: PropTypes.func.isRequired,
	fetchUserResetedThunk: PropTypes.func.isRequired
};
const mapStateToProps = (state) => ({
	fetchUser: state.users.fetchUser
});
const mapDispatchToProps = {
	fetchUserThunk,
	fetchUserResetedThunk
};
const FetchUser = (props) => {
	const { fetchUserThunk, fetchUserResetedThunk, fetchUser } = props;
	useEffect(() => {
		fetchUserThunk();
		return () => {
			fetchUserResetedThunk();
		};
	}, []);
	return (
		<MainLayout>
			<header className="masthead" style={{ backgroundImage: 'url("/assets/img/react.jpg")' }}>
				<div className="overlay" />
				<div className="container">
					<div className="row">
						<div className="col-lg-8 col-md-10 mx-auto">
							<div className="site-heading">
								<h1>Users</h1>
								<span className="subheading">Users</span>
							</div>
						</div>
					</div>
				</div>
			</header>
			<div className="container">
				<div className="row">
					{fetchUser.isLoading || isEmpty(fetchUser.user) ? (
						<FetchUserLoading />
					) : (
						<>
							{fetchUser.user.map((item) => (
								<div className="col-md-4 grid-card-user" key={item.id}>
									<div className="card p-3">
										<div className="d-flex flex-row mb-3">
											<img src="https://i.imgur.com/ccMhxvC.png" width={70} />
											<div className="d-flex flex-column ml-2">
												<span>
													{item.last_name} {item.first_name}
												</span>
												<span className="text-black-50">Payment Services</span>
												<span className="ratings">
													<i className="fa fa-star" />
													<i className="fa fa-star" />
													<i className="fa fa-star" />
													<i className="fa fa-star" />
												</span>
											</div>
										</div>
										<h6>Get more context on your users with stripe data inside our platform.</h6>
										<div className="d-flex justify-content-between install mt-3">
											<span>Installed 172 times</span>
											<span className="text-primary">
												View&nbsp;
												<i className="fa fa-angle-right" />
											</span>
										</div>
									</div>
								</div>
							))}
						</>
					)}
				</div>
			</div>
		</MainLayout>
	);
};

FetchUser.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(FetchUser);
