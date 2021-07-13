import react from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts  postData={props.postData}
                addPost={props.addPost}
                newPostText={props.newPostText}
                changeNewPostText={props.changeNewPostText}/>
    </div>
  );
};

export default Profile;
