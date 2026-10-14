import { useLoaderData, useParams } from "react-router";

const UserDetails = () => {
    const user = useLoaderData();
    const {name, website} = user;

    const params = useParams();
    console.log(params);
    return (
        <div>
            <h1>This is user details page</h1>  
            <h3>{name}</h3>
            <p>website : {website}</p>          
        </div>
    );
};

export default UserDetails;