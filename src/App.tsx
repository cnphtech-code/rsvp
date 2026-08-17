import { useState, useEffect, useRef } from "react"
import React from "react"


// ── Countdown hook ──────────────────────────────────────────────────────────
function useCountdown(target: Date) {
  const calc = () => {
    const diff = target.getTime() - Date.now()
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    }
  }
  const [time, setTime] = useState(calc)
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000)
    return () => clearInterval(id)
  })
  return time
}

// ── Scroll reveal hook ──────────────────────────────────────────────────────
function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("visible")
      },
      { threshold: 0.12 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

// ── Floral SVG decorations ──────────────────────────────────────────────────
function FloralCornerTL() {
  return (
    <svg
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
    >
      <ellipse
        cx="30"
        cy="30"
        rx="22"
        ry="14"
        fill="rgba(255,255,255,0.55)"
        transform="rotate(-30 30 30)"
      />
      <ellipse
        cx="65"
        cy="15"
        rx="20"
        ry="13"
        fill="rgba(255,255,255,0.5)"
        transform="rotate(-10 65 15)"
      />
      <ellipse
        cx="15"
        cy="65"
        rx="18"
        ry="12"
        fill="rgba(255,255,255,0.45)"
        transform="rotate(-50 15 65)"
      />
      <ellipse
        cx="55"
        cy="50"
        rx="16"
        ry="10"
        fill="rgba(255,255,255,0.6)"
        transform="rotate(-25 55 50)"
      />
      <ellipse
        cx="90"
        cy="35"
        rx="14"
        ry="9"
        fill="rgba(255,255,255,0.4)"
        transform="rotate(5 90 35)"
      />
      <ellipse
        cx="38"
        cy="90"
        rx="15"
        ry="9"
        fill="rgba(255,255,255,0.45)"
        transform="rotate(-60 38 90)"
      />
      <circle cx="50" cy="28" r="8" fill="rgba(255,255,255,0.7)" />
      <circle cx="78" cy="20" r="6" fill="rgba(255,255,255,0.6)" />
      <circle cx="22" cy="55" r="7" fill="rgba(255,255,255,0.65)" />
      <circle cx="60" cy="70" r="5" fill="rgba(255,255,255,0.5)" />
      {/* Leaves */}
      <ellipse
        cx="100"
        cy="55"
        rx="20"
        ry="8"
        fill="rgba(100,140,85,0.4)"
        transform="rotate(-40 100 55)"
      />
      <ellipse
        cx="70"
        cy="85"
        rx="18"
        ry="7"
        fill="rgba(100,140,85,0.35)"
        transform="rotate(-70 70 85)"
      />
      <ellipse
        cx="120"
        cy="30"
        rx="16"
        ry="6"
        fill="rgba(100,140,85,0.3)"
        transform="rotate(-15 120 30)"
      />
    </svg>
  )
}

function FloralCornerBR() {
  return (
    <svg
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%", transform: "rotate(180deg)" }}
    >
      <ellipse
        cx="30"
        cy="30"
        rx="22"
        ry="14"
        fill="rgba(255,255,255,0.55)"
        transform="rotate(-30 30 30)"
      />
      <ellipse
        cx="65"
        cy="15"
        rx="20"
        ry="13"
        fill="rgba(255,255,255,0.5)"
        transform="rotate(-10 65 15)"
      />
      <ellipse
        cx="15"
        cy="65"
        rx="18"
        ry="12"
        fill="rgba(255,255,255,0.45)"
        transform="rotate(-50 15 65)"
      />
      <ellipse
        cx="55"
        cy="50"
        rx="16"
        ry="10"
        fill="rgba(255,255,255,0.6)"
        transform="rotate(-25 55 50)"
      />
      <circle cx="50" cy="28" r="8" fill="rgba(255,255,255,0.7)" />
      <circle cx="22" cy="55" r="7" fill="rgba(255,255,255,0.65)" />
      <ellipse
        cx="100"
        cy="55"
        rx="20"
        ry="8"
        fill="rgba(100,140,85,0.4)"
        transform="rotate(-40 100 55)"
      />
      <ellipse
        cx="70"
        cy="85"
        rx="18"
        ry="7"
        fill="rgba(100,140,85,0.35)"
        transform="rotate(-70 70 85)"
      />
    </svg>
  )
}

function LeafSprig({ style }: { style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 80 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path
        d="M40 110 Q40 60 40 10"
        stroke="rgba(100,140,85,0.5)"
        strokeWidth="1.5"
      />
      <ellipse
        cx="40"
        cy="35"
        rx="14"
        ry="8"
        fill="rgba(100,150,80,0.35)"
        transform="rotate(-30 40 35)"
      />
      <ellipse
        cx="40"
        cy="55"
        rx="14"
        ry="8"
        fill="rgba(100,150,80,0.35)"
        transform="rotate(25 40 55)"
      />
      <ellipse
        cx="40"
        cy="75"
        rx="12"
        ry="7"
        fill="rgba(100,150,80,0.3)"
        transform="rotate(-20 40 75)"
      />
      <ellipse
        cx="40"
        cy="92"
        rx="10"
        ry="6"
        fill="rgba(100,150,80,0.25)"
        transform="rotate(15 40 92)"
      />
    </svg>
  )
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z" />
    </svg>
  )
}

function RingIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <path d="M8 6l-2-3M16 6l2-3" />
    </svg>
  )
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  )
}

function GlassIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M8 2l1 8H7L8 2zM16 2l-1 8h2L16 2z" />
      <path d="M9 10c0 4 3 6 3 6s3-2 3-6" />
      <line x1="12" y1="16" x2="12" y2="21" />
      <line x1="9" y1="21" x2="15" y2="21" />
    </svg>
  )
}

function CameraIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  )
}

function CakeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M20 21v-8a2 2 0 00-2-2H6a2 2 0 00-2 2v8" />
      <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" />
      <path d="M2 21h20" />
      <path d="M7 8v3M12 8v3M17 8v3" />
      <path d="M7 4a1 1 0 100-2 1 1 0 000 2zM12 4a1 1 0 100-2 1 1 0 000 2zM17 4a1 1 0 100-2 1 1 0 000 2z" />
    </svg>
  )
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

function UtensilsIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2" />
      <path d="M7 2v20M21 15V2v0a5 5 0 00-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" />
    </svg>
  )
}

// ── Nav ─────────────────────────────────────────────────────────────────────
function Nav({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean
  setMenuOpen: (v: boolean) => void
}) {
  const links = ["Home", "Details", "Gallery", "RSVP"]
  const ids = ["hero", "details", "gallery", "rsvp"]
  const scroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setMenuOpen(false)
  }
  return (
    <nav className="wedding-nav">
      <div style={{ maxWidth: 480, margin: "0 auto", padding: "0 20px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 52,
          }}
        >
          <span
            className="font-script"
            style={{
              fontSize: "1.4rem",
              color: "var(--forest)",
              lineHeight: 1,
            }}
          >
            C & L
          </span>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 4,
              color: "var(--forest)",
            }}
            aria-label="Menu"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              {menuOpen ? (
                <path
                  d="M4 4l14 14M18 4L4 18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              ) : (
                <>
                  <line
                    x1="3"
                    y1="6"
                    x2="19"
                    y2="6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <line
                    x1="3"
                    y1="11"
                    x2="19"
                    y2="11"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <line
                    x1="3"
                    y1="16"
                    x2="19"
                    y2="16"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </>
              )}
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div
            style={{
              paddingBottom: 16,
              borderTop: "1px solid rgba(255,255,255,0.3)",
              paddingTop: 12,
            }}
          >
            {links.map((l, i) => (
              <button
                key={l}
                onClick={() => scroll(ids[i])}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "10px 0",
                  color: "var(--forest)",
                  fontFamily: "Lato, sans-serif",
                  fontWeight: 600,
                  fontSize: "0.75rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                }}
              >
                {l}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

// ── Hero ────────────────────────────────────────────────────────────────────
function Hero({ onOpen }: { onOpen: () => void }) {
  return (
    <section
      id="hero"
      className="watercolor-bg"
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 20px 40px",
        overflow: "hidden",
      }}
    >
      {/* Floral corners */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 160,
          height: 160,
          pointerEvents: "none",
        }}
      >
        <FloralCornerTL />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: 160,
          height: 160,
          pointerEvents: "none",
        }}
      >
        <FloralCornerBR />
      </div>
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: 120,
          height: 120,
          pointerEvents: "none",
          opacity: 0.7,
        }}
      >
        <FloralCornerBR />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: 120,
          height: 120,
          pointerEvents: "none",
          opacity: 0.6,
        }}
      >
        <FloralCornerTL />
      </div>

      <div
        className="animate-fade-in"
        style={{ textAlign: "center", maxWidth: 380, width: "100%" }}
      >
        {/* Invite text */}
        <p
          className="font-serif animate-fade-up delay-100"
          style={{
            fontSize: "0.65rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--forest)",
            marginBottom: 24,
            opacity: 0.85,
          }}
        >
          Together with our families
          <br />
          <span style={{ fontSize: "0.7rem" }}>
            we joyfully invite you to our wedding
          </span>
        </p>

        {/* Circular frame */}
        <div
          className="circle-frame animate-fade-up delay-200"
          style={{
            width: 280,
            height: 280,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            backgroundColor: "rgba(255,255,255,0.08)",
          }}
        >
          <div
            className="gold-divider animate-float"
            style={{ width: "60%", marginBottom: 4 }}
          />
          <p
            className="font-script"
            style={{
              fontSize: "3.6rem",
              color: "var(--forest)",
              lineHeight: 1.1,
              marginBottom: 0,
            }}
          >
            Carlo
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              margin: "10px 0",
            }}
          >
            <div className="gold-divider" style={{ width: 40 }} />
            <span
              className="font-serif"
              style={{
                fontSize: "0.6rem",
                letterSpacing: "0.25em",
                color: "var(--forest)",
                textTransform: "uppercase",
              }}
            >
              &amp;
            </span>
            <div className="gold-divider" style={{ width: 40 }} />
          </div>
          <p
            className="font-script"
            style={{
              fontSize: "3.4rem",
              color: "var(--forest)",
              lineHeight: 1.1,
              marginTop: 0,
            }}
          >
            Leslie Ann
          </p>
        </div>

        {/* Date bar */}
        <div
          className="animate-fade-up delay-300"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 20,
            margin: "28px 0 8px",
          }}
        >
          <div style={{ textAlign: "right" }}>
            <div
              className="gold-divider"
              style={{ width: 70, marginBottom: 6 }}
            />
            <span
              className="font-serif"
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--forest)",
              }}
            >
              Tuesday
            </span>
            <div className="gold-divider" style={{ width: 70, marginTop: 6 }} />
          </div>
          <span
            className="font-script"
            style={{
              fontSize: "4rem",
              color: "white",
              lineHeight: 1,
              textShadow: "0 2px 8px rgba(61,90,54,0.3)",
            }}
          >
            29
          </span>
          <div style={{ textAlign: "left" }}>
            <div
              className="gold-divider"
              style={{ width: 70, marginBottom: 6 }}
            />
            <span
              className="font-serif"
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--forest)",
              }}
            >
              1:00 PM
            </span>
            <div className="gold-divider" style={{ width: 70, marginTop: 6 }} />
          </div>
        </div>
        <p
          className="font-serif animate-fade-up delay-400"
          style={{
            fontSize: "0.6rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "var(--forest-mid)",
            marginBottom: 36,
          }}
        >
          December
        </p>

        <button className="btn-gold animate-fade-up delay-500" onClick={onOpen}>
          Open Invitation
        </button>
      </div>
    </section>
  )
}

