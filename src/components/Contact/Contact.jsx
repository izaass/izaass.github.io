import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import { toast } from 'react-toastify'
import './contact.style.scss'
import plance4 from 'src/assets/images/plance-4.png'
import plannet10 from 'src/assets/images/planet-10.png'

function Contact() {
  const form = useRef()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_u5r5n5b',
        'template_ys4cakf',
        form.current,
        'M8TwX8klF2ho3CByz'
      )
      .then(
        result => {
          setName('')
          setEmail('')
          setMessage('')
          toast.success('Email has been sent successfully!', {
            position: 'top-center',
            autoClose: 3000
          })
        },
        error => {}
      )
  }
  return (
    <div className="contact scroll-section hidden" id="contact-nav">
      <div className="contact__background-bottom">
        <img src={plannet10} alt="planet" />
      </div>
      <div className="contact__background-plance">
        <img src={plance4} alt="plance" />
      </div>
      <div className="contact__title">Contact Me</div>
      <div className="contact__left">
        <div className="contact__left--title">Social Network</div>
        <div className="contact__left--content">
          <div className="contact__left--content_item">
            <h4>
              <svg x="0px" y="0px" viewBox="0 0 340 340">
                <g id="XMLID_86_">
                  <g>
                    <path
                      d="M0,42.5v255h340v-255H0z M303.986,62.5l-116.037,96.968l-17.949,15l-17.949-15L36.014,62.5H303.986z M20,75.181
			L136.456,172.5L20,269.819V75.181z M41.997,277.5l110.054-91.968l17.949,15l17.949-15L298.002,277.5H41.997z M320,269.819
			L203.544,172.5L320,75.181V269.819z"
                    />
                  </g>
                </g>
              </svg>
              Email:
            </h4>
            <article>
              <p>phihungvohoang@gmail.com</p>
              <a
                href="mailto:phihungvohoang@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="cursor_small"
              >
                Send an email
              </a>
            </article>
          </div>
          <div className="contact__left--content_item">
            <h4>
              <svg fill="none" viewBox="0 0 15 15">
                <path
                  className="message-icon"
                  d="M2.93478 12.2643L3.41722 12.3956C3.46886 12.206 3.40458 12.0036 3.25296 11.8786L2.93478 12.2643ZM2.32609 14.5L1.84365 14.3687C1.79246 14.5567 1.85516 14.7573 2.00431 14.8827C2.15345 15.0081 2.36187 15.0354 2.5383 14.9527L2.32609 14.5ZM4.76087 13.3587L4.9491 12.8955C4.81999 12.843 4.67484 12.8468 4.54865 12.906L4.76087 13.3587ZM6.5 6.5L6.8 6.1L6.5072 5.8804L6.20938 6.09313L6.5 6.5ZM8.5 8L8.2 8.4L8.51633 8.63725L8.82009 8.38411L8.5 8ZM7.5 0C3.37858 0 0 3.20099 0 7.19565H1C1 3.79466 3.88855 1 7.5 1V0ZM0 7.19565C0 9.38419 1.02256 11.335 2.6166 12.65L3.25296 11.8786C1.87049 10.7381 1 9.06224 1 7.19565H0ZM2.45234 12.1329L1.84365 14.3687L2.80853 14.6313L3.41722 12.3956L2.45234 12.1329ZM2.5383 14.9527L4.97309 13.8114L4.54865 12.906L2.11387 14.0473L2.5383 14.9527ZM4.57264 13.8219C5.47308 14.1878 6.46213 14.3913 7.5 14.3913V13.3913C6.59369 13.3913 5.73232 13.2137 4.9491 12.8955L4.57264 13.8219ZM7.5 14.3913C11.6214 14.3913 15 11.1903 15 7.19565H14C14 10.5966 11.1114 13.3913 7.5 13.3913V14.3913ZM15 7.19565C15 3.20099 11.6214 0 7.5 0V1C11.1114 1 14 3.79466 14 7.19565H15ZM3.29062 9.40687L6.79062 6.90687L6.20938 6.09313L2.70938 8.59313L3.29062 9.40687ZM6.2 6.9L8.2 8.4L8.8 7.6L6.8 6.1L6.2 6.9ZM8.82009 8.38411L11.8201 5.88411L11.1799 5.11589L8.17991 7.61589L8.82009 8.38411Z"
                />
              </svg>
              Messenger:
            </h4>
            <article>
              <p>Trần Hùng</p>
              <a
                href="https://m.me/izaass.anons"
                className="cursor_small"
                target="_blank"
                rel="noreferrer"
              >
                Send an message
              </a>
            </article>
          </div>
          <div className="contact__left--content_item">
            <h4>
              <svg x="0px" y="0px" viewBox="0 0 201.629 201.629">
                <path
                  d="M139.321,201.629c-1.457,0-2.925-0.14-4.387-0.426c-0.04-0.006-0.08-0.012-0.12-0.019
	c-2.116-0.364-52.265-9.341-89.971-47.047C14.447,123.742,4.194,84.726,1.17,69.123c-0.564-1.856-0.888-3.791-0.962-5.757
	c-0.023-0.219-0.029-0.438-0.018-0.656c-0.054-6.129,2.288-11.87,6.615-16.197l12.818-12.818c0.75-0.75,1.768-1.172,2.828-1.172
	s2.078,0.422,2.828,1.172l41.479,41.48c1.563,1.562,1.563,4.095,0,5.656L53.942,93.649c-0.327,0.327-0.656,0.637-0.992,0.935
	c-5.987,5.316-7.148,14.626-2.694,21.65c4.279,6.747,9.12,12.838,14.387,18.105c6.239,6.238,13.642,11.89,22.001,16.795
	c6.837,4.012,15.627,2.726,21.379-3.127l0.139-0.14l12.818-12.817c1.563-1.563,4.094-1.563,5.656,0l41.479,41.479
	c1.563,1.562,1.563,4.095,0,5.656l-12.817,12.818C151.006,199.296,145.262,201.629,139.321,201.629z M135.976,193.265
	c0.11,0.014,0.22,0.031,0.329,0.054c4.857,1.008,9.843-0.478,13.337-3.971l9.988-9.989l-35.822-35.822l-10.104,10.104
	c-8.302,8.448-21.105,10.265-31.108,4.396c-8.946-5.25-16.889-11.319-23.608-18.039c-5.682-5.682-10.893-12.234-15.486-19.478
	c-6.531-10.301-4.75-24.024,4.145-31.923c0.226-0.198,0.438-0.4,0.646-0.608l9.984-9.984L22.452,42.18l-9.99,9.989
	c-2.832,2.833-4.348,6.609-4.27,10.637c0.003,0.044,0.005,0.087,0.006,0.131c0.04,1.376,0.266,2.725,0.672,4.008
	c0.046,0.147,0.084,0.298,0.113,0.45c2.831,14.729,12.544,52.113,41.517,81.087C85.282,183.264,132.552,192.626,135.976,193.265z
	 M197.444,110.944c-2.209,0-4-1.791-4-4C193.444,52.387,149.058,8,94.5,8c-2.209,0-4-1.791-4-4s1.791-4,4-4
	c58.97,0,106.944,47.975,106.944,106.944C201.444,109.153,199.653,110.944,197.444,110.944z M172.624,110.944c-2.209,0-4-1.791-4-4
	c0-41.226-33.539-74.765-74.764-74.765c-2.209,0-4-1.791-4-4s1.791-4,4-4c45.636,0,82.764,37.128,82.764,82.765
	C176.624,109.153,174.833,110.944,172.624,110.944z M147.866,110.944c-2.209,0-4-1.791-4-4c0-27.573-22.433-50.006-50.006-50.006
	c-2.209,0-4-1.791-4-4s1.791-4,4-4c31.984,0,58.006,26.021,58.006,58.006C151.866,109.153,150.075,110.944,147.866,110.944z"
                />
              </svg>
              Phone:
            </h4>
            <article>
              <p>+84777 123 799</p>
              <a href="tel:0777123799" className="cursor_small">
                Make a phone call
              </a>
            </article>
          </div>
        </div>
      </div>
      <div className="contact__right">
        <div className="contact__right--title">Let's talk</div>
        <form ref={form} onSubmit={sendEmail}>
          <section>
            <label htmlFor="name">
              <span>Your name</span>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                value={name}
                onChange={e => setName(e.target.value)}
                required
                className="input"
              />
            </label>
          </section>
          <section>
            <label htmlFor="email">
              <span>Your email</span>
              <input
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email"
                required
              />
            </label>
          </section>
          <section>
            <label htmlFor="message">
              <span>Your message</span>
              <textarea
                name="message"
                id="message"
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="Your message"
                required
              ></textarea>
            </label>
          </section>
          <div className="button-submit">
            <button type="submit" className="cursor_small">
              Send Message
            </button>
          </div>
        </form>
      </div>
      <div className="copy-right">
        <div className="copy-right_title">Thanks for watching.</div>
        <section>
          © 2023
          <span>
            <svg
              className="svg-inline--fa fa-heart fa-w-16"
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="heart"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              data-fa-i2svg
            >
              <path
                fill="currentColor"
                d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"
              />
            </svg>
          </span>
          coded by Izaass
        </section>
      </div>
    </div>
  )
}

export default Contact
