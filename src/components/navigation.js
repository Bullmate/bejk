import React from 'react'

import Script from 'dangerous-html/react'

import './navigation.css'

const Navigation = (props) => {
  return (
    <div className="navigation-container1">
      <nav className="navigation-root">
        <div className="navigation-container">
          <a href="/">
            <div aria-label="LuxKachel Domů" className="navigation-logo-link">
              <span className="navigation-brand section-title">
                <span>{/*locale-SectionTitle_vNMad_*/}</span>
              </span>
            </div>
          </a>
          <div className="navigation-desktop-menu">
            <ul className="navigation-link-list">
              <li className="navigation-link-item"></li>
              <li className="navigation-link-item">
                <a href="#/">
                  <div className="navigation-link">
                    <span>
                      <span>{/*locale-text_IJc7bV*/}</span>
                    </span>
                  </div>
                </a>
              </li>
              <li className="navigation-link-item">
                <a href="#/">
                  <div className="navigation-link">
                    <span>
                      <span>{/*locale-text_0mNocu*/}</span>
                    </span>
                  </div>
                </a>
              </li>
              <li className="navigation-link-item">
                <a href="#/">
                  <div className="navigation-link">
                    <span>
                      <span>{/*locale-text_L9kXzU*/}</span>
                    </span>
                  </div>
                </a>
              </li>
            </ul>
            <a href="/kontakt">
              <div className="navigation-cta btn btn-primary">
                <span>
                  <span>{/*locale-text_H-tblt*/}</span>
                </span>
              </div>
            </a>
          </div>
          <button
            id="navToggle"
            aria-label="Otevřít menu"
            aria-expanded="false"
            className="navigation-mobile-toggle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 8h16M4 16h16"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      <div id="mobileOverlay" className="navigation-mobile-overlay">
        <div className="navigation-overlay-header">
          <a href="/">
            <div aria-label="LuxKachel Domů" className="navigation-logo-link">
              <span className="navigation-brand section-title">
                <span>{/*locale-SectionTitle_jSZkTr*/}</span>
              </span>
            </div>
          </a>
          <button
            id="navClose"
            aria-label="Zavřít menu"
            className="navigation-mobile-close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="m15 9l-6 6m0-6l6 6"></path>
              </g>
            </svg>
          </button>
        </div>
        <div className="navigation-overlay-content">
          <ul className="navigation-mobile-links">
            <li className="navigation-mobile-item">
              <a href="/">
                <div className="navigation-mobile-link">
                  <span>
                    <span>{/*locale-text_PV4Cmf*/}</span>
                  </span>
                </div>
              </a>
            </li>
            <li className="navigation-mobile-item">
              <a href="/projekty">
                <div className="navigation-mobile-link">
                  <span>
                    <span>{/*locale-text_GNwC3L*/}</span>
                  </span>
                </div>
              </a>
            </li>
            <li className="navigation-mobile-item">
              <a href="/sluzby">
                <div className="navigation-mobile-link">
                  <span>
                    <span>{/*locale-text_tMy8ha*/}</span>
                  </span>
                </div>
              </a>
            </li>
            <li className="navigation-mobile-item">
              <a href="/o-nas">
                <div className="navigation-mobile-link">
                  <span>
                    <span>{/*locale-text_aIsSus*/}</span>
                  </span>
                </div>
              </a>
            </li>
          </ul>
          <div className="navigation-overlay-footer">
            <a href="/kontakt">
              <div className="navigation-mobile-cta btn btn-primary btn-lg">
                <span>
                  <span>{/*locale-text_-DwLla*/}</span>
                </span>
              </div>
            </a>
            <div className="navigation-contact-info">
              <p className="section-content">
                <span>{/*locale-SectionContent_9B1pho*/}</span>
              </p>
              <p className="section-content">
                <span>{/*locale-SectionContent_fCqSC2*/}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="navigation-container2">
        <div className="navigation-container3">
          <Script
            html={`<script defer data-name="navigation-logic">
(function(){
  const navToggle = document.getElementById("navToggle")
  const navClose = document.getElementById("navClose")
  const mobileOverlay = document.getElementById("mobileOverlay")
  const bodyElement = document.body

  const openMenu = () => {
    mobileOverlay.classList.add("is-active")
    navToggle.setAttribute("aria-expanded", "true")
    bodyElement.style.overflow = "hidden"
  }

  const closeMenu = () => {
    mobileOverlay.classList.remove("is-active")
    navToggle.setAttribute("aria-expanded", "false")
    bodyElement.style.overflow = ""
  }

  navToggle.addEventListener("click", openMenu)
  navClose.addEventListener("click", closeMenu)

  const mobileLinks = document.querySelectorAll(".navigation-mobile-link")
  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMenu)
  })

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileOverlay.classList.contains("is-active")) {
      closeMenu()
    }
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Navigation
