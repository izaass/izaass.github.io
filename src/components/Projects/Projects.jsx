import React, { useEffect, useRef } from 'react'
import './projects.style.scss'
import Modal, { ModalContent } from '../Modal/Modal'
import { projects } from 'src/dataProjects'
function Projects() {
  useEffect(() => {
    const projectsSection = document.querySelectorAll(
      '.projects__content--item'
    )

    const animationScroll = () => {
      projectsSection.forEach(section => {
        const sectionTop = section.offsetTop
        let sectionHeight = section.clientHeight / 3 + 200

        if (window.pageYOffset >= sectionTop - sectionHeight) {
          section.classList.remove('hidden-project')
        }
      })
    }
    window.addEventListener('scroll', animationScroll)
    return () => {
      window.removeEventListener('scroll', animationScroll)
    }
  }, [])

  const setModalActive = (link, id) => {
    const modal = document.querySelector(`#modal_${id}`)

    const videSrc = 'https://www.youtube-nocookie.com/embed/' + link
    modal.querySelector('.modal__content > iframe').setAttribute('src', videSrc)

    modal.classList.toggle('active')
  }
  return (
    <>
      <div className="projects scroll-section hidden" id="projects-nav">
        <div className="projects__title">Projects</div>
        <div className="projects__content">
          {projects?.map((item, index) => (
            <div key={index} className="projects__content--item hidden-project">
              <img src={item.image} alt="project" />
              <div className="projects__content--item_content">
                <div className="projects__content--item_content-title">
                  {item.name}
                </div>
                <div className="projects__content--item_content-description abc">
                  <span>{item.isProject}</span>
                  <section>
                    <span>- Team size: </span> {item.teamSize}.
                  </section>
                  <section>
                    <span>- Technologies: </span> {item.technologies}
                  </section>
                  <section>
                    <span>- Functions such as: </span> {item.suchAs}
                  </section>
                </div>
                <div className="projects__content--item_content-button">
                  <button
                    onClick={() => setModalActive(item.video, item.id)}
                    className={`cursor_small ${
                      item.id === '3' && 'demo-front-end'
                    }`}
                  >
                    {item.id === '3' ? 'Watch Demo Front-end' : 'Watch Demo'}
                  </button>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="cursor_small"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {projects?.map((item, index) => (
        <TrailerModal key={index} item={item} />
      ))}
    </>
  )
}

const TrailerModal = ({ item }) => {
  const iframeRef = useRef(null)

  const onClose = () => iframeRef.current.setAttribute('src', '')

  return (
    <Modal active={false} id={`modal_${item.id}`}>
      <ModalContent onClose={onClose}>
        <iframe
          ref={iframeRef}
          width="100%"
          height="500px"
          title="trailer"
          samesite="lax"
        ></iframe>
      </ModalContent>
    </Modal>
  )
}

export default Projects
