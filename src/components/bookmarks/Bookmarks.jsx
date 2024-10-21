import PropTypes from "prop-types";
import Bookmark from "../bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="my-8">
            <div className="border-2 border-[#6047EC] bg-[#6047ec21] p-6 rounded-xl">
                <h3 className="text-2xl font-bold text-[#6047EC]">Spent time on read : {readingTime} min</h3>
            </div>
            <div className="rounded-xl bg-gray-200 p-6 my-6">
                <h3 className="text-2xl font-bold">Bookmarked Blogs: {bookmarks.length}</h3>
                {
                    bookmarks.map(bookmark => <Bookmark
                        key={bookmark.id}
                        bookmark={bookmark}
                    ></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number,
}

export default Bookmarks;