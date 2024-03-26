import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header.jsx";
import emptyProfile from "../../assets/nouser.jpeg";
import cover from "../../assets/blank-cover.jpeg";
import Post from "./components/Post.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCalendarDays,
  faCircleInfo,
  faImage,
  faNewspaper,
  faPlus,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import "./index.css";

const Index = () => {
  const [posts, setPosts] = useState([]);
  const [newPostContent, setNewPostContent] = useState("");
  const [newPostImage, setNewPostImage] = useState(null);
  const loggedUser = JSON.parse(localStorage.getItem("userdetails"));
  const { id, user_name } = loggedUser;

  const fetchPosts = async () => {
    try {
      const response = await axios.get(
        "http://localhost/linkedin-clone/server/getAllPosts.php"
      );
      if (response?.data) {
        const postsWithUserInfo = await Promise.all(
          response.data.map(async (post) => {
            const userDataFormData = new FormData();
            userDataFormData.append("userID", post.userID);

            const companyDataFormData = new FormData();
            companyDataFormData.append("companyID", post.companyID);

            const userDataResponse = await axios.post(
              "http://localhost/linkedin-clone/server/getUser.php",
              userDataFormData
            );
            const companyDataResponse = await axios.post(
              "http://localhost/linkedin-clone/server/getCompany.php",
              companyDataFormData
            );
            return {
              ...post,
              userName: userDataResponse.data.userName,
              companyName: companyDataResponse.data.companyName,
            };
          })
        );
        setPosts(postsWithUserInfo);
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleNewPostSubmit = async () => {
    try {
      const newPostData = new FormData();
      newPostData.append("userID", id);
      newPostData.append("content", newPostContent);

      await axios.post("http://localhost/linkedin-clone/server/createPost.php", newPostData);

      fetchPosts();
    } catch (error) {
      console.error("Error creating new post:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="main-container">
        <div className="column-1">
          <div className="card">
            <div className="cover">
              <img className="coverImg" src={cover} alt="" />
              <img className="profileImg" src={emptyProfile} alt="" />
            </div>
            <div className="profile-info">
              <h2>Welcome, {user_name}</h2>
              <h4>Add a photo</h4>
            </div>
            <hr />
            <div className="stats">
              <div>
                <h5>Profile Views</h5>
                <h5>17</h5>
              </div>
              <div>
                <div>
                  <h5>Connections</h5>
                </div>
                <h5>148</h5>
              </div>
            </div>
            <hr />
            <div className="pro">
              <h5>Strengthen your profile with an AI writing assistant</h5>
              <h4>Try Premium for LBP0</h4>
            </div>
            <hr />
            <div className="items">
              <h5>My Items</h5>
            </div>
          </div>
        </div>
        <div className="column-2">
          <div className="box-1">
            <div className="img">
              <img src={emptyProfile} alt="" />
              <input
                type="text"
                placeholder="Start a post, try writing with AI"
                value={newPostContent}
                onChange={(e) => setNewPostContent(e.target.value)}
              />
            </div>
            <div className="links">
              <ul>
                <li>
                  <FontAwesomeIcon className="media" icon={faImage} />
                  <p>Media</p>
                </li>
                <li>
                  <FontAwesomeIcon className="event" icon={faCalendarDays} />
                  Events
                </li>
                <li onClick={handleNewPostSubmit}>
                  <FontAwesomeIcon className="article" icon={faNewspaper} />
                  <button onClick={handleNewPostSubmit}>Write post</button>
                </li>
              </ul>
            </div>
          </div>
          <div className="separate"></div>
          {posts?.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
        <div className="column-3">
          <div className="feedCard">
            <h3>FeedBack</h3>
            <p>write your feedback here if you want to, preferably not </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
