import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import isEmpty from '../../helpers/isEmpty';
import { fetchUserThunk, fetchUserResetedThunk } from '../../thunks/userThunk';
import Layout from '../../components/Layout/Layout';

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
	}, [fetchUserResetedThunk, fetchUserThunk]);
	return (
		<Layout>
			<div className="container">
				<div className="row">
					{fetchUser.isLoading || isEmpty(fetchUser.user) ? (
						'Loading...........'
					) : (
						<>
							{fetchUser.user.map((item) => (
								<div className="col-md-4 grid-card-user" key={item.id}>
									<div className="card p-3">
										<div className="d-flex flex-row mb-3">
											<img src="https://i.imgur.com/ccMhxvC.png" width={70} alt="" />
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
		</Layout>
	);
};

FetchUser.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(FetchUser);
