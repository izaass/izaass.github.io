import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKeyboard } from "@fortawesome/free-solid-svg-icons";
import { faPersonRifle } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2023 - present"
            iconStyle={{ background: "#EAB41E", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faKeyboard} />}
          >
            <h3 className="vertical-timeline-element-title">
              TSUCHIYA TSCO (VIETNAM) Co., Ltd
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Thuan An, Binh Duong, Viet Nam
            </h4>
            <p>
              Full-stack Web Development (MERN Stack), Project Management,
              Business Development, HelpDesk
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2023"
            iconStyle={{ background: "#EAB41E", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faPersonRifle} />}
          >
            <h3 className="vertical-timeline-element-title">
              Join Military Service
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Dong Nai, Binh Duong
            </h4>
            <p>
              Although not working professionally in programming, there is still
              an opportunity to use javascript for internal systems.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2021"
            iconStyle={{ background: "#EAB41E", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h3 className="vertical-timeline-element-title">
              Ki. Works Vietnam Co., Ltd (Intern)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Thuan An, Binh Duong, Viet Nam
            </h4>
            <p>
              Full-stack Development (PHP), API Development, User Experience,
              HelpDesk
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2020"
            iconStyle={{ background: "#EAB41E", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h3 className="vertical-timeline-element-title">
              TRIEU DO CO.,LTD (Intern)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Thu Duc, Ho Chi Minh City
            </h4>
            <p>
              Full-stack Development (Laravel framework), API Development, User
              Experience, HelpDesk
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
