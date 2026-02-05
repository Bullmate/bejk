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
        <title>Extroverted Muted Ape</title>
        <meta property="og:title" content="Extroverted Muted Ape" />
        <link
          rel="canonical"
          href="https://extroverted-muted-ape-6c7xzq.teleporthq.app/"
        />
      </Helmet>

      <Navigation locale={props?.locale ?? ''}></Navigation>

      <section className="hero-luxury-cladding">
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

                <div className="hero-badge">
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
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                  </svg>
                  <span>{t('text_Pa2a9m')}</span>
                </div>
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

      <section className="home-thq-team-section-elm team-section">
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
              </ul>
            </div>

            <div className="team-visual">
              <div className="team-image-frame">
                <img
                  src="https://iili.io/fb91Xh7.jpg"
                  alt="Tým při práci na luxusním obkladu"
                  className="team-work-image"
                />
                <div className="team-accent-box"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-preview">
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
        </div>

        <div className="home-thq-portfolio-footer-elm portfolio-footer"></div>
      </section>

      <section id="quote" className="quote-cta">
        <div className="quote-spotlight-wrapper">
          <div className="quote-background-image">
            <img
              src="https://images.pexels.com/photos/19991834/pexels-photo-19991834.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              alt="Detailní záběr na precizní obklad"
              className="quote-bg-img"
            />
            <div className="quote-scrim"></div>
          </div>

          <div className="quote-focus-card">
            <h2 className="section-title">{t('SectionTitle_Rmuv5H')}</h2>

            <div className="quote-actions">
              <div className="home-thq-btn-elm2 btn btn-accent btn-xl">
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
                <span className="home-text3">{t('text_SM5GZn')}</span>
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
