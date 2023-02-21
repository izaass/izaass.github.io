import React, { useEffect, useRef, useState } from 'react'
import 'normalize.css'
import 'src/assets/styles/global.scss'
import Header from './components/Header/Header'
import About from './components/About/About'
import KnowLedge from './components/Knowledge/Knowledge'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar/Navbar'
import PreLoadIntro from './components/PreLoadIntro/PreLoadIntro'
import 'src/assets/styles/load.scss'
import Modal from './components/Modal/Modal'
function App() {
  const appRef = useRef(null)
  const cursorRef = useRef(null)
  // const pathRef = useRef(null)
  const [current, setCurrent] = useState('')
  const [load, setLoad] = useState(true)
  const handleDarkLight = () => {
    appRef.current.classList.toggle('light-mode')
  }

  useEffect(() => {
    const sections = document.querySelectorAll('.scroll-section')

    const addMenu = () => {
      let current = ''
      sections.forEach(section => {
        const sectionTop = section.offsetTop
        let sectionHeight = 0
        if (section.getAttribute('id') === 'projects-nav') {
          if (window.innerWidth <= 700) {
            sectionHeight = section.clientHeight / 8
          } else {
            sectionHeight = section.clientHeight / 4
          }
        } else {
          sectionHeight = section.clientHeight / 3 + 200
        }

        if (window.pageYOffset >= sectionTop - sectionHeight) {
          current = section.getAttribute('id')
          section.classList.remove('hidden')
        }
      })
      setCurrent(current)
    }
    window.addEventListener('scroll', addMenu)
    return () => {
      window.removeEventListener('scroll', addMenu)
    }
  }, [load])

  useEffect(() => {
    if (!load) {
      const cursorEvnet = e => {
        cursorRef.current.setAttribute(
          'style',
          'top: ' + (e.clientY - 5) + 'px; left: ' + (e.clientX - 5) + 'px;'
        )
      }
      document.addEventListener('mousemove', cursorEvnet)

      document.addEventListener('click', () => {
        cursorRef.current.classList.add('expand')

        setTimeout(() => {
          cursorRef.current.classList.remove('expand')
        }, 200)
      })

      const cursorSmall = document.querySelectorAll('.cursor_small')
      const onMouseMoveSmall = () => {
        cursorSmall.forEach(item => {
          item.addEventListener('mousemove', () => {
            return cursorRef.current.classList.add('small')
          })
          item.addEventListener('mouseout', () => {
            return cursorRef.current.classList.remove('small')
          })
        })
      }
      return onMouseMoveSmall()
    }
  }, [load])

  useEffect(() => {
    const preLoad = () => {
      setTimeout(() => {
        setLoad(false)
        setCurrent('header-nav')
        appRef.current.classList.remove('hidden')
      }, 7200)
    }
    preLoad()
  }, [])

  return (
    <div ref={appRef} className="App hidden">
      {load ? (
        <PreLoadIntro />
      ) : (
        <>
          <div
            className="dark-light cursor_small"
            onClick={() => handleDarkLight()}
          >
            <svg
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
          </div>
          <Header />
          <About />
          <KnowLedge />
          <Experience />
          <Projects />
          <Contact />
          <ToastContainer />
          <Modal />
          <Navbar current={current} />
          <div ref={cursorRef} className="cursor">
            <div></div>
          </div>
        </>
      )}

      {/* <div className="line-container">
        <svg
          id="Layer_1"
          data-name="Layer 1"
          viewBox="0 0 743.76 2118.67"
          preserveAspectRatio="xMidYMax meet"
        >
          <defs>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '.cls-1{stroke:aqua;stroke-miterlimit:10;stroke-width:2px;}'
              }}
            />
          </defs>
          <path
            ref={pathRef}
            id="path"
            className="cls-1"
            d="M430,.64s-109,131-87,216,190,135,230,160,122,222-60,252-297-17-276-112,346-173,408,2-249,156-332,237-117,190,24,305,255,133,348,88,72-165-50-120-238,223-160,308,194,24,233,94-49,227-193,226-278-168-373-103-180,171-122,248,403-104,480-26-49,32-48,130-2,213-2,213"
          />
        </svg>
      </div> */}
    </div>
  )
}

export default App
