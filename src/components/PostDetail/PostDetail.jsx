import { useLoaderData, useNavigate } from "react-router";

const PostDetail = () => {
    const post = useLoaderData();
    const navigate = useNavigate();

    // const handleBackNavigate = () => {
    //     navigate(`/posts`)
    // }
    return (
        <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button onClick={() => navigate(-1)}>Go Back</button>          
        </div>
    );
};

export default PostDetail;