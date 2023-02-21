import React, { useEffect } from 'react'
import { menu } from 'src/constants/path'
import './navbar.style.scss'
const Navbar = ({ current }) => {
  useEffect(() => {
    const navLi = document.querySelectorAll('.navbar ul li')
    const activeMenu = () => {
      navLi.forEach(li => {
        li.classList.remove('active')
        if (li.classList.contains(current)) {
          li.classList.add('active')
        }
      })
    }
    return activeMenu()
  }, [current])

  return (
    <>
      <div className="navbar">
        <ul>
          {menu?.map((item, index) => (
            <li key={index} className={item.section}>
              <a href={`#${item.section}`}>
                <article className="cursor_small">{item.svg}</article>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Navbar
