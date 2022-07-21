import { useContext } from "react";
import { BlogContext } from "./context/blogContext.js";
import { Link } from "react-router-dom";

const Community = () => {
    const {blogs, setBlogs, addblog} = useContext(BlogContext);

    return ( 
        <div style={{minHeight: "80.3vh"}}>
            <Link to="/AddBlog"><button className="btn btn-dark" aria-label="Add blog button" style={{marginTop: "5vh"}}>Add New Blog</button></Link>
            {blogs.map((blog) => (
                <div key={ blog.id }>
                    <div className="container row my-5 py-3" aria-label={`Blog ${blog.id} title and author`} style={{
                        margin: "auto",
                        backgroundColor: "#1A1D1A",
                        color: "white"
            
                    }}>
                        <div className="container col-12 pe-3" aria-label={`Blog ${blog.id} content`}>
                            <h5 aria-label="blog header" className="my-4"> <b>{ `${blog.title}` }</b> <br/><br/> {` By: ${blog.author}`}</h5>
                            <p aria-label="blog content">{ blog.content }</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
 
export default Community;