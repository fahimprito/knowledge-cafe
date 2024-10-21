import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
    const { title } = bookmark
    return (
        <div className="rounded-xl bg-white p-6 my-6">
            <h3 className="text-xl font-semibold">{title}</h3>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired,
}

export default Bookmark;