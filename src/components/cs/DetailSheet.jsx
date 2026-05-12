/**
 * DetailSheet
 * PDS Sheet pattern. Slides up from bottom at 85% viewport height.
 * Dismissible via drag-pill tap, × button, or scroll-up gesture.
 * Contains tabbed content: Overview / Artifacts / Leadership.
 * Image slot → tapping opens Lightbox.
 *
 * Props:
 *   open        — boolean
 *   onClose     — callback
 *   title       — sheet title
 *   overview    — overview tab copy (string)
 *   leadership  — leadership tab copy (string)
 *   imageSrc    — image src (optional)
 *   imageAlt    — image alt text
 *   imageCaption — caption shown in lightbox
 */
import React, { useState, useRef, useEffect } from 'react'
import Lightbox from './Lightbox.jsx'
import styles from './DetailSheet.module.css'

const TABS = ['Overview', 'Artifacts', 'Leadership']

export default function DetailSheet({
  open, onClose, title,
  overview, leadership,
  imageSrc, imageAlt, imageCaption,
}) {
  const [activeTab, setActiveTab] = useState(0)
  const [lbOpen, setLbOpen] = useState(false)
  const startY = useRef(null)

  // Reset tab on open
  useEffect(() => { if (open) setActiveTab(0) }, [open])

  // ESC to close
  useEffect(() => {
    const fn = (e) => { if (e.key === 'Escape') { setLbOpen(false); onClose() } }
    window.addEventListener('keydown', fn)
    return () => window.removeEventListener('keydown', fn)
  }, [onClose])

  // Touch drag-to-dismiss
  const onTouchStart = (e) => { startY.current = e.touches[0].clientY }
  const onTouchEnd = (e) => {
    if (startY.current === null) return
    const delta = e.changedTouches[0].clientY - startY.current
    if (delta > 60) onClose()
    startY.current = null
  }

  return (
    <>
      {/* Scrim */}
      <div
        className={`${styles.scrim} ${open ? styles.scrimOpen : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sheet panel */}
      <div
        className={`${styles.panel} ${open ? styles.panelOpen : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Drag pill */}
        <div className={styles.dragWrap} onClick={onClose} role="button" tabIndex={0} aria-label="Dismiss">
          <div className={styles.dragPill} />
        </div>

        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: title }} />
          <button className={styles.close} onClick={onClose} aria-label="Close">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* PDS Tabs Bar — divs, zero stroke, active = weight + color */}
        <div className={styles.tabs} role="tablist">
          {TABS.map((t, i) => (
            <div
              key={t}
              className={`${styles.tab} ${activeTab === i ? styles.tabActive : ''}`}
              role="tab"
              tabIndex={0}
              aria-selected={activeTab === i}
              onClick={() => setActiveTab(i)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setActiveTab(i) }}
            >
              {t}
            </div>
          ))}
        </div>

        {/* Scrollable content */}
        <div className={styles.scroll}>

          {/* Tab: Overview */}
          {activeTab === 0 && (
            <div className={styles.tabContent}>
              {/* Image slot */}
              <button
                className={styles.imgSlot}
                onClick={() => setLbOpen(true)}
                aria-label={imageSrc ? `View ${imageAlt} full screen` : 'Image placeholder — tap to view full screen'}
              >
                {imageSrc
                  ? <img src={imageSrc} alt={imageAlt} className={styles.img} />
                  : <>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <rect x="1" y="1" width="22" height="22" rx="2" stroke="currentColor" strokeWidth="0.75" strokeDasharray="4 3"/>
                        <circle cx="8" cy="9" r="2.5" stroke="currentColor" strokeWidth="0.75"/>
                        <path d="M1 18l6-6 5 5 4-5 7 6" stroke="currentColor" strokeWidth="0.75" fill="none" strokeLinejoin="round"/>
                      </svg>
                      <span className={styles.imgSlotLabel}>Tap to view full screen ↗</span>
                    </>
                }
                <span className={styles.imgSlotHint}>↗</span>
              </button>
              <p className={styles.copy}>{overview}</p>
            </div>
          )}

          {/* Tab: Artifacts */}
          {activeTab === 1 && (
            <div className={styles.tabContent}>
              <button
                className={styles.imgSlot}
                onClick={() => setLbOpen(true)}
                aria-label="View artifact full screen"
              >
                {imageSrc
                  ? <img src={imageSrc} alt={imageAlt} className={styles.img} />
                  : <>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <rect x="1" y="1" width="22" height="22" rx="2" stroke="currentColor" strokeWidth="0.75" strokeDasharray="4 3"/>
                        <circle cx="8" cy="9" r="2.5" stroke="currentColor" strokeWidth="0.75"/>
                        <path d="M1 18l6-6 5 5 4-5 7 6" stroke="currentColor" strokeWidth="0.75" fill="none" strokeLinejoin="round"/>
                      </svg>
                      <span className={styles.imgSlotLabel}>Add image via imageSrc prop ↗</span>
                    </>
                }
                <span className={styles.imgSlotHint}>↗</span>
              </button>
              {imageCaption && <p className={styles.caption}>{imageCaption}</p>}
            </div>
          )}

          {/* Tab: Leadership */}
          {activeTab === 2 && (
            <div className={styles.tabContent}>
              <div className={styles.callout}>
                <div className={styles.calloutLabel}>Leadership decision</div>
                <p className={styles.calloutText}>{leadership}</p>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lbOpen}
        onClose={() => setLbOpen(false)}
        src={imageSrc}
        alt={imageAlt}
        caption={imageCaption}
      />
    </>
  )
}
