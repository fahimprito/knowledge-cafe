import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa6";

const Blog = ({ blog, handleAddToBookmark }) => {
    const { title, cover, author, author_image, posted_date, reading_time, hashtags } = blog;

    return (
        <div className='py-8 border-b-2'>
            <img className='rounded-xl' src={cover} alt={`Cover of the title ${title}`} />
            <div className='flex justify-between py-6'>
                <div className='flex gap-4'>
                    <img className='w-14 h-14 object-cover rounded-full' src={author_image} alt="" />
                    <div>
                        <h3 className='text-2xl font-bold'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-4 text-xl text-gray-500'>
                    <span>{reading_time} min read</span>
                    <button onClick={handleAddToBookmark}><FaRegBookmark /></button>
                </div>
            </div>
            <h2 className='text-5xl font-bold mb-5'>{title}</h2>
            <p className='text-gray-500 text-xl flex gap-4'>
                {
                    hashtags.map((tag, idx) => <span key={idx}><a href="">#{tag}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
}

export default Blog;