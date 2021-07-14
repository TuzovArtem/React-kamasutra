import react from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";

const MyPosts = (props) => {
  
  let postElements = props.postData.map( item => <Post text={item.text} like={item.likes} key={item.id} />);

  
  return (
    <div className={classes.my_posts}>
      My post
      <NewPost addPost={props.addPost}
               newPostText={props.newPostText}
               changeNewPostText={props.changeNewPostText}/>
      {postElements}
    </div>
  );
};

export default MyPosts;
