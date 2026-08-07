import React from 'react'
import { t } from '../i18n'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Bullmate Tiling</title>
        <meta property="og:title" content="Bullmate Tiling" />
      </Helmet>

      <Navigation locale={props?.locale ?? ''}></Navigation>

      <section id="home" className="hero-luxury-cladding">
        <div className="hero-outer-wrapper">
          <div className="hero-content-region hero-text-region">
            <div className="hero-text-inner">
              <h1 className="home-hero-title hero-title">{t('HeroTitle_9cUwoM')}</h1>

              <p className="home-hero-subtitle hero-subtitle">
                {t('HeroSubtitle_a29AFy')}
              </p>

<div className="hero-cta-group">
  <button
    type="button"
    className="home-btn-lg btn btn-primary btn-lg"
    onClick={() =>
      document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })
    }
  >
    <span>{t('text_wn6V8q')}</span>
  </button>

              </div>
            </div>
          </div>

          <div className="hero-content-region hero-image-region">
            <img
              src="https://iili.io/fb9Ac12.png"
              alt="Luxusní mramorová koupelna s moderním designem"
              className="home-thq-hero-main-image-elm hero-main-image"
            />
            <div className="hero-image-overlay"></div>
          </div>
        </div>
      </section>

      <section id="about" className="home-thq-team-section-elm team-section">
        <div className="team-container">
          <div className="team-grid">
            <div className="team-content">
              <h2 className="section-title">{t('SectionTitle_nQabRo')}</h2>

              <p className="section-content">{t('SectionContent_SRvlBp')}</p>

              <ul className="team-benefits">
                <li className="team-benefit-item">
                  <div className="team-icon-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12l2 2l4-4"></path>
                    </svg>
                  </div>
                  <span className="section-content">
                    {t('SectionContent_0pf0fA')}
                  </span>
                </li>

                <li className="team-benefit-item">
                  <div className="team-icon-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12l2 2l4-4"></path>
                    </svg>
                  </div>
                  <span className="section-content">
                    {t('SectionContent_Fax1Qn')}
                  </span>
                </li>

                <li className="team-benefit-item">
                  <div className="team-icon-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12l2 2l4-4"></path>
                    </svg>
                  </div>
                  <span className="section-content">
                    {t('SectionContent_price')}
                  </span>
                </li>
              </ul>
            </div>

            <div className="team-visual">
              <div className="team-image-frame">
                <img
                  src="https://iili.io/CrKXo4R.jpg"
                  alt="Tým při práci na luxusním obkladu"
                  className="team-work-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="portfolio-preview">
        <div className="portfolio-header">
          <h2 className="section-title">{t('SectionTitle_kTcQ9V')}</h2>
        </div>

        <div className="portfolio-grid">
          <div className="portfolio-item">
            <img
              src="https://iili.io/fDyZXmx.jpg"
              alt="Moderní koupelna s unikátním designem"
              className="home-thq-portfolio-img-elm1 portfolio-img"
            />
            <div className="portfolio-overlay">
              <h3 className="section-subtitle">{t('SectionSubtitle_PeQxcH')}</h3>
              <p className="section-content">{t('SectionContent_UMMAdj')}</p>
            </div>
          </div>

          <div className="portfolio-item">
            <img
              src="https://iili.io/fDyZjzQ.jpg"
              alt="Sleek dual shower design"
              className="portfolio-img"
            />
            <div className="portfolio-overlay">
              <h3 className="section-subtitle">{t('SectionSubtitle_MUcUdX')}</h3>
              <p className="section-content">{t('SectionContent_WJ1pI9')}</p>
            </div>
          </div>

          <div className="portfolio-item">
            <img
              src="https://iili.io/fDyZEge.jpg"
              alt="Dark textured tile shower"
              className="portfolio-img"
            />
            <div className="portfolio-overlay">
              <h3 className="section-subtitle">{t('SectionSubtitle_ddJ5an')}</h3>
              <p className="section-content">{t('SectionContent_DPvw6o')}</p>
            </div>
          </div>

          <div className="portfolio-item">
            <img
              src="https://iili.io/fDyZcsS.jpg"
              alt="Mosaic tile bathroom"
              className="home-thq-portfolio-img-elm4 portfolio-img"
            />
            <div className="portfolio-overlay">
              <h3 className="section-subtitle">{t('SectionSubtitle_dHsnXX')}</h3>
              <p className="section-content">{t('SectionContent_l-Xscz')}</p>
            </div>
          </div>

          <div className="portfolio-item">
            <img
              src="https://iili.io/fDyZZrX.jpg"
              alt="Green tile bathroom"
              className="portfolio-img"
            />
            <div className="portfolio-overlay">
              <h3 className="section-subtitle">{t('SectionSubtitle_oos6YZ')}</h3>
              <p className="section-content">{t('SectionContent_VuWUC0')}</p>
            </div>
          </div>

          <div className="portfolio-item">
            <img
              src="https://iili.io/fDytJQ2.jpg"
              alt="Black minimalist bathroom"
              className="portfolio-img"
            />
            <div className="portfolio-overlay">
              <h3 className="section-subtitle">{t('SectionSubtitle_9mRYRc')}</h3>
              <p className="section-content">{t('SectionContent_ivEKMr')}</p>
            </div>
          </div>

          <div className="portfolio-item">
            <img
              src="https://iili.io/Crfc5oQ.jpg"
              alt="Gold Coast bazen Australie"
              className="portfolio-img"
            />
            <div className="portfolio-overlay">
              <h3 className="section-subtitle">{t('portfolio_gold_coast_2_title')}</h3>
              <p className="section-content">{t('portfolio_gold_coast_2_text')}</p>
            </div>
          </div>

          <div className="portfolio-item">
            <img
              src="https://iili.io/CrfcNfI.jpg"
              alt="Nerang bazenovy lem Australie"
              className="portfolio-img"
            />
            <div className="portfolio-overlay">
              <h3 className="section-subtitle">{t('portfolio_nerang_title')}</h3>
              <p className="section-content">{t('portfolio_nerang_text')}</p>
            </div>
          </div>

          <div className="portfolio-item">
            <img
              src="https://iili.io/CrfcUbf.jpg"
              alt="Taree terasa Australie"
              className="portfolio-img"
            />
            <div className="portfolio-overlay">
              <h3 className="section-subtitle">{t('portfolio_taree_terrace_2_title')}</h3>
              <p className="section-content">{t('portfolio_taree_terrace_2_text')}</p>
            </div>
          </div>

          <div className="portfolio-item">
            <img
              src="https://iili.io/CrEbIhG.jpg"
              alt="Australie realizace"
              className="portfolio-img"
            />
            <div className="portfolio-overlay">
              <h3 className="section-subtitle">{t('portfolio_extra_2_title')}</h3>
              <p className="section-content">{t('portfolio_extra_2_text')}</p>
            </div>
          </div>

          <div className="portfolio-item">
            <img
              src="https://iili.io/CrEmSR9.jpg"
              alt="Gold Coast koupelna Australie"
              className="portfolio-img"
            />
            <div className="portfolio-overlay">
              <h3 className="section-subtitle">{t('portfolio_extra_8_title')}</h3>
              <p className="section-content">{t('portfolio_extra_8_text')}</p>
            </div>
          </div>

          <div className="portfolio-item">
            <img
              src="https://iili.io/CrfcuNj.jpg"
              alt="Gold Coast bazen Australie"
              className="portfolio-img"
            />
            <div className="portfolio-overlay">
              <h3 className="section-subtitle">{t('portfolio_gold_coast_3_title')}</h3>
              <p className="section-content">{t('portfolio_gold_coast_3_text')}</p>
            </div>
          </div>

          <div className="portfolio-item">
            <img
              src="https://iili.io/Crfc7VV.jpg"
              alt="Gold Coast bazen Australie"
              className="portfolio-img"
            />
            <div className="portfolio-overlay">
              <h3 className="section-subtitle">{t('portfolio_gold_coast_4_title')}</h3>
              <p className="section-content">{t('portfolio_gold_coast_4_text')}</p>
            </div>
          </div>

          <div className="portfolio-item">
            <img
              src="https://iili.io/CrEpqOX.jpg"
              alt="Australie realizace"
              className="portfolio-img"
            />
            <div className="portfolio-overlay">
              <h3 className="section-subtitle">{t('portfolio_extra_3_title')}</h3>
              <p className="section-content">{t('portfolio_extra_3_text')}</p>
            </div>
          </div>

          <div className="portfolio-item">
            <img
              src="https://iili.io/CrfcvJn.jpg"
              alt="Taree terasa Australie"
              className="portfolio-img"
            />
            <div className="portfolio-overlay">
              <h3 className="section-subtitle">{t('portfolio_taree_terrace_1_title')}</h3>
              <p className="section-content">{t('portfolio_taree_terrace_1_text')}</p>
            </div>
          </div>

          <div className="portfolio-item">
            <img
              src="https://iili.io/CrEbj3B.jpg"
              alt="Australie realizace"
              className="portfolio-img"
            />
            <div className="portfolio-overlay">
              <h3 className="section-subtitle">{t('portfolio_extra_4_title')}</h3>
              <p className="section-content">{t('portfolio_extra_4_text')}</p>
            </div>
          </div>

          <div className="portfolio-item">
            <img
              src="https://iili.io/Crfcpzx.jpg"
              alt="Brisbane bazen Australie"
              className="portfolio-img"
            />
            <div className="portfolio-overlay">
              <h3 className="section-subtitle">{t('portfolio_brisbane_title')}</h3>
              <p className="section-content">{t('portfolio_brisbane_text')}</p>
            </div>
          </div>

          <div className="portfolio-item">
            <img
              src="https://iili.io/CrEmbOF.jpg"
              alt="Australie realizace"
              className="portfolio-img"
            />
            <div className="portfolio-overlay">
              <h3 className="section-subtitle">{t('portfolio_extra_5_title')}</h3>
              <p className="section-content">{t('portfolio_extra_5_text')}</p>
            </div>
          </div>

          <div className="portfolio-item">
            <img
              src="https://iili.io/CrEbWEQ.jpg"
              alt="Australie realizace"
              className="portfolio-img"
            />
            <div className="portfolio-overlay">
              <h3 className="section-subtitle">{t('portfolio_extra_6_title')}</h3>
              <p className="section-content">{t('portfolio_extra_6_text')}</p>
            </div>
          </div>

          <div className="portfolio-item">
            <img
              src="https://iili.io/CrEmWts.jpg"
              alt="Taree balkon Australie"
              className="portfolio-img"
            />
            <div className="portfolio-overlay">
              <h3 className="section-subtitle">{t('portfolio_extra_1_title')}</h3>
              <p className="section-content">{t('portfolio_extra_1_text')}</p>
            </div>
          </div>

          <div className="portfolio-item">
            <img
              src="https://iili.io/CrEpfRt.jpg"
              alt="Australie realizace"
              className="portfolio-img"
            />
            <div className="portfolio-overlay">
              <h3 className="section-subtitle">{t('portfolio_extra_7_title')}</h3>
              <p className="section-content">{t('portfolio_extra_7_text')}</p>
            </div>
          </div>

          <div className="portfolio-item">
            <img
              src="https://iili.io/CrfcDOb.jpg"
              alt="Taree XL balkon Australie"
              className="portfolio-img"
            />
            <div className="portfolio-overlay">
              <h3 className="section-subtitle">{t('portfolio_taree_balcony_1_title')}</h3>
              <p className="section-content">{t('portfolio_taree_balcony_1_text')}</p>
            </div>
          </div>

          <div className="portfolio-item">
            <img
              src="https://iili.io/Crfl9sV.jpg"
              alt="Taree XL balkon Australie"
              className="portfolio-img"
            />
            <div className="portfolio-overlay">
              <h3 className="section-subtitle">{t('portfolio_taree_balcony_2_title')}</h3>
              <p className="section-content">{t('portfolio_taree_balcony_2_text')}</p>
            </div>
          </div>

          <div className="portfolio-item">
            <img
              src="https://iili.io/Crfld0P.jpg"
              alt="Taree XL balkon Australie"
              className="portfolio-img"
            />
            <div className="portfolio-overlay">
              <h3 className="section-subtitle">{t('portfolio_taree_balcony_3_title')}</h3>
              <p className="section-content">{t('portfolio_taree_balcony_3_text')}</p>
            </div>
          </div>
        </div>

        <div className="home-thq-portfolio-footer-elm portfolio-footer"></div>
      </section>

      <section id="quote" className="quote-cta">
        <div className="quote-spotlight-wrapper">
          <div className="quote-background-image">
            <img
              src="https://iili.io/Cr2t6FV.jpg"
              alt="Detailní záběr na precizní obklad"
              className="quote-bg-img"
            />
            <div className="quote-scrim"></div>
          </div>

          <div className="quote-focus-card">
            <h2 className="section-title">{t('SectionTitle_Rmuv5H')}</h2>

            <div className="quote-actions">
              <div
                className="home-thq-btn-elm2 btn btn-accent btn-xl quote-contact-button"
                tabIndex="0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                </svg>
                <span className="home-text3">voflidr@gmail.com</span>
              </div>

              <div
                className="home-thq-btn-elm2 btn btn-accent btn-xl quote-contact-button"
                tabIndex="0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"></path>
                </svg>
                <span className="home-text3">+420 601 351 515</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="home-container2">
        <div className="home-container3">
          <Script
            html={`<style>
section {
  position: relative;
  overflow: hidden;
}
</style>`}
          ></Script>
        </div>
      </div>

      <div className="home-container4">
        <div className="home-container5">
          <Script
            html={`<script defer data-name="portfolio-hover-effects">
(function(){
  const portfolioItems = document.querySelectorAll(".portfolio-item")

  portfolioItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      item.querySelector(".portfolio-overlay").style.opacity = "1"
    })

    item.addEventListener("mouseleave", () => {
      item.querySelector(".portfolio-overlay").style.opacity = "0"
    })
  })

  // Simple intersection observer for scroll reveals
  const observerOptions = {
    threshold: 0.1,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  document.querySelectorAll(".section-title, .team-image-frame").forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "all 0.6s cubic-bezier(0.23, 1, 0.32, 1)"
    observer.observe(el)
  })
})()
</script>`}
          ></Script>
        </div>
      </div>

      <Footer locale={props?.locale ?? ''}></Footer>

    </div>
  )
}

export default Home
