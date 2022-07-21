import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { BlogContext } from "./context/blogContext.js";
import { UserContext } from "./context/userContext.js";

const AddBlog = () => {
    const { addBlog } = useContext(BlogContext);
    const { name } = useContext(UserContext);
    const [bTitle, setTitle] = useState("");
    const [bContent, setContent] = useState("");
    const history = useHistory();
    return (
        <div style={{minHeight: "74.1vh"}}>
            <div className="container-sm" aria-label="sectioned block" style={{
                backgroundColor: "#D9D9D9",
                padding: "2vw 4vw",
                marginTop: "3vw",
                marginBottom: "2vw",
                maxHeight: "765px",
                textAlign: "left"
            }}>
                { name === "" ? <h1 aria-label="log in reminder">Please log in first!</h1> : 
                <div>
                    <div aria-label="first input group" class="input-group mb-3">
                        <span class="input-group-text" aria-label="title icon" id="title-icon">Title</span>
                        <input type="text" class="form-control" id="Title" placeholder="Title" aria-label="Title Input" aria-describedby="title-input" onChange={(e) => setTitle(e.target.value)}></input>
                    </div>
                    <div aria-label="second input group" className="input-group mb-3">
                        <span aria-label="content icon" class="input-group-text" id="author-icon">Content</span>
                        <textarea type="text" class="form-control" id="author" placeholder="Content" aria-label="Content Input" aria-describedby="content-input" onChange={(e) => setContent(e.target.value)}></textarea>
                    </div>
                    <div className="input-group mb-3">
                        <button className="btn btn-dark" aria-label="Add Blog Button" aria-describedby="submit-button" onClick={() => {addBlog(bTitle, bContent, name);  history.push("/Community");}}>Add Blog</button>
                    </div>
                </div>
                }
            </div>
        </div>
    );
}
 
export default AddBlog;