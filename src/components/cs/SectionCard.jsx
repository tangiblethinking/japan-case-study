/**
 * SectionCard
 * Always-visible section. Shows index, title, summary, leadership tag,
 * body copy, thumbnail (top-right), and "see more" link.
 * Both thumbnail and see more open the DetailSheet.
 *
 * Props:
 *   index       — "01" etc
 *   title       — section title
 *   summary     — one-line summary (always visible)
 *   body        — paragraph copy
 *   leadership  — leadership callout text
 *   thumbSrc    — thumbnail image src (optional, shows placeholder if absent)
 *   onOpen      — callback to open detail sheet for this section
 */
import React from 'react'
import styles from './SectionCard.module.css'

export default function SectionCard({ index, title, summary, body, leadership, thumbSrc, onOpen }) {
  return (
    <article className={styles.card} aria-label={`Section ${index}: ${title}`}>
      <div className={styles.head}>
        <span className={styles.index} aria-hidden="true">{index}</span>
        <div className={styles.headText}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.summary}>{summary}</p>
        </div>
        {/* Thumbnail — tapping opens detail sheet */}
        <button
          className={styles.thumb}
          onClick={onOpen}
          aria-label={`View full documentation for ${title}`}
        >
          {thumbSrc
            ? <img src={thumbSrc} alt={`${title} artifact thumbnail`} className={styles.thumbImg} />
            : <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <rect x="1" y="1" width="16" height="16" rx="1" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 2"/>
                <circle cx="6" cy="7" r="1.5" stroke="currentColor" strokeWidth="0.75"/>
                <path d="M1 13l4-4 4 4 4-5 4 5" stroke="currentColor" strokeWidth="0.75" fill="none" strokeLinejoin="round"/>
              </svg>
          }
        </button>
      </div>

      <div className={styles.body}>
        {/* Leadership tag — PDS Tag pattern, fill only, zero stroke */}
        <div className={styles.tag} role="note">
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
            <circle cx="5.5" cy="5.5" r="5" stroke="currentColor" strokeWidth="0.75"/>
            <path d="M5.5 3v2.5L7 7" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round"/>
          </svg>
          Leadership decision
        </div>

        <p className={styles.bodyText}>{body}</p>

        <button className={styles.seeMore} onClick={onOpen} aria-label={`See more about ${title}`}>
          see more
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
            <path d="M2 5.5h7M6 3l3 2.5L6 8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </article>
  )
}
