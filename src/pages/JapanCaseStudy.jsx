/**
 * Japan Case Study — International Expansion: Japan
 * 0→1 product launch for Plexus Worldwide
 * Director: Christopher Kenreigh
 */
import React, { useState } from 'react'
import { WelcomeModal, SectionCard, DetailSheet } from '../components/cs/index.js'
import styles from './JapanCaseStudy.module.css'

/* ============================================================
   SECTION DATA
   To add images: set thumbSrc and imageSrc to '/images/filename.jpg'
   Images go in /public/images/
   ============================================================ */
const SECTIONS = [
  {
    id: '01',
    title: 'Cultural research & discovery',
    summary: 'Building the evidence base that changed everything.',
    body: 'I directed competitive analysis proving Western brands failed in Japan specifically because of missing cultural translation — not product quality. This evidence became the foundation that shifted the entire company strategy.',
    overview: 'Before a single screen was designed, I directed a structured research programme mapping what Japan\'s digital commerce market actually required. Competitive analysis across Japanese e-commerce leaders, DTC wellness brands, and Western entrants revealed a consistent pattern: brands that arrived with culturally-neutral experiences were perceived as foreign and untrustworthy. Japanese consumers expected contextual fluency that goes far beyond language. We partnered with an external translation and cultural consulting vendor — not for language alone, but for cultural signal interpretation.',
    leadership: 'I presented the competitive failure analysis directly to the CMO and Director of Product. The finding that other brands had failed specifically because of missing cultural translation — not product quality — was the turning point. My recommendation for a culture-first design method was approved. That decision defined every phase that followed.',
    imageCaption: 'Competitive landscape mapping: Western DTC brands entering Japan — success factors and failure patterns. Directed by Christopher Kenreigh, 2024.',
    thumbSrc: null,   // Replace: '/images/01-thumb.jpg'
    imageSrc: null,   // Replace: '/images/01-competitive-analysis.jpg'
    imageAlt: 'Competitive analysis of Western brands entering Japan',
  },
  {
    id: '02',
    title: 'UX strategy & design system localisation',
    summary: 'Adapting Plexus\'s design system to carry a Japanese experience without losing brand coherence.',
    body: 'I created a design decision log — every Japan-specific departure from the US system, with cultural rationale. This gave the team full autonomy within defined boundaries, which was critical given the compressed timeline.',
    overview: 'The core tension: Plexus had an established design language built for a US consumer. That system — its typography, spatial rhythms, information hierarchy — needed to port to Japan without becoming unrecognisable as a Plexus product. I directed the team through a systematic audit of every design decision that would carry different meaning in Japan: type density, trust signalling, visual hierarchy, and the ambassador membership model framing. The localised design system became the single source of truth for Japan-specific component decisions.',
    leadership: 'I established a design decision log — a living document capturing every Japan-specific divergence from the US design system, the reasoning behind it, and the cultural reference supporting it. This gave the team a framework to make decisions autonomously within established cultural boundaries — critical on a compressed timeline where escalation would have killed velocity.',
    imageCaption: 'Design system localisation: US baseline components vs Japan-adapted equivalents. Noto Sans JP integration, density calibration, and reading flow adaptation.',
    thumbSrc: null,   // Replace: '/images/02-thumb.jpg'
    imageSrc: null,   // Replace: '/images/02-design-system.jpg'
    imageAlt: 'Japan localised design system',
  },
  {
    id: '03',
    title: 'Regulatory & compliance navigation',
    summary: 'Designing within Japan\'s strict legal requirements for health products and direct sales.',
    body: 'I initiated a compliance design review process — a structured checkpoint where QA, legal, and the translation vendor reviewed every interaction flow together. This prevented compliance issues from surfacing late in development, which would have been catastrophic given the timeline.',
    overview: 'Japan\'s regulatory environment for health and wellness products sold through direct-selling membership models is demanding. The Act on Specified Commercial Transactions (特定商取引法) mandates specific disclosure requirements for multi-level marketing structures. Every membership join flow, product purchase confirmation, and back-office interface needed to carry compliant information in a form that was legally sufficient and experientially clear. The external translation vendor was critical — legal language requires idiomatic Japanese treatment, not direct translation.',
    leadership: 'I designed the compliance review process before any flows were built — not reactively. A structured checkpoint at the end of every major flow where QA, legal, and the translation vendor reviewed interaction design together with my team. This eliminated late-stage compliance failures that would have been catastrophic to the timeline.',
    imageCaption: 'Compliance design map: Japan legal requirements (特定商取引法) translated into experience design constraints and flow checkpoints.',
    thumbSrc: null,   // Replace: '/images/03-thumb.jpg'
    imageSrc: null,   // Replace: '/images/03-compliance-map.jpg'
    imageAlt: 'Regulatory compliance design mapping',
  },
  {
    id: '04',
    title: 'Launch & post-launch iteration',
    summary: 'Taking a complete Japanese digital commerce experience live — and keeping it sharp.',
    body: 'The Japan launch was a full digital commerce experience: localised Japanese-language site, membership sign-up, product purchase through checkout, and ambassador back office. Post-launch iteration was structured before go-live — not after.',
    overview: 'Nothing about this was a minimum viable product in the diminished sense. It was a minimum viable experience — the full scope required to let a Japanese consumer trust the brand, join as a member, purchase products, and manage their ambassador activity — all in an experience that felt native, not translated. Post-launch, I directed three rounds of targeted iteration informed by analytics and qualitative feedback from the translation vendor\'s Japanese-speaking network.',
    leadership: 'I designed the post-launch iteration process before launch — not after. By the time we went live, my team had a structured framework for prioritising post-launch findings and a clear decision-making protocol that let designers act without escalating every change. Three designers on this project grew in scope and seniority. By launch they were making Japan-specific design decisions without escalation. That was intentional — I was building the team\'s capability, not just the product.',
    imageCaption: 'Japan launch: full localised homepage, membership join flow, product purchase through checkout, and ambassador back office experience.',
    thumbSrc: null,   // Replace: '/images/04-thumb.jpg'
    imageSrc: null,   // Replace: '/images/04-launch.jpg'
    imageAlt: 'Japan launch screens',
  },
]

