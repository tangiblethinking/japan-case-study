/**
 * Lightbox
 * Full-screen image overlay. × button and ESC close it.
 * Caption shown below image.
 */
import React, { useEffect } from 'react'
import styles from './Lightbox.module.css'

export default function Lightbox({ open, onClose, src, alt, caption }) {
  useEffect(() => {
    const fn = (e) => { if (e.key === 'Escape') onClose() }
    if (open) window.addEventListener('keydown', fn)
    return () => window.removeEventListener('keydown', fn)
  }, [open, onClose])

  return (
    <div
      className={`${styles.overlay} ${open ? styles.open : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
    >
      <div className={styles.top}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close lightbox">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
          </svg>
          <span>close</span>
        </button>
      </div>

      <div className={styles.imgWrap} role="img" aria-label={alt || 'Artifact image'}>
        {src
          ? <img src={src} alt={alt} className={styles.img} />
          : <div className={styles.placeholder}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <rect x="1" y="1" width="30" height="30" rx="2" stroke="currentColor" strokeWidth="0.75" strokeDasharray="4 3"/>
                <circle cx="10" cy="12" r="3" stroke="currentColor" strokeWidth="0.75"/>
                <path d="M1 24l8-8 7 7 5-6 10 7" stroke="currentColor" strokeWidth="0.75" fill="none" strokeLinejoin="round"/>
              </svg>
              <span className={styles.placeholderLabel}>Image populates via imageSrc prop</span>
            </div>
        }
      </div>

      {caption && <div className={styles.caption}>{caption}</div>}
    </div>
  )
}
