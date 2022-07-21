import React, { createContext, useState } from 'react';

export const BlogContext = createContext();

const BlogContextProvider = (props) => {
    const [blogs, setBlogs] = useState([
        {title: "Mario is stupid", content: "Super Mario Galaxy is the worst game i've ever played", author: "marioHater", id: 0},
        {title: "Mario is not stupid", content: "Super Mario Galaxy is the best game i've ever played", author: "marioLover", id: 1}
    ]);

    const addBlog = (title, content, author) => {
        var newBlogs = [...blogs, {title: title, content: content, author: author, id: blogs.length}];
        setBlogs(newBlogs);
    }
    return ( 
        <BlogContext.Provider value={{ blogs, setBlogs, addBlog }}>
            {props.children}    
        </BlogContext.Provider>
    );
}
 
export default BlogContextProvider;