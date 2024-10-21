import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import Header from './components/header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = blog => {
    // console.log(blog);
    const newBookmark = [...bookmarks, blog];
    setBookmarks(newBookmark);

  }

  const handleMarkAsRead = time => {
    console.log('time', time);
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);

  }

  return (
    <>
      <Header></Header>
      <div className='container mx-auto grid md:grid-cols-3 gap-6'>
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Bookmarks
          bookmarks={bookmarks}
          readingTime={readingTime}
        ></Bookmarks>
      </div>
    </>
  )
}

export default App