/* ============================================================
   PAGE
   ============================================================ */
export default function JapanCaseStudy() {
  const [activeSection, setActiveSection] = useState(null)

  const openSheet = (id) => setActiveSection(SECTIONS.find(s => s.id === id))
  const closeSheet = () => setActiveSection(null)

  return (
    <>
      <WelcomeModal />

      <div className={styles.page}>

        {/* ── NAV ── */}
        <nav className={styles.nav} aria-label="Site navigation">
          <a href="https://uxapex.com" className={styles.navName}>
            Christopher Kenreigh
          </a>
          <div className={styles.navRight}>
            <span className={styles.navOverline}>Product Design</span>
            <span className={styles.navMain}>Leadership</span>
          </div>
        </nav>

        {/* ── HERO ── */}
        <header className={styles.hero}>
          <div className={styles.inkBg} aria-hidden="true" />
          <div className={styles.kanjiVert} aria-hidden="true">日本</div>

          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>International Expansion · 0→1</p>
            <h1 className={styles.heroTitle}>
              Building Plexus<br />
              Japan from the<br />
              ground up.
            </h1>
            <div className={styles.heroMeta}>
              <span>Plexus Worldwide</span>
              <span className={styles.heroDot} aria-hidden="true">·</span>
              <span>2024 – Present</span>
              <span className={styles.heroDot} aria-hidden="true">·</span>
              <span>6–12 months to launch</span>
            </div>
          </div>
        </header>

        {/* ── METRICS ── */}
        <section className={styles.metrics} aria-label="Key outcomes">
          <div className={styles.metric}>
            <div className={styles.metricValue}>0→1</div>
            <div className={styles.metricLabel}>Japan product launch</div>
          </div>
          <div className={styles.metricDivider} aria-hidden="true" />
          <div className={styles.metric}>
            <div className={styles.metricValue}>Full</div>
            <div className={styles.metricLabel}>End-to-end commerce experience</div>
          </div>
          <div className={styles.metricDivider} aria-hidden="true" />
          <div className={styles.metric}>
            <div className={styles.metricValue}>Culture‑first</div>
            <div className={styles.metricLabel}>Design method approved after competitive research</div>
          </div>
        </section>

        {/* ── PROBLEM FRAMING ── */}
        <section className={styles.framing} aria-label="Problem framing">
          <p className={styles.framingLabel}>The problem</p>
          <h2 className={styles.framingTitle}>
            Japan is not a translation<br />problem. It is a cultural<br />design problem.
          </h2>
          <p className={styles.framingBody}>
            Plexus Worldwide had established itself across the United States. Japan was identified
            as the priority international market. But beyond informal planning, nothing existed —
            no Japanese digital presence, no localisation framework, no design precedent.
            I was asked to take full ownership: roadmap, technical feasibility, cultural standards,
            and every design decision required to bring a US brand to market in one of the world's
            most design-literate, culturally specific markets.
          </p>
        </section>

        {/* ── SECTION CARDS ── */}
        <section aria-label="Project sections">
          <div className={styles.sectionLabel}>The project</div>
          <div className={styles.inkRule} />

          {SECTIONS.map((sec, i) => (
            <React.Fragment key={sec.id}>
              <SectionCard
                index={sec.id}
                title={sec.title}
                summary={sec.summary}
                body={sec.body}
                leadership={sec.leadership}
                thumbSrc={sec.thumbSrc}
                onOpen={() => openSheet(sec.id)}
              />
              {i < SECTIONS.length - 1 && <div className={styles.inkRule} />}
            </React.Fragment>
          ))}
        </section>

        {/* ── TEAM ── */}
        <section className={styles.team} aria-label="Cross-functional partners">
          <div className={styles.inkRule} />
          <div className={styles.teamInner}>
            <p className={styles.teamLabel}>The team</p>
            <h2 className={styles.teamTitle}>Led with — not above</h2>
            <ul className={styles.teamList}>
              {[
                ['Director of Software',     'Engineering Systems'],
                ['Director of Architecture', 'Platform & Technical Strategy'],
                ['QA Manager',              'Quality & Compliance'],
                ['PMO',                     'Programme Governance'],
                ['Project Managers',        'Delivery Coordination'],
                ['CMO',                     'Brand & Market Strategy'],
                ['Director of Product',     'Roadmap & Prioritisation'],
                ['External Translation Vendor', 'Cultural & Linguistic Accuracy'],
              ].map(([name, role]) => (
                <li key={name} className={styles.teamMember}>
                  <span className={styles.memberName}>{name}</span>
                  <span className={styles.memberRole}>{role}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── FOOTNOTE — AI PERSONA ── */}
        <section className={styles.footnote} aria-label="Related case study">
          <div className={styles.inkRule} />
          <div className={styles.footnoteInner}>
            <p className={styles.footnoteText}>
              Cultural intelligence on this project was deepened by parallel work on an AI-assisted
              persona platform that reversed a –17% operating margin through targeted member engagement.
            </p>
            <a href="/persona-platform" className={styles.footnoteLink}>
              AI Persona Platform case study
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
                <path d="M2 9L9 2M9 2H4M9 2v5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <span className={styles.footnoteComing}>Case study in preparation</span>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className={styles.footer}>
          <div className={styles.inkRule} />
          <div className={styles.footerInner}>
            <p className={styles.footerName}>Christopher Kenreigh</p>
            <p className={styles.footerRole}>Director of UX & Product Design</p>
            <div className={styles.footerLinks}>
              <a href="https://uxapex.com" className={styles.footerLink}>uxapex.com</a>
              <span className={styles.footerDot} aria-hidden="true">·</span>
              <a href="mailto:c.kenreigh@gmail.com" className={styles.footerLink}>c.kenreigh@gmail.com</a>
            </div>
            <span className={styles.footerKanji} aria-hidden="true">日本</span>
          </div>
        </footer>

      </div>

      {/* ── DETAIL SHEET ── */}
      {activeSection && (
        <DetailSheet
          open={!!activeSection}
          onClose={closeSheet}
          title={activeSection.title}
          overview={activeSection.overview}
          leadership={activeSection.leadership}
          imageSrc={activeSection.imageSrc}
          imageAlt={activeSection.imageAlt}
          imageCaption={activeSection.imageCaption}
        />
      )}
    </>
  )
}
