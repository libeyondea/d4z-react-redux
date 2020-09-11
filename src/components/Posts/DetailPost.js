import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { detailPostAction, deletePostAction } from "../../actions/postAction";
import LoadingTitlePost from '../Loading/LoadingTitlePost';
import LoadingContentPost from '../Loading/LoadingContentPost';

const propTypes = {
    detailPostAction: PropTypes.func.isRequired,
    detailPost: PropTypes.shape({
        posts: PropTypes.shape({
            title: PropTypes.string.isRequired,
            summary: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            created_at: PropTypes.string.isRequired,
            user_name: PropTypes.string.isRequired,
        }).isRequired
    }).isRequired,
    match: PropTypes.shape({
        params: PropTypes.shape({
            slug: PropTypes.string.isRequired,
        }).isRequired
    }).isRequired,
};

const DetailPost = ({ detailPostAction, deletePostAction, deletePost, detailPost, match, history, log }) => {

    const { slug } = match.params;

    useEffect(() => {
        detailPostAction(slug);
    }, [detailPostAction, slug])

    const handleSubmit = (e) => {
        e.preventDefault();
        deletePostAction(slug, history);
    }

    const { isAuthenticated } = log;

    const authLinks = (
        <>
            <div className="clearfix">
                <form onSubmit={handleSubmit}>
                    <Link className="btn btn-primary float-right" to={`/edit-post/${detailPost.posts.slug}`}>Edit Post</Link>
                    {
                        deletePost.loading ?
                            (
                                <button type="submit" className="btn btn-danger float-righ mr-3" disabled>
                                    <span className="spinner-border spinner-border-sm mr-1" role="status" aria-hidden="true" />
                                        Loading...
                                </button>
                            ) : (
                                <button type="submit" className="btn btn-danger float-right mr-3">
                                    Delete Post
                                </button>
                            )
                    }
                </form>
            </div>
        </>
    )

    const guestLinks = null;

    return (
        <React.Fragment>
            <header className="masthead" style={detailPost.loading ? { backgroundColor: '#343a40' } : { backgroundImage: 'url("/assets/img/post-bg.jpg")' }}>
                <div className="overlay" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            {detailPost.loading ? <LoadingTitlePost /> :
                                <div className="post-heading">
                                    <h1>{detailPost.posts.title}</h1>
                                    <h2 className="subheading">{detailPost.posts.summary}</h2>
                                    <span className="meta">Posted by <a href="!#">{detailPost.posts.user_name}</a> on {detailPost.posts.created_at}
                                    </span>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </header>
            <article>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            {detailPost.loading ? <LoadingContentPost /> :
                                <>
                                    <div>
                                        <p>{detailPost.posts.content}</p>
                                    </div>
                                    {isAuthenticated ? authLinks : guestLinks}

                                </>
                            }
                        </div>
                    </div>
                </div>
            </article>
        </React.Fragment>
    );
}

const mapStateToProps = (state) => ({
    detailPost: state.detailPost,
    deletePost: state.deletePost,
    log: state.log
})

DetailPost.propTypes = propTypes;

export default connect(mapStateToProps, { detailPostAction, deletePostAction })(DetailPost)