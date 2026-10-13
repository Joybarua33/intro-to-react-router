import { use } from "react";


const Users2 = ({usersPromise}) => {
    const users = use(usersPromise);
    console.log(users);
    return (
        <div>
            <h1>This is users 2 page</h1>            
        </div>
    );
};

export default Users2;