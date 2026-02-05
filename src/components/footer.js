import React from 'react'
import { t } from '../i18n'

import Script from 'dangerous-html/react'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-container1">
      <footer className="footer-wrapper">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-column footer-brand-col">
              <h2 className="footer-logo">{t('FooterLogo_eSHuli')}</h2>

              <p className="footer-description section-content">
                {t('SectionContent_A532db')}
              </p>

              <div className="footer-social-links">
                <a
                  href="https://www.facebook.com/BullmateTiling/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <div
                    aria-label="Facebook"
                    className="footer-thq-footer-social-icon-elm1 footer-social-icon"
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
                        d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                      ></path>
                    </svg>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/bullmate_tiling/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <div
                    aria-label="Instagram"
                    className="footer-thq-footer-social-icon-elm2 footer-social-icon"
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
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path>
                      </g>
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            <div className="footer-column footer-nav-col">
              <h3 className="footer-title section-subtitle">
                {t('SectionSubtitle_ogQTW_')}
              </h3>

              <nav className="footer-nav">
                <ul className="footer-nav-list">
                  <li className="footer-nav-item">
                    <a href="#/">
                      <div className="footer-nav-link">{t('text_UGFCC1')}</div>
                    </a>
                  </li>

                  <li className="footer-nav-item">
                    <a href="#/">
                      <div className="footer-nav-link">{t('text_bSNphh')}</div>
                    </a>
                  </li>

                  <li className="footer-nav-item">
                    <a href="#/">
                      <div className="footer-nav-link">{t('text_57w_6M')}</div>
                    </a>
                  </li>

                  <li className="footer-nav-item"></li>
                  <li className="footer-nav-item"></li>
                </ul>
              </nav>
            </div>

            <div className="footer-column footer-contact-col">
              <h3 className="footer-title section-subtitle">
                {t('SectionSubtitle_c-Etza')}
              </h3>

              <div className="footer-contact-info">
                <div className="footer-contact-item">
                  <div className="footer-icon-box">
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
                        d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                      ></path>
                    </svg>
                  </div>

                  <a href="tel:+420777123456">
                    <div className="footer-contact-link">{t('text_QKcie3')}</div>
                  </a>
                </div>

                <div className="footer-contact-item">
                  <div className="footer-icon-box">
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
                        <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      </g>
                    </svg>
                  </div>

                  <a href="mailto:voflidr@gmail.com?subject=">
                    <div className="footer-contact-link">{t('text_IKPNTG')}</div>
                  </a>
                </div>

                <div className="footer-contact-item">
                  <div className="footer-icon-box">
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
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </g>
                    </svg>
                  </div>

                  <span className="footer-contact-text">
                    {t('FooterContactText_xlE8-V')}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-copyright">
              <span className="section-content">{t('SectionContent_zQ7V9T')}</span>
            </div>

            <div className="footer-legal-links">
              <a href="#/">
                <div className="footer-thq-footer-legal-link-elm1 footer-legal-link"></div>
              </a>
              <a href="#/">
                <div className="footer-thq-footer-legal-link-elm2 footer-legal-link"></div>
              </a>
            </div>
          </div>
        </div>
      </footer>

      <div className="footer-container2">
        <div className="footer-container3">
          <Script
            html={`<script defer data-name="footer-logic">
(function(){
  // Footer interactions for accessibility and visual feedback
  const footerLinks = document.querySelectorAll(".footer-nav-link, .footer-legal-link, .footer-contact-link")

  footerLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      link.style.transition = "all 0.3s ease"
    })
  })

  // Simple console log to confirm footer load without breaking constraints
  console.log("LuxKachel Footer Initialized")
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Footer