// ── Couple ──────────────────────────────────────────────────────────────────
function CoupleSection() {
  const ref = useReveal()
  return (
    <section
      style={{
        background: "var(--cream)",
        padding: "72px 24px",
        textAlign: "center",
      }}
    >
      <div
        ref={ref}
        className="reveal"
        style={{ maxWidth: 400, margin: "0 auto" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 8,
            marginBottom: 16,
          }}
        >
          <LeafSprig
            style={{ width: 30, height: 48, transform: "scaleX(-1)" }}
          />
          <HeartIcon
            className="animate-heartbeat"
            style={
              {
                width: 20,
                color: "var(--gold)",
                alignSelf: "center",
              } as React.CSSProperties
            }
          />
          <LeafSprig style={{ width: 30, height: 48 }} />
        </div>
        <p
          style={{
            fontSize: "0.6rem",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "var(--gold)",
            marginBottom: 16,
            fontFamily: "Lato",
          }}
        >
          The Couple
        </p>
        <p
          className="font-script"
          style={{
            fontSize: "3.8rem",
            color: "var(--forest)",
            lineHeight: 1.1,
            marginBottom: 4,
          }}
        >
          Carlo
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            margin: "12px 0",
          }}
        >
          <div className="gold-divider" style={{ width: 60 }} />
          <RingIcon
            style={{ width: 20, color: "var(--gold)" } as React.CSSProperties}
          />
          <div className="gold-divider" style={{ width: 60 }} />
        </div>
        <p
          className="font-script"
          style={{
            fontSize: "3.8rem",
            color: "var(--forest)",
            lineHeight: 1.1,
            marginBottom: 28,
          }}
        >
          Leslie Ann
        </p>
        <div
          className="gold-divider"
          style={{ width: 80, margin: "0 auto 24px" }}
        />
        <p
          className="font-serif"
          style={{
            fontSize: "1rem",
            lineHeight: 1.8,
            color: "var(--forest-mid)",
            fontStyle: "italic",
          }}
        >
          "Two hearts, one beautiful journey,
          <br />
          and a lifetime to celebrate together."
        </p>
        <img
          src="/images/hero.png"
          alt="Wedding couple embracing"
          style={{
            width: "100%",
            maxWidth: 350,
            height: 500,
            objectFit: "cover",
            borderRadius: 20,
            marginTop: 36,
            marginLeft:15,
            boxShadow: "0 12px 40px rgba(61,90,54,0.18)",
            border: "4px solid rgba(255,255,255,0.8)",
          }}
        />
      </div>
    </section>
  )
}

