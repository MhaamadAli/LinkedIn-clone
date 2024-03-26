import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faEllipsis,
  faHeart,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/job.css";
import companyLogo from "../../../assets/company-logo.png";

const Job = ({ job }) => {
  const { jobID, companyName, jobTitle, jobLocation, jobDescription, jobType, jobPostedAt } = job;

  return (
    <div className="job">
      <div className="header">
        <div className="company-logo">
          <img src={companyLogo} alt="Company Logo" />
        </div>
        <div className="company-info">
          <h3>{companyName}</h3>
          <p>{jobLocation}</p>
        </div>
        <div className="buttons">
          <FontAwesomeIcon icon={faBookmark} />
          <FontAwesomeIcon icon={faEllipsis} />
        </div>
      </div>
      <div className="content">
        <h4>{jobTitle}</h4>
        <p>{jobDescription}</p>
        <div className="job-details">
          <p>{jobType}</p>
          <p>{jobPostedAt}</p>
        </div>
      </div>
      <div className="actions">
        <button>
          <FontAwesomeIcon icon={faHeart} /> Save
        </button>
        <button>
          <FontAwesomeIcon icon={faPaperPlane} /> Apply
        </button>
      </div>
    </div>
  );
};

export default Job;
