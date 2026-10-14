import { use } from "react";

const UserDetail2 = ({userPromise}) => {
    const {name, username} = use(userPromise);
    return (
        <div>
            <p>UserName : {username}</p>  
            <p>{name}</p>      
        </div>
    );
};

export default UserDetail2;