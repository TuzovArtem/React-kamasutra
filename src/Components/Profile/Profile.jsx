import react from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts  postData={props.postData}
                addPost={props.addPost}/>
    </div>
  );
};

export default Profile;