// ── Details ─────────────────────────────────────────────────────────────────
function DetailsSection() {
  const ref1 = useReveal()
  const ref2 = useReveal()
  const mapUrl =
    "https://maps.google.com/?q=St+Padre+Pio+Parish+Rawis+Legazpi+City+Albay"
  const receptionUrl =
    "https://maps.google.com/?q=La+Piazza+Hotel+Legazpi+City+Albay"
  return (
    <section
      id="details"
      className="watercolor-bg"
      style={{ padding: "72px 20px" }}
    >
      <div style={{ maxWidth: 400, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <p
            style={{
              fontSize: "0.58rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--gold)",
              fontFamily: "Lato",
              marginBottom: 8,
            }}
          >
            Save the date
          </p>
          <h2
            className="font-serif"
            style={{
              fontSize: "1.8rem",
              color: "var(--forest)",
              marginBottom: 0,
            }}
          >
            Wedding Details
          </h2>
          <div
            className="gold-divider"
            style={{ width: 60, margin: "16px auto 0" }}
          />
        </div>

        {/* Ceremony card */}
        <div
          ref={ref1}
          className="reveal card-cream"
          style={{
            borderRadius: 20,
            padding: "32px 24px",
            marginBottom: 20,
            textAlign: "center",
            boxShadow: "0 8px 30px rgba(61,90,54,0.1)",
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              background: "rgba(143,170,130,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 16px",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              width="22"
              height="22"
              fill="none"
              stroke="var(--forest)"
              strokeWidth="1.5"
            >
              <path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z" />
            </svg>
          </div>
          <p
            style={{
              fontSize: "0.6rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "var(--gold)",
              fontFamily: "Lato",
              fontWeight: 600,
              marginBottom: 12,
            }}
          >
            Wedding Ceremony
          </p>
          <h3
            className="font-serif"
            style={{
              fontSize: "1rem",
              color: "var(--forest)",
              lineHeight: 1.5,
              marginBottom: 8,
            }}
          >
            St. Padre Pio Parish and
            <br />
            Diocesan Shrine
          </h3>
          <p
            style={{
              fontSize: "0.85rem",
              color: "var(--forest-mid)",
              fontFamily: "Lato",
              marginBottom: 20,
            }}
          >
            Rawis, Legazpi City, Albay
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 32,
              marginBottom: 24,
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "0.55rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  fontFamily: "Lato",
                  marginBottom: 4,
                }}
              >
                Date
              </p>
              <p
                className="font-serif"
                style={{ fontSize: "0.95rem", color: "var(--forest)" }}
              >
                Tuesday, Dec 29
              </p>
            </div>
            <div style={{ width: 1, background: "rgba(184,160,106,0.3)" }} />
            <div>
              <p
                style={{
                  fontSize: "0.55rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  fontFamily: "Lato",
                  marginBottom: 4,
                }}
              >
                Time
              </p>
              <p
                className="font-serif"
                style={{ fontSize: "0.95rem", color: "var(--forest)" }}
              >
                1:00 PM
              </p>
            </div>
          </div>
          <a
            href={mapUrl}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <button
              className="btn-gold"
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
              }}
            >
              <MapPinIcon
                style={{ width: 14, height: 14 } as React.CSSProperties}
              />{" "}
              View Location
            </button>
          </a>
        </div>

        {/* Reception card */}
        <div
          ref={ref2}
          className="reveal card-cream"
          style={{
            borderRadius: 20,
            padding: "32px 24px",
            textAlign: "center",
            boxShadow: "0 8px 30px rgba(61,90,54,0.1)",
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              background: "rgba(143,170,130,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 16px",
            }}
          >
            <GlassIcon
              style={
                {
                  width: 22,
                  height: 22,
                  color: "var(--forest)",
                } as React.CSSProperties
              }
            />
          </div>
          <p
            style={{
              fontSize: "0.6rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "var(--gold)",
              fontFamily: "Lato",
              fontWeight: 600,
              marginBottom: 12,
            }}
          >
            Reception
          </p>
          <h3
            className="font-serif"
            style={{
              fontSize: "1rem",
              color: "var(--forest)",
              lineHeight: 1.5,
              marginBottom: 8,
            }}
          >
            La Piazza Hotel and
            <br />
            Convention Center
          </h3>
          <p
            style={{
              fontSize: "0.85rem",
              color: "var(--forest-mid)",
              fontFamily: "Lato",
              marginBottom: 24,
            }}
          >
            Legazpi City, Albay
          </p>
          <a
            href={receptionUrl}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <button
              className="btn-gold"
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
              }}
            >
              <MapPinIcon
                style={{ width: 14, height: 14 } as React.CSSProperties}
              />{" "}
              View Location
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}

