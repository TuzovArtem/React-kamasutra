import react from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";

const MyPosts = () => {
  let postData = [
    { text: "My First post", likes: 14225250, id: 1 },
    { text: "Second post is here", likes: 0, id: 2 },
    { text: "It is Third post", likes: 14210, id: 3 },
    { text: "Post number two plus two", likes: 110, id: 4 },
  ];

  let postElements = postData.map( item => <Post text={item.text} like={item.likes} key={item.id} />);

  return (
    <div className={classes.my_posts}>
      My post
      <NewPost />
      {postElements}
    </div>
  );
};

export default MyPosts;
