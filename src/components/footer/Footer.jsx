import { Link } from "react-router";
import './footer.css'

export default function Footer() {
  return (
      <>
      <div className="footer-container">

        <div className="quick-links">
            <h3>Quick links</h3>
            <Link to={'/home'}>Home</Link>
            <Link to={'/weather'}>Weather</Link>
            <Link to={'/about'}>About us</Link>
            <Link to={'/contacts'}>Contacts</Link>
        </div>

        <div className="Contacts">
            <h3>Contacts</h3>
            <p><strong>Email: </strong> shefket.must@gmail.com </p>
            <p><strong>Phone: </strong>+359 89 321 12 23 </p>
            <p><strong>Address: </strong>78 Aleksander Malinov, Sofia, Bulgaria</p>
        </div>

            <div className="social-icons">
            <h3>Follow Us</h3>
              <a href="https://facebook.com" target="self"><i className="fa fa-facebook"></i></a>
              <a href="https://x.com" target="self"><i className="fa fa-twitter"></i></a>
              <a href="https://instagram.com" target="self"><i className="fa fa-instagram"></i></a>
            </div>
        
          </div>
        <div className="footer-bottom">
          <p>© 2025 Bookstore. All Rights Reserved.</p>
        </div>
        
      </>
    );
}