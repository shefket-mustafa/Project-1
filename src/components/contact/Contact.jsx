import './contact.css';

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-form">
        <h1>Contact Us</h1>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Your name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Your email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" placeholder="Your message" rows="5" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}   