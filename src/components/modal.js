import React, { useState, useEffect, useCallback } from 'react'

import './modal.css'

const SESSION_KEY = 'bejk_modal_dismissed'

const Modal = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!sessionStorage.getItem(SESSION_KEY)) {
      setVisible(true)
    }
  }, [])

  const dismiss = useCallback(() => {
    sessionStorage.setItem(SESSION_KEY, '1')
    setVisible(false)
  }, [])

  useEffect(() => {
    if (!visible) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') dismiss()
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [visible, dismiss])

  const handleCta = () => {
    dismiss()
    setTimeout(() => {
      document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })
    }, 150)
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) dismiss()
  }

  if (!visible) return null

  return (
    <div
      className="modal-backdrop"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
    >
      <div className="modal-card animate__animated animate__fadeInDown">
        <button
          className="modal-close"
          onClick={dismiss}
          aria-label="Zavřít"
          type="button"
        >
          &#x2715;
        </button>

        <h2 id="modal-headline" className="modal-headline">
          Objednejte hned, Bullmate bude brzy pracovat na brutální australský zakázce.
        </h2>

        <p className="modal-description">
          Bullmate Tiling provádí profesionální obklady a dlažby po celé
          Evropě. Kontaktujte nás nezávazně.
        </p>

        <button
          type="button"
          className="btn btn-primary modal-cta"
          onClick={handleCta}
        >
          Poptat realizaci
        </button>
      </div>
    </div>
  )
}

export default Modal
