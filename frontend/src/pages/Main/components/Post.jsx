import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faEllipsis,
  faPaperPlane,
  faRepeat,
  faThumbsUp,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/post.css";
import emptyProfile from "../../../assets/nouser.jpeg";

const Post = ({ post }) => {
  const { postID, userName, CompanyName, postContent, postImage, postedAt } = post;

  return (
    <div className="post">
      <div className="first-section">
        <div>
          <img src={emptyProfile} alt="" />
          <div className="post-info">
            <h4>{name}</h4>
            <h5>{bio}</h5>
            <h5>{time}</h5>
          </div>
        </div>
        <div className="buttons">
          <FontAwesomeIcon icon={faEllipsis} />
          <FontAwesomeIcon icon={faXmark} />
        </div>
      </div>
      <div className="second-section">
        <p>{content}</p>
        <img src={image} alt="" />
      </div>
      <div className="third-section">
        <div className="likes">
          <p>
            <span>
              <FontAwesomeIcon icon={faThumbsUp} />
            </span>
            {likes} others liked your post
          </p>
          <p>{comments.length} comments</p>
        </div>
        <div className="line"></div>
        <div className="actions">
          <ul>
            <li>
              <FontAwesomeIcon icon={faThumbsUp} />
              Like
            </li>
            <li>
              <FontAwesomeIcon icon={faComment} />
              Comment
            </li>
            <li>
              <FontAwesomeIcon icon={faRepeat} />
              Repost
            </li>
            <li>
              <FontAwesomeIcon icon={faPaperPlane} />
              Send
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Post;