// ── Countdown ───────────────────────────────────────────────────────────────
function CountdownSection() {
  const target = new Date("2025-12-29T13:00:00")
  const { days, hours, minutes, seconds } = useCountdown(target)
  const ref = useReveal()
  const units = [
    { val: days, label: "Days" },
    { val: hours, label: "Hours" },
    { val: minutes, label: "Minutes" },
    { val: seconds, label: "Seconds" },
  ]
  return (
    <section
      style={{
        background: "var(--forest)",
        padding: "72px 20px",
        textAlign: "center",
      }}
    >
      <div
        ref={ref}
        className="reveal"
        style={{ maxWidth: 400, margin: "0 auto" }}
      >
        <LeafSprig
          style={{
            width: 24,
            height: 40,
            margin: "0 auto 16px",
            display: "block",
            opacity: 0.6,
          }}
        />
        <p
          style={{
            fontSize: "0.58rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "rgba(212,188,132,0.8)",
            fontFamily: "Lato",
            marginBottom: 8,
          }}
        >
          Counting down
        </p>
        <h2
          className="font-serif"
          style={{
            fontSize: "1.5rem",
            color: "white",
            marginBottom: 36,
            fontStyle: "italic",
          }}
        >
          Countdown to Our Big Day
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 12,
          }}
        >
          {units.map(({ val, label }) => (
            <div
              key={label}
              style={{
                background: "rgba(255,255,255,0.08)",
                borderRadius: 16,
                padding: "20px 8px",
                border: "1px solid rgba(212,188,132,0.25)",
              }}
            >
              <p
                className="font-serif"
                style={{
                  fontSize: "2.2rem",
                  color: "var(--gold-light)",
                  lineHeight: 1,
                  marginBottom: 6,
                }}
              >
                {String(val).padStart(2, "0")}
              </p>
              <p
                style={{
                  fontSize: "0.5rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.55)",
                  fontFamily: "Lato",
                }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Timeline ─────────────────────────────────────────────────────────────────
function TimelineSection() {
  const ref = useReveal()
  const items = [
    {
      time: "1:00 PM",
      event: "Wedding Ceremony",
      icon: (
        <RingIcon
          style={{ width: 16, color: "var(--forest)" } as React.CSSProperties}
        />
      ),
    },
    {
      time: "2:30 PM",
      event: "Photo Session",
      icon: (
        <CameraIcon
          style={{ width: 16, color: "var(--forest)" } as React.CSSProperties}
        />
      ),
    },
    {
      time: "3:00 PM",
      event: "Reception",
      icon: (
        <GlassIcon
          style={{ width: 16, color: "var(--forest)" } as React.CSSProperties}
        />
      ),
    },
    {
      time: "4:00 PM",
      event: "Program",
      icon: (
        <StarIcon
          style={{ width: 16, color: "var(--forest)" } as React.CSSProperties}
        />
      ),
    },
    {
      time: "5:00 PM",
      event: "Dinner & Celebration",
      icon: (
        <UtensilsIcon
          style={{ width: 16, color: "var(--forest)" } as React.CSSProperties}
        />
      ),
    },
    {
      time: "6:00 PM",
      event: "Cake Cutting",
      icon: (
        <CakeIcon
          style={{ width: 16, color: "var(--forest)" } as React.CSSProperties}
        />
      ),
    },
  ]
  return (
    <section style={{ background: "var(--cream)", padding: "72px 20px" }}>
      <div style={{ maxWidth: 400, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <p
            style={{
              fontSize: "0.58rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--gold)",
              fontFamily: "Lato",
              marginBottom: 8,
            }}
          >
            Our Day
          </p>
          <h2
            className="font-serif"
            style={{ fontSize: "1.8rem", color: "var(--forest)" }}
          >
            Wedding Timeline
          </h2>
          <div
            className="gold-divider"
            style={{ width: 60, margin: "16px auto 0" }}
          />
        </div>
        <div ref={ref} className="reveal" style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: 1,
              background:
                "linear-gradient(to bottom, transparent, var(--sage-light), transparent)",
              transform: "translateX(-50%)",
            }}
          />
          {items.map((item, i) => {
            const isLeft = i % 2 === 0
            return (
              <div
                key={item.time}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 36,
                  flexDirection: isLeft ? "row" : "row-reverse",
                }}
              >
                <div
                  style={{
                    flex: 1,
                    textAlign: isLeft ? "right" : "left",
                    paddingRight: isLeft ? 20 : 0,
                    paddingLeft: isLeft ? 0 : 20,
                  }}
                >
                  <p
                    className="font-serif"
                    style={{
                      fontSize: "0.95rem",
                      color: "var(--forest)",
                      fontWeight: 600,
                      marginBottom: 2,
                    }}
                  >
                    {item.time}
                  </p>
                  <p
                    style={{
                      fontSize: "0.82rem",
                      color: "var(--forest-mid)",
                      fontFamily: "Lato",
                    }}
                  >
                    {item.event}
                  </p>
                </div>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: "rgba(143,170,130,0.25)",
                    border: "1.5px solid var(--sage)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    zIndex: 1,
                    backgroundColor: "var(--cream)",
                  }}
                >
                  {item.icon}
                </div>
                <div style={{ flex: 1 }} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ── Gallery ──────────────────────────────────────────────────────────────────
function GallerySection() {
  const ref = useReveal()
  const carouselRef = React.useRef<HTMLDivElement>(null)

  const photos = [
    {
      url: "https://images.unsplash.com/photo-1596457221755-b96bc3a6df18?w=600&h=800&fit=crop&auto=format",
      alt: "Wedding couple portrait",
    },
    {
      url: "https://images.unsplash.com/photo-1700142611715-8a023c5eb8c5?w=600&h=480&fit=crop&auto=format",
      alt: "White wedding flowers",
    },
    {
      url: "https://images.unsplash.com/photo-1591604442449-ecc9943efabf?w=600&h=800&fit=crop&auto=format",
      alt: "Bride in white dress",
    },
    {
      url: "https://images.unsplash.com/photo-1667555150959-3e881131b9e4?w=600&h=600&fit=crop&auto=format",
      alt: "Wedding bouquet",
    },
    {
      url: "https://images.unsplash.com/photo-1606216794079-73f85bbd57d5?w=600&h=840&fit=crop&auto=format",
      alt: "Bride in gown",
    },
    {
      url: "https://images.unsplash.com/photo-1562158756-c9667871dba2?w=600&h=560&fit=crop&auto=format",
      alt: "Flower bouquet",
    },
  ]

  const scrollCarousel = (direction: "left" | "right") => {
    if (!carouselRef.current) return

    carouselRef.current.scrollBy({
      left: direction === "right" ? 300 : -300,
      behavior: "smooth",
    })
  }

  return (
    <section
      id="gallery"
      className="watercolor-bg"
      style={{ padding: "72px 0" }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: 36,
          padding: "0 20px",
        }}
      >
        <p
          style={{
            fontSize: "0.58rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "var(--forest)",
            fontFamily: "Lato",
            marginBottom: 8,
          }}
        >
          Memories
        </p>

        <h2
          className="font-serif"
          style={{
            fontSize: "1.8rem",
            color: "var(--forest)",
          }}
        >
          Our Gallery
        </h2>

        <div
          className="gold-divider"
          style={{
            width: 60,
            margin: "16px auto 0",
          }}
        />
      </div>

      <div
        ref={ref}
        className="reveal"
        style={{
          position: "relative",
        }}
      >
        {/* Previous button */}
        <button
          type="button"
          aria-label="Previous photos"
          onClick={() => scrollCarousel("left")}
          style={{
            position: "absolute",
            left: 10,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 5,
            width: 42,
            height: 42,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.8)",
            background: "rgba(255,255,255,0.85)",
            color: "var(--forest)",
            fontSize: "1.3rem",
            cursor: "pointer",
            boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(6px)",
          }}
        >
          ‹
        </button>

        {/* Carousel */}
        <div
          ref={carouselRef}
          className="gallery-scroll"
          style={{
            display: "flex",
            gap: 14,
            overflowX: "auto",
            padding: "10px 55px 20px",
            scrollSnapType: "x mandatory",
            scrollBehavior: "smooth",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {photos.map((p, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0,
                scrollSnapAlign: "center",
              }}
            >
              <img
                src={p.url}
                alt={p.alt}
                loading="lazy"
                style={{
                  height: i % 2 === 0 ? 260 : 220,
                  width: i % 2 === 0 ? 180 : 160,
                  objectFit: "cover",
                  borderRadius: 16,
                  display: "block",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                  border: "3px solid rgba(255,255,255,0.7)",
                }}
              />
            </div>
          ))}
        </div>

        {/* Next button */}
        <button
          type="button"
          aria-label="Next photos"
          onClick={() => scrollCarousel("right")}
          style={{
            position: "absolute",
            right: 10,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 5,
            width: 42,
            height: 42,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.8)",
            background: "rgba(255,255,255,0.85)",
            color: "var(--forest)",
            fontSize: "1.3rem",
            cursor: "pointer",
            boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(6px)",
          }}
        >
          ›
        </button>
      </div>

      {/* Hide scrollbar */}
      <style>{`
        .gallery-scroll::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
} 

// ── Dress Code ───────────────────────────────────────────────────────────────
function DressCodeSection() {
  const ref = useReveal()
  return (
    <section
      style={{
        background: "var(--cream-dark)",
        padding: "72px 20px",
        textAlign: "center",
      }}
    >
      <div
        ref={ref}
        className="reveal"
        style={{ maxWidth: 380, margin: "0 auto" }}
      >
        <p
          style={{
            fontSize: "0.58rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "var(--gold)",
            fontFamily: "Lato",
            marginBottom: 8,
          }}
        >
          Attire
        </p>
        <h2
          className="font-serif"
          style={{
            fontSize: "1.8rem",
            color: "var(--forest)",
            marginBottom: 28,
          }}
        >
          Dress Code
        </h2>
        <div
          className="gold-divider"
          style={{ width: 60, margin: "0 auto 32px" }}
        />
        <div style={{ display: "flex", justifyContent: "center", gap: 32 }}>
          {[
            { icon: "🤵", label: "Gentlemen", sub: "Suit & Tie" },
            { icon: "👗", label: "Ladies", sub: "Formal Dress" },
          ].map(({ icon, label, sub }) => (
            <div key={label}>
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: "50%",
                  background: "rgba(143,170,130,0.2)",
                  border: "1px solid rgba(184,160,106,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 12px",
                  fontSize: "1.8rem",
                }}
              >
                {icon}
              </div>
              <p
                className="font-serif"
                style={{
                  fontSize: "0.85rem",
                  color: "var(--forest)",
                  marginBottom: 2,
                }}
              >
                {label}
              </p>
              <p
                style={{
                  fontSize: "0.75rem",
                  color: "var(--forest-mid)",
                  fontFamily: "Lato",
                }}
              >
                {sub}
              </p>
            </div>
          ))}
        </div>
        <div
          style={{
            marginTop: 28,
            padding: "16px 24px",
            borderRadius: 14,
            background: "rgba(143,170,130,0.15)",
            border: "1px solid rgba(143,170,130,0.3)",
          }}
        >
          <p
            className="font-serif"
            style={{
              fontSize: "1rem",
              color: "var(--forest)",
              fontStyle: "italic",
            }}
          >
            Formal / Semi-Formal
          </p>
          <p
            style={{
              fontSize: "0.78rem",
              color: "var(--forest-mid)",
              fontFamily: "Lato",
              marginTop: 4,
            }}
          >
            Please avoid white and neon colors
          </p>
        </div>
      </div>
    </section>
  )
}

// ── RSVP ─────────────────────────────────────────────────────────────────────
type RSVPState = "form" | "success"

function RSVPSection() {
  const [state, setState] = useState<RSVPState>("form")
  const [name, setName] = useState("")
  const [guests, setGuests] = useState(1)
  const [attending, setAttending] = useState<"yes" | "no" | null>(null)
  const [message, setMessage] = useState("")
  const ref = useReveal()

  const submit = () => {
    if (!name.trim() || !attending) return
    setState("success")
  }

  return (
    <section
      id="rsvp"
      className="watercolor-bg"
      style={{ padding: "72px 20px", minHeight: "100vh" }}
    >
      <div style={{ maxWidth: 400, margin: "0 auto" }}>
        {state === "form" ? (
          <>
            <div style={{ textAlign: "center", marginBottom: 36 }}>
              <LeafSprig
                style={{
                  width: 24,
                  height: 40,
                  margin: "0 auto 16px",
                  display: "block",
                }}
              />
              <p
                style={{
                  fontSize: "0.58rem",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "var(--forest)",
                  fontFamily: "Lato",
                  marginBottom: 8,
                }}
              >
                Join us
              </p>
              <h2
                className="font-serif"
                style={{
                  fontSize: "1.4rem",
                  color: "var(--forest)",
                  lineHeight: 1.4,
                }}
              >
                We Would Love to
                <br />
                Celebrate with You
              </h2>
              <div
                className="gold-divider"
                style={{ width: 60, margin: "16px auto 0" }}
              />
            </div>
            <div
              ref={ref}
              className="reveal card-cream"
              style={{
                borderRadius: 24,
                padding: "32px 24px",
                boxShadow: "0 12px 40px rgba(61,90,54,0.12)",
              }}
            >
              <div style={{ marginBottom: 20 }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.6rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--forest)",
                    fontFamily: "Lato",
                    fontWeight: 600,
                    marginBottom: 8,
                  }}
                >
                  Full Name
                </label>
                <input
                  className="wedding-input"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div style={{ marginBottom: 20 }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.6rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--forest)",
                    fontFamily: "Lato",
                    fontWeight: 600,
                    marginBottom: 8,
                  }}
                >
                  Number of Guests
                </label>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    background: "rgba(255,255,255,0.8)",
                    border: "1px solid rgba(184,160,106,0.4)",
                    borderRadius: 10,
                    padding: "10px 16px",
                    width: "fit-content",
                  }}
                >
                  <button
                    onClick={() => setGuests((g) => Math.max(1, g - 1))}
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      border: "1px solid rgba(184,160,106,0.5)",
                      background: "none",
                      fontSize: "1.2rem",
                      cursor: "pointer",
                      color: "var(--forest)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    −
                  </button>
                  <span
                    className="font-serif"
                    style={{
                      fontSize: "1.2rem",
                      color: "var(--forest)",
                      minWidth: 20,
                      textAlign: "center",
                    }}
                  >
                    {guests}
                  </span>
                  <button
                    onClick={() => setGuests((g) => Math.min(10, g + 1))}
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      border: "1px solid rgba(184,160,106,0.5)",
                      background: "none",
                      fontSize: "1.2rem",
                      cursor: "pointer",
                      color: "var(--forest)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
              <div style={{ marginBottom: 20 }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.6rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--forest)",
                    fontFamily: "Lato",
                    fontWeight: 600,
                    marginBottom: 10,
                  }}
                >
                  Will You Attend?
                </label>
                <div style={{ display: "flex", gap: 12 }}>
                  <button
                    className={`attend-btn attend-yes ${
                      attending === "yes" ? "selected" : ""
                    }`}
                    onClick={() => setAttending("yes")}
                  >
                    ✓ Yes, I'll be there
                  </button>
                  <button
                    className={`attend-btn attend-no ${
                      attending === "no" ? "selected" : ""
                    }`}
                    onClick={() => setAttending("no")}
                  >
                    ✕ Sorry, I can't
                  </button>
                </div>
              </div>
              <div style={{ marginBottom: 28 }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.6rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--forest)",
                    fontFamily: "Lato",
                    fontWeight: 600,
                    marginBottom: 8,
                  }}
                >
                  Message for the Couple
                </label>
                <textarea
                  className="wedding-input"
                  placeholder="Write your message..."
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{ resize: "none" }}
                />
              </div>
              <button
                className="btn-sage"
                style={{ width: "100%" }}
                onClick={submit}
              >
                Submit RSVP
              </button>
            </div>
          </>
        ) : (
          <div
            style={{ textAlign: "center", padding: "40px 0" }}
            className="animate-fade-up"
          >
            <div
              style={{
                width: 100,
                height: 100,
                borderRadius: "50%",
                background: "rgba(143,170,130,0.25)",
                border: "2px solid var(--sage)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 28px",
                fontSize: "2.5rem",
              }}
            >
              💚
            </div>
            <h2
              className="font-script"
              style={{
                fontSize: "3.5rem",
                color: "var(--forest)",
                marginBottom: 16,
              }}
            >
              Thank You!
            </h2>
            <div
              className="gold-divider"
              style={{ width: 80, margin: "0 auto 24px" }}
            />
            <p
              className="font-serif"
              style={{
                fontSize: "1rem",
                color: "var(--forest)",
                fontStyle: "italic",
                marginBottom: 8,
              }}
            >
              Your RSVP has been received.
            </p>
            <p
              style={{
                fontSize: "0.88rem",
                color: "var(--forest-mid)",
                fontFamily: "Lato",
                lineHeight: 1.7,
                marginBottom: 36,
              }}
            >
              We can't wait to celebrate this
              <br />
              special day with you!
            </p>
            <button className="btn-gold" onClick={() => setState("form")}>
              Back to Invitation
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

// ── Organizer Preview ─────────────────────────────────────────────────────────
function OrganizerSection() {
  const ref = useReveal()
  const stats = [
    { label: "Total Guests", val: 48 },
    { label: "Attending", val: 42 },
    { label: "Not Attending", val: 6 },
  ]
  const attendPct = Math.round((42 / 48) * 100)
  return (
    <section
      style={{
        background: "#f0f4ed",
        padding: "48px 20px",
        borderTop: "1px dashed rgba(143,170,130,0.5)",
      }}
    >
      <div style={{ maxWidth: 400, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 24,
          }}
        >
          <div
            style={{ height: 1, flex: 1, background: "rgba(143,170,130,0.4)" }}
          />
          <span
            style={{
              fontSize: "0.55rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--forest-mid)",
              fontFamily: "Lato",
              whiteSpace: "nowrap",
            }}
          >
            Organizer Preview
          </span>
          <div
            style={{ height: 1, flex: 1, background: "rgba(143,170,130,0.4)" }}
          />
        </div>
        <div
          ref={ref}
          className="reveal"
          style={{
            background: "rgba(255,255,255,0.7)",
            border: "1px solid rgba(184,160,106,0.25)",
            borderRadius: 20,
            padding: "24px 20px",
          }}
        >
          <p
            className="font-serif"
            style={{
              fontSize: "1rem",
              color: "var(--forest)",
              marginBottom: 20,
              textAlign: "center",
            }}
          >
            RSVP Summary
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 12,
              marginBottom: 20,
            }}
          >
            {stats.map(({ label, val }) => (
              <div
                key={label}
                style={{
                  textAlign: "center",
                  padding: "12px 4px",
                  borderRadius: 12,
                  background: "rgba(143,170,130,0.1)",
                }}
              >
                <p
                  className="font-serif"
                  style={{
                    fontSize: "1.8rem",
                    color: "var(--forest)",
                    lineHeight: 1,
                  }}
                >
                  {val}
                </p>
                <p
                  style={{
                    fontSize: "0.55rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--forest-mid)",
                    fontFamily: "Lato",
                    marginTop: 4,
                  }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
          <div
            style={{
              background: "rgba(143,170,130,0.15)",
              borderRadius: 8,
              overflow: "hidden",
              height: 6,
            }}
          >
            <div
              style={{
                width: `${attendPct}%`,
                height: "100%",
                background: "var(--forest)",
                borderRadius: 8,
              }}
            />
          </div>
          <p
            style={{
              fontSize: "0.7rem",
              color: "var(--forest-mid)",
              fontFamily: "Lato",
              textAlign: "center",
              marginTop: 8,
            }}
          >
            {attendPct}% confirmed attendance
          </p>
        </div>
      </div>
    </section>
  )
}

// ── Message & Footer ──────────────────────────────────────────────────────────
function MessageSection() {
  const ref = useReveal()
  return (
    <section
      style={{
        background: "var(--cream)",
        padding: "72px 20px",
        textAlign: "center",
      }}
    >
      <div
        ref={ref}
        className="reveal"
        style={{ maxWidth: 380, margin: "0 auto" }}
      >
        <LeafSprig
          style={{
            width: 20,
            height: 36,
            margin: "0 auto 20px",
            display: "block",
            opacity: 0.7,
          }}
        />
        <p
          className="font-script"
          style={{
            fontSize: "2rem",
            color: "var(--forest)",
            lineHeight: 1.5,
            marginBottom: 16,
          }}
        >
          "Your presence is the greatest
          <br />
          gift we could ask for."
        </p>
        <div className="gold-divider" style={{ width: 80, margin: "0 auto" }} />
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer
      className="watercolor-bg"
      style={{ padding: "56px 20px 40px", textAlign: "center" }}
    >
      <div
        style={{
          position: "relative",
          display: "inline-block",
          marginBottom: 8,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -24,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <FloralCornerTL />
        </div>
      </div>
      <p
        className="font-script"
        style={{ fontSize: "2.4rem", color: "var(--forest)", marginBottom: 8 }}
      >
         Carlo & Leslie Ann
      </p>
      <HeartIcon
        style={
          {
            width: 16,
            color: "var(--gold)",
            margin: "0 auto 16px",
            display: "block",
          } as React.CSSProperties
        }
      />
      <p
        className="font-serif"
        style={{
          fontSize: "0.88rem",
          color: "var(--forest)",
          fontStyle: "italic",
          marginBottom: 6,
        }}
      >
        "Thank you for being part of our story."
      </p>
      <p
        style={{
          fontSize: "0.8rem",
          color: "var(--forest-mid)",
          fontFamily: "Lato",
        }}
      >
        See you on our special day!
      </p>
      <p
        style={{
          fontSize: "0.55rem",
          color: "rgba(61,90,54,0.45)",
          fontFamily: "Lato",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          marginTop: 32,
        }}
      >
        Tuesday · December 29 · 1:00 PM
      </p>
    </footer>
  )
}

// ── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [opened, setOpened] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const handleOpen = () => {
    setOpened(true)
    setTimeout(() => {
      document.getElementById("couple")?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  return (
    <div
      style={{
        maxWidth: 480,
        margin: "0 auto",
        position: "relative",
        minHeight: "100vh",
        background: "var(--cream)",
      }}
    >
      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero onOpen={handleOpen} />

      {opened && (
        <>
          <div id="couple">
            <CoupleSection />
          </div>
          <DetailsSection />
          <CountdownSection />
          <TimelineSection />
          <GallerySection />
          <DressCodeSection />
          <RSVPSection />
          <OrganizerSection />
          <MessageSection />
          <Footer />
        </>
      )}

      {/* Floating RSVP button */}
      {opened && (
        <button
          className="floating-rsvp btn-sage"
          onClick={() =>
            document
              .getElementById("rsvp")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          style={{ padding: "12px 20px", fontSize: "0.65rem" }}
        >
          RSVP Now
        </button>
      )}
    </div>
  )
}
