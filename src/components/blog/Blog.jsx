import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    return (
        <div>
            <h2>Blog</h2>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
}

export default Blog;