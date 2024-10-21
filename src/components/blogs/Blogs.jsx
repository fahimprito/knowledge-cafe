import { useEffect } from "react";
import { useState } from "react";


const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data));
    }, [])

    return (
        <div className="md:col-span-2 border-2 border-red-500">
            <h4 className="text-4xl ">blogs: {blogs.length}</h4>
        </div>
    );
};

export default Blogs;