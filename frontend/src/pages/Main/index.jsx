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
  const loggedUserString = localStorage.getItem("userdetails");
  const loggedUser = JSON.parse(loggedUserString);
  const { id,user_name} = loggedUser;
  return (
    <>
      <Header />
      <div className="main-container">
        <div className="column-1">
          <div className="card">
            <div className="cover">
              <img className="coverImg" srcSet={cover} alt="" />
              <img className="profileImg" srcSet={emptyProfile} alt="" />
            </div>
            <div className="profile-info">
              <h2>Welcome , {user_name}</h2>
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
              <h5>Strenghten your profile with an AI writing assistant</h5>
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
              <img srcSet={emptyProfile} alt="" />
              <input
                type="text"
                placeholder="Start a post, try writing with AI "
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
                <li>
                  <FontAwesomeIcon className="article" icon={faNewspaper} />
                  Write article
                </li>
              </ul>
            </div>
          </div>
          <div className="seperate"></div>
          <Post />
        </div>
        <div className="column-3">
          <div className="feedCard">
            <div className="first-section">
              <h3>Add to your feed</h3>
              <FontAwesomeIcon icon={faCircleInfo} />
            </div>
            <div className="second-section">
              <div className="box">
                <img srcSet={emptyProfile} alt="" />
                <div>
                  <h4>Name</h4>
                  <p>title</p>
                  <button>
                    <FontAwesomeIcon icon={faPlus} />
                    Follow
                  </button>
                </div>
              </div>
              <div className="recommendations ">
                <button>
                  View all recommendations
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
