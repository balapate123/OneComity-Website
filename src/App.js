// Place in src/App.js after you upload your enhanced logo
import React from "react";
import logo from "./logo.svg"; // Replace with your enhanced logo file!

export default function App() {
  const features = [
    "Find people nearby who share your vibe (weed, wine, or water!)",
    "Instant chat & secure contact sharing with consent",
    "Live map to discover activities and connect safely",
    "See nearby weed and alcohol stores (Google Maps integration)",
    "Real-time updates, secure authentication, privacy-first"
  ];

  const faqs = [
    {
      q: "How do I get started?",
      a: "Just download the app (coming soon!), register, verify your age, pick your vibe, and see who’s nearby!"
    },
    {
      q: "Is my location and data private?",
      a: "Absolutely! १comity only shares your location when you allow, and never exposes your contact info without your consent."
    },
    {
      q: "Who can use १comity?",
      a: "Anyone 19+ who wants to meet up, chill, and connect—safely and spontaneously."
    },
    {
      q: "What platforms are supported?",
      a: "Android & iOS at launch. Web version coming soon."
    }
  ];

  return (
    <div style={{
      fontFamily: "system-ui, sans-serif",
      background: "linear-gradient(135deg, #232526 0%, #414345 100%)",
      color: "#fff",
      minHeight: "100vh",
      margin: 0,
      padding: 0
    }}>
      {/* HERO */}
      <section style={{
        textAlign: "center",
        padding: "3rem 1rem 2rem 1rem",
      }}>
        <img src={logo} alt="१comity Logo" style={{
          width: 500,
          height: 500,
          marginBottom: "1.5rem",
        }} />
        <h1 style={{ fontSize: "3.5rem", marginBottom: "0.5rem", letterSpacing: "1.5px", color: "#7ed957" }}>
          १comity
        </h1>
        <h2 style={{ fontWeight: 400, color: "#e8f9f3", fontSize: "1.7rem", marginBottom: "0.5rem" }}>
          Meet. Connect. Share. Nearby.
        </h2>
        <p style={{ marginTop: "1rem", fontSize: "1.15rem", color: "#aaa" }}>
          A new way to find your people and share your vibe. Privacy. Spontaneity. Community—redefined.
        </p>
      </section>

      {/* ABOUT */}
      <section style={{ maxWidth: 700, margin: "2rem auto", background: "#26282b", borderRadius: 16, padding: 32, boxShadow: "0 4px 24px #0002" }}>
        <h3 style={{ color: "#7ed957" }}>About १comity</h3>
        <p>
          १comity (pronounced “One Comity”) is a real-time social discovery app that helps you find, meet, and chat with people nearby who are up for a session—whether you’re into weed, wine, or just water! It’s about making authentic, spontaneous connections, safely and on your terms.
        </p>
      </section>

      {/* FEATURES */}
      <section style={{ maxWidth: 700, margin: "2rem auto", background: "#232526", borderRadius: 16, padding: 32, boxShadow: "0 4px 24px #0002" }}>
        <h3 style={{ color: "#7ed957" }}>Core Features</h3>
        <ul>
          {features.map((f, i) => (
            <li key={i} style={{ margin: "0.5rem 0" }}>• {f}</li>
          ))}
        </ul>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ maxWidth: 700, margin: "2rem auto", background: "#26282b", borderRadius: 16, padding: 32, boxShadow: "0 4px 24px #0002" }}>
        <h3 style={{ color: "#7ed957" }}>How It Works</h3>
        <ol>
          <li>Select your activity: weed, wine, or water.</li>
          <li>See who’s nearby and what they’re up for.</li>
          <li>Send an invite—chat, meet up, and vibe together.</li>
          <li>Share contacts only with mutual consent.</li>
        </ol>
      </section>

      {/* SAFETY */}
      <section style={{ maxWidth: 700, margin: "2rem auto", background: "#232526", borderRadius: 16, padding: 32, boxShadow: "0 4px 24px #0002" }}>
        <h3 style={{ color: "#7ed957" }}>Your Safety, Our Priority</h3>
        <ul>
          <li>No sharing your contact unless you agree.</li>
          <li>Location is only shared when you choose.</li>
          <li>Report and block features built-in.</li>
          <li>Data is encrypted, never sold.</li>
        </ul>
      </section>

      {/* FAQ */}
      <section style={{ maxWidth: 700, margin: "2rem auto", background: "#26282b", borderRadius: 16, padding: 32, boxShadow: "0 4px 24px #0002" }}>
        <h3 style={{ color: "#7ed957" }}>Frequently Asked Questions</h3>
        {faqs.map((faq, i) => (
          <div key={i} style={{ marginBottom: "1.5rem" }}>
            <div style={{ fontWeight: "bold", color: "#fff" }}>{faq.q}</div>
            <div style={{ color: "#aaa" }}>{faq.a}</div>
          </div>
        ))}
      </section>

      {/* SCREENSHOT / MOCKUP */}
      <section style={{ textAlign: "center", marginTop: 32 }}>
        <img
          src="https://placehold.co/300x600/7ed957/232526?text=App+Mockup"
          alt="App Mockup"
          style={{ borderRadius: 24, boxShadow: "0 4px 32px #0004", marginBottom: 16 }}
        />
        <div style={{ color: "#aaa" }}>App launching soon on iOS & Android!</div>
      </section>

      {/* CONTACT / SOCIAL */}
      <section style={{ textAlign: "center", margin: "3rem 0 2rem 0" }}>
        <a href="mailto:info@yourdomain.com" style={{
          background: "#7ed957",
          color: "#232526",
          padding: "0.75rem 2rem",
          borderRadius: 30,
          fontWeight: "bold",
          textDecoration: "none",
          fontSize: "1.1rem",
          boxShadow: "0 2px 12px #0002"
        }}>
          Contact Us
        </a>
        <div style={{ marginTop: 12, color: "#7ed957", fontSize: "1rem" }}>
          Follow us: <a href="#" style={{ color: "#7ed957" }}>Instagram</a> | <a href="#" style={{ color: "#7ed957" }}>X</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ textAlign: "center", color: "#888", fontSize: 14, marginBottom: 10 }}>
        &copy; {new Date().getFullYear()} १comity. All rights reserved.
      </footer>
    </div>
  );
}
