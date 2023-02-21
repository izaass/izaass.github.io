import React from 'react'
import './knowledge.style.scss'
import plance2 from 'src/assets/images/plance-2.png'
function Knowledge() {
  return (
    <div className="knowledge scroll-section hidden" id="skill-nav">
      <div className="knowledge__left">
        <div className="knowledge__left--title">My Knowledge</div>

        <div className="knowledge__left--content">
          <div className="knowledge__left--content_item">HTML</div>
          <div className="knowledge__left--content_item">CSS/SCSS</div>
          <div className="knowledge__left--content_item">Javascript</div>
          <div className="knowledge__left--content_item">Bootstrap</div>
          <div className="knowledge__left--content_item">JQuery</div>
        </div>
      </div>
      <div className="knowledge__right">
        <img src={plance2} alt="plance " />
      </div>
    </div>
  )
}

export default Knowledge
