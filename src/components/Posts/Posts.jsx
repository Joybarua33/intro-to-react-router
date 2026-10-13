import { useLoaderData } from "react-router";
import Post from "../Post/Post";

const Posts = () => {
    const posts = useLoaderData();
    console.log(posts);
    return (
        <div>
            <h1>This is posts page: {posts.length}</h1>
            <div>
                {
                    posts.map((post) => <Post key={post.id} post={post}/>)
                }
            </div>
        </div>
    );
};

export default Posts;