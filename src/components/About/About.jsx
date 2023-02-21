import React from 'react'
import './about.style.scss'
import plance1 from 'src/assets/images/plance-1.png'
function About() {
  return (
    <div className="about scroll-section hidden" id="about-nav">
      <div className="about__left">
        <div className="about__left--image">
          <img src={plance1} alt="plance" />
        </div>
      </div>
      <div className="about__right">
        <section>
          <div className="about__right--title">About Me</div>
          <div className="about__right--content">
            <div>
              Chào Mọi người! mình tên là Võ Hoàng Phi Hùng, mình là một lập trình viên xém xíu nữa là fullstack. Mình đã có gần 2 năm kinh nghiệm lập trình web tại HCMC.
            </div>
            <div>
              Mình tốt nghiệp trường Cao Đẳng Kỹ Thuật Cao Thắng, và đang tạm hoãn việc học tại trường Đại Học Bách Khoa TPHCM do phải thực hiện nghĩa vụ quân sự. Trước khi nhập ngũ mình đã có rất nhiều dự án cũng như hiện tại, mình đã cống hiến cho công an nhiều dự án giúp góp phần tiết kiệm nhiều thơi gian. Cùng theo dõi tiếp nhé...
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
