/**
 * WelcomeModal
 * Animated overlay on page load. Shows こんにちは vertically,
 * then Konnichiwa, then Welcome. Auto-dismisses after 3s or on tap/ESC.
 * Uses PDS PModal pattern for overlay behaviour.
 */
import React, { useEffect, useState } from 'react'
import styles from './WelcomeModal.module.css'

export default function WelcomeModal() {
  const [visible, setVisible] = useState(true)
  const [fading, setFading] = useState(false)

  const dismiss = () => {
    setFading(true)
    setTimeout(() => setVisible(false), 600)
  }

  useEffect(() => {
    const timer = setTimeout(dismiss, 3000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') dismiss() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  if (!visible) return null

  return (
    <div
      className={`${styles.overlay} ${fading ? styles.fading : ''}`}
      onClick={dismiss}
      role="dialog"
      aria-label="Welcome greeting"
      aria-modal="true"
    >
      <div className={styles.content} onClick={e => e.stopPropagation()}>
        <div className={styles.kanji} aria-label="Konnichiwa in Japanese">こんにちは</div>
        <div className={styles.romaji}>Konnichiwa</div>
        <div className={styles.english}>Welcome</div>
        <button className={styles.dismiss} onClick={dismiss} aria-label="Enter case study">
          tap to enter →
        </button>
      </div>
    </div>
  )
}
