import React from "react";
import mock01 from "../assets/images/mock01.png";
import mock02 from "../assets/images/video_mockup3.gif";
import mock03 from "../assets/images/video_mockup2.gif";
import mock05 from "../assets/images/mock05.png";
import mock06 from "../assets/images/mock06.png";
import mock07 from "../assets/images/mock07.png";
import mock08 from "../assets/images/mock08.png";
import mock09 from "../assets/images/mock09.png";
import mock10 from "../assets/images/mock10.png";
import mock04 from "../assets/images/video_mockup1.gif";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a href="#" rel="noreferrer">
            <img src={mock10} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="#" rel="noreferrer">
            <h2>React Calendar</h2>
          </a>
          <p>
            Developed company calendar (Booking car, meeting room, note event)
            MERN stack developed.
          </p>
        </div>
        <div className="project">
          <a href="#" rel="noreferrer">
            <img src={mock09} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="#" rel="noreferrer">
            <h2>React Iso management</h2>
          </a>
          <p>
            Designed, developed, and Build for ISO team managed by Certification
            (CRUD document, preview, permission...)
          </p>
        </div>
        <div className="project">
          <a href="#" rel="noreferrer">
            <img src={mock08} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="#" rel="noreferrer">
            <h2>React Blog</h2>
          </a>
          <p>
            Designed, developed, and Build for employee view notification from
            HR dept. (CRUD post, preview, permission...)...
          </p>
        </div>
        <div className="project">
          <a href="#" rel="noreferrer">
            <img src={mock07} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="#" rel="noreferrer">
            <h2>React HandBook (Trello Clone)</h2>
          </a>
          <p>Designed, developed using for employee task...</p>
        </div>
        <div className="project">
          <a
            href="https://github.com/phihungvohoang/e-feedback"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock06} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/phihungvohoang/e-feedback"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Company e-FeedBack</h2>
          </a>
          <p>
            Scan QR code to access site. Answer 2 questions to get
            authorization, send feedback and attach images, Manage submitted
            feedback...
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/phihungvohoang/company-drive"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock05} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/phihungvohoang/company-drive"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Company Drive</h2>
          </a>
          <p>
            User authorization, CRUD file, permission assign(as Group, as
            Personal), preview file, download file, share files...
          </p>
        </div>
        <div className="project">
          <a href="https://izaass.github.io" target="_blank" rel="noreferrer">
            <img src={mock04} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="https://izaass.github.io" target="_blank" rel="noreferrer">
            <h2>React Portfolio</h2>
          </a>
          <p>
            My Portfolio using for apply job using react and build in gh-pages
            environment.{" "}
          </p>
        </div>
        <div className="project">
          <a
            href="https://phihungvohoang.github.io/v2"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock03} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://phihungvohoang.github.io/v2"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Hot Wheels Shop</h2>
          </a>
          <p>
            This shop make for show list of hot wheels i collect and re-sell.
            Using javascript for filter, save database as json file. List
            Treasure Hunt & Supper Treasure Hunt...
          </p>
        </div>
        <div className="project">
          <a
            href="https://izaass.github.io/music/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock02} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://izaass.github.io/music/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Music Shuffle</h2>
          </a>
          <p>
            This project i made for Personal, listen music on website, turn off
            phone screen can using normal. Filter song, auto play, switch song
            smoothly. Fetch API to load playlist...
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/izaass/Motel-manager"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock01} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/izaass/Motel-manager"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Motel Management</h2>
          </a>
          <p>
            This project i made for my mother record motel fee by month. Using
            php, html, css, js, jquery. CRUD room, Calculate room fee, print
            invoice...
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
