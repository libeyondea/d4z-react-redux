import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import isEmpty from '../../helpers/isEmpty';
import { singleUserThunk, singleUserResetedThunk } from '../../thunks/userThunk';
import MainLayout from '../../layouts/MainLayout';
import SingleUserLoading from '../../components/Loading/SingleUserLoading';

const propTypes = {
	singleUserThunk: PropTypes.func.isRequired,
	singleUserResetedThunk: PropTypes.func.isRequired,
	singleUser: PropTypes.object.isRequired,
	login: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
	singleUser: state.users.singleUser,
	login: state.auth.login
});
const mapDispatchToProps = {
	singleUserThunk,
	singleUserResetedThunk
};
const SingleUser = (props) => {
	const { singleUserThunk, singleUserResetedThunk, singleUser, login } = props;
	const { id, user_name } = useParams();
	useEffect(() => {
		singleUserThunk(id, user_name);
		return () => {
			singleUserResetedThunk();
		};
	}, [id, singleUserResetedThunk, singleUserThunk, user_name]);
	return (
		<MainLayout>
			<header className="masthead" style={{ backgroundImage: 'url("/assets/img/react.jpg")' }}>
				<div className="overlay" />
				<div className="container">
					<div className="row">
						<div className="col-lg-8 col-md-10 mx-auto">
							<div className="site-heading">
								<h1>My Profile</h1>
								<span className="subheading">Profile</span>
							</div>
						</div>
					</div>
				</div>
			</header>
			<div className="container">
				<div className="row">
					{singleUser.isLoading || isEmpty(singleUser.user) ? (
						<SingleUserLoading />
					) : (
						<>
							<div className="col-lg-4">
								<div className="profile-card-4 z-depth-3">
									<div className="card">
										<div className="card-body text-center bg-default rounded-top">
											<div className="user-box">
												<img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="user avatar" />
											</div>
											<h5 className="mb-1">
												{singleUser.user.last_name} {singleUser.user.first_name}
											</h5>
										</div>
										<div className="card-body">
											<ul className="list-group shadow-none">
												<li className="list-group-item">
													<div className="list-icon">
														<i className="fa fa-phone-square" />
													</div>
													<div className="list-details">
														<span>{singleUser.user.phone_number}</span>
														<small>Mobile Number</small>
													</div>
												</li>
												<li className="list-group-item">
													<div className="list-icon">
														<i className="fa fa-envelope" />
													</div>
													<div className="list-details">
														<span>{singleUser.user.email}</span>
														<small>Email Address</small>
													</div>
												</li>
												<li className="list-group-item">
													<div className="list-icon">
														<i className="fa fa-globe" />
													</div>
													<div className="list-details">
														<span>www.example.com</span>
														<small>Website Address</small>
													</div>
												</li>
											</ul>
											<div className="row text-center mt-4">
												<div className="col p-2">
													<h4 className="mb-1 line-height-5">154</h4>
													<small className="mb-0 font-weight-bold">Projects</small>
												</div>
												<div className="col p-2">
													<h4 className="mb-1 line-height-5">2.2k</h4>
													<small className="mb-0 font-weight-bold">Followers</small>
												</div>
												<div className="col p-2">
													<h4 className="mb-1 line-height-5">9.1k</h4>
													<small className="mb-0 font-weight-bold">Views</small>
												</div>
											</div>
										</div>
										<div className="card-footer text-center">
											<a href="#!" className="btn-social btn-facebook waves-effect waves-light m-1">
												<i className="fa fa-facebook" />
											</a>
											<a href="#!" className="btn-social btn-google-plus waves-effect waves-light m-1">
												<i className="fa fa-google-plus" />
											</a>
											<a href="#!" className="list-inline-item btn-social btn-behance waves-effect waves-light">
												<i className="fa fa-behance" />
											</a>
											<a href="#!" className="list-inline-item btn-social btn-dribbble waves-effect waves-light">
												<i className="fa fa-dribbble" />
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-8">
								<div className="card z-depth-3">
									<div className="card-body">
										<ul className="nav nav-pills nav-pills-primary nav-justified">
											<li className="nav-item">
												<a href="#!" data-target="#profile" data-toggle="pill" className="nav-link active show">
													<i className="icon-user" /> <span className="hidden-xs">Profile</span>
												</a>
											</li>
											{singleUser.user.id === login.user.id && (
												<>
													<li className="nav-item">
														<a href="#!" data-target="#messages" data-toggle="pill" className="nav-link">
															<i className="icon-envelope-open" /> <span className="hidden-xs">Messages</span>
														</a>
													</li>
													<li className="nav-item">
														<a href="#!" data-target="#edit" data-toggle="pill" className="nav-link">
															<i className="icon-note" /> <span className="hidden-xs">Edit</span>
														</a>
													</li>
												</>
											)}
										</ul>
										<div className="tab-content p-3">
											<div className="tab-pane active show" id="profile">
												<h5 className="mb-3">User Profile</h5>
												<div className="row">
													<div className="col-md-6">
														<h6>About</h6>
														<p>Web Designer, UI/UX Engineer</p>
														<h6>Hobbies</h6>
														<p>Indie music, skiing and hiking. I love the great outdoors.</p>
													</div>
													<div className="col-md-6">
														<h6>Recent badges</h6>
														<a href="#!" className="badge badge-dark badge-pill">
															html5
														</a>
														<a href="#!" className="badge badge-dark badge-pill">
															react
														</a>
														<a href="#!" className="badge badge-dark badge-pill">
															codeply
														</a>
														<a href="#!" className="badge badge-dark badge-pill">
															angularjs
														</a>
														<a href="#!" className="badge badge-dark badge-pill">
															css3
														</a>
														<a href="#!" className="badge badge-dark badge-pill">
															jquery
														</a>
														<a href="#!" className="badge badge-dark badge-pill">
															bootstrap
														</a>
														<a href="#!" className="badge badge-dark badge-pill">
															responsive-design
														</a>
														<hr />
														<span className="badge badge-primary">
															<i className="fa fa-user" /> 900 Followers
														</span>
														<span className="badge badge-success">
															<i className="fa fa-cog" /> 43 Forks
														</span>
														<span className="badge badge-danger">
															<i className="fa fa-eye" /> 245 Views
														</span>
													</div>
													<div className="col-md-12">
														<h5 className="mt-2 mb-3">
															<span className="fa fa-clock-o ion-clock float-right" /> Recent Activity
														</h5>
														<table className="table table-hover table-striped">
															<tbody>
																<tr>
																	<td>
																		<strong>Abby</strong> joined ACME Project Team in <strong>`Collaboration`</strong>
																	</td>
																</tr>
																<tr>
																	<td>
																		<strong>Gary</strong> deleted My Board1 in <strong>`Discussions`</strong>
																	</td>
																</tr>
																<tr>
																	<td>
																		<strong>Kensington</strong> deleted MyBoard3 in <strong>`Discussions`</strong>
																	</td>
																</tr>
																<tr>
																	<td>
																		<strong>John</strong> deleted My Board1 in <strong>`Discussions`</strong>
																	</td>
																</tr>
																<tr>
																	<td>
																		<strong>Skell</strong> deleted his post Look at Why this is.. in{' '}
																		<strong>`Discussions`</strong>
																	</td>
																</tr>
															</tbody>
														</table>
													</div>
												</div>
											</div>
											{singleUser.user.id === login.user.id && (
												<>
													<div className="tab-pane" id="messages">
														<div className="alert alert-info alert-dismissible" role="alert">
															<button type="button" className="close" data-dismiss="alert">
																×
															</button>
															<div className="alert-icon">
																<i className="icon-info" />
															</div>
															<div className="alert-message">
																<span>
																	<strong>Info!</strong> Lorem Ipsum is simply dummy text.
																</span>
															</div>
														</div>
														<table className="table table-hover table-striped">
															<tbody>
																<tr>
																	<td>
																		<span className="float-right font-weight-bold">3 hrs ago</span> Here is your a link
																		to the latest summary report from the..
																	</td>
																</tr>
																<tr>
																	<td>
																		<span className="float-right font-weight-bold">Yesterday</span> There has been a
																		request on your account since that was..
																	</td>
																</tr>
																<tr>
																	<td>
																		<span className="float-right font-weight-bold">9/10</span> Porttitor vitae ultrices
																		quis, dapibus id dolor. Morbi venenatis lacinia rhoncus.
																	</td>
																</tr>
																<tr>
																	<td>
																		<span className="float-right font-weight-bold">9/4</span> Vestibulum tincidunt
																		ullamcorper eros eget luctus.
																	</td>
																</tr>
																<tr>
																	<td>
																		<span className="float-right font-weight-bold">9/4</span> Maxamillion ais the fix
																		for tibulum tincidunt ullamcorper eros.
																	</td>
																</tr>
															</tbody>
														</table>
													</div>
													<div className="tab-pane" id="edit">
														<form>
															<div className="form-group row">
																<label className="col-lg-3 col-form-label form-control-label">First name</label>
																<div className="col-lg-9">
																	<input className="form-control" type="text" defaultValue="Mark" />
																</div>
															</div>
															<div className="form-group row">
																<label className="col-lg-3 col-form-label form-control-label">Last name</label>
																<div className="col-lg-9">
																	<input className="form-control" type="text" defaultValue="Jhonsan" />
																</div>
															</div>
															<div className="form-group row">
																<label className="col-lg-3 col-form-label form-control-label">Email</label>
																<div className="col-lg-9">
																	<input className="form-control" type="email" defaultValue="mark@example.com" />
																</div>
															</div>
															<div className="form-group row">
																<label className="col-lg-3 col-form-label form-control-label">Change profile</label>
																<div className="col-lg-9">
																	<input className="form-control" type="file" />
																</div>
															</div>
															<div className="form-group row">
																<label className="col-lg-3 col-form-label form-control-label">Website</label>
																<div className="col-lg-9">
																	<input className="form-control" type="url" defaultValue />
																</div>
															</div>
															<div className="form-group row">
																<label className="col-lg-3 col-form-label form-control-label">Address</label>
																<div className="col-lg-9">
																	<input className="form-control" type="text" defaultValue placeholder="Street" />
																</div>
															</div>
															<div className="form-group row">
																<label className="col-lg-3 col-form-label form-control-label" />
																<div className="col-lg-6">
																	<input className="form-control" type="text" defaultValue placeholder="City" />
																</div>
																<div className="col-lg-3">
																	<input className="form-control" type="text" defaultValue placeholder="State" />
																</div>
															</div>
															<div className="form-group row">
																<label className="col-lg-3 col-form-label form-control-label">Username</label>
																<div className="col-lg-9">
																	<input className="form-control" type="text" defaultValue="jhonsanmark" />
																</div>
															</div>
															<div className="form-group row">
																<label className="col-lg-3 col-form-label form-control-label">Password</label>
																<div className="col-lg-9">
																	<input className="form-control" type="password" defaultValue={11111122333} />
																</div>
															</div>
															<div className="form-group row">
																<label className="col-lg-3 col-form-label form-control-label">Confirm password</label>
																<div className="col-lg-9">
																	<input className="form-control" type="password" defaultValue={11111122333} />
																</div>
															</div>
															<div className="form-group row">
																<label className="col-lg-3 col-form-label form-control-label" />
																<div className="col-lg-9">
																	<input type="button" className="btn btn-secondary mr-3" defaultValue="Cancel" />
																	<input type="button" className="btn btn-primary" defaultValue="Save profile" />
																</div>
															</div>
														</form>
													</div>
												</>
											)}
										</div>
									</div>
								</div>
							</div>
						</>
					)}
				</div>
			</div>
		</MainLayout>
	);
};

SingleUser.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(SingleUser);
