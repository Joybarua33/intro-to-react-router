import { useLoaderData, useNavigate } from "react-router";

const ShowDetailComment = () => {
    const commentsDetails = useLoaderData();
    const {id, name, body} = commentsDetails;
    const navigate = useNavigate();
    return (
        <div>
            <h1>Comments Details</h1>
            <p>Id : {id}</p>
            <h3>Name : {name}</h3>
            <p>Body : {body}</p>    
            <button onClick={() => navigate(-1)}>Go Back</button>   
        </div>
    );
};

export default ShowDetailComment;