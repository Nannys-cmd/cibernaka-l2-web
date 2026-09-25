import "../styles/Navigation.css";

function Navigation() {
  return (
    <div className="l2-stream-wrapper">

      <a
        href="https://cibernakastream.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="l2-stream-button"
      >

        <span className="l2-stream-icon">
          🎮
        </span>

        <span className="l2-stream-text">
          CiberNaka Stream
        </span>

      </a>

    </div>
  );
}

export default Navigation;