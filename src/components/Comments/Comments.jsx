import { useLoaderData } from "react-router";
import Comment from "../Comment/Comment";

const Comments = () => {
    const comments = useLoaderData();
    
    return (
        <div>
            <h1>This is comments page</h1>    
            <div>
                {
                    comments.map((comment) => <Comment key={comment.id} comment ={comment}/>)
                }
            </div>    
        </div>
    );
};

export default Comments;