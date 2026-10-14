import { Link, useNavigate } from "react-router";

const Comment = ({comment}) => {
    const {id, name, email} = comment;
    const navigate = useNavigate();

    // const handleNavigate = () => {
    //     navigate("/mobiles");
    // }

     const commentStyle = {
        border : "2px solid red",
        borderRadius : "20px",
        padding : "10px",
        margin : "10px"
    }
    return (
        <div style={commentStyle}>  
            <h3>Name : {name}</h3>
            <p>{email}</p>       
            <Link to={`/comments/${id}`}>Show Detail</Link> 
            <button onClick={() => navigate(`/comments/${id}`)}>Details of : </button>
        </div>
    );
};

export default Comment;