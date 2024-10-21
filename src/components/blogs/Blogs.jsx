import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/blog";


const Blogs = ({handleAddToBookmark}) => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])

    return (
        <div className="md:col-span-2 border-2 border-red-500">
            <h4 className="text-4xl ">blogs: {blogs.length}</h4>
            {
                blogs.map(blog => <Blog
                    key={blog.id}
                    blog={blog}
                    handleAddToBookmark={handleAddToBookmark}
                ></Blog>)
            }
        </div>
    );
};

export default Blogs;