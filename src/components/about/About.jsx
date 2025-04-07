import './about.css';

export default function About() {
  return (
      <>
      <div className="about-container">

      <div className="about-preview">
  <h1>About This App</h1>
  <p>
    Welcome to <strong>Weatherer</strong> — a free, simple weather-checking app built with React.
  </p>
  <p>
    You can search for the current weather in any city using the search bar on the homepage.
    The app connects to a live weather API and displays real-time information.
  </p>
  <p>
    This is a personal project created to practice React, routing, and modern UI design.
    It’s lightweight, responsive, and completely free to use.
  </p>
  <p style={{ fontSize: '14px', opacity: 0.8 }}>
    Built with 💻 React | 🎨 CSS | ☁️ Weather API
  </p>
</div>

      </div>
      </>
    );
}