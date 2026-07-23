import "../styles/Footer.css";

/*
  Footer Component
  
  Displays footer information at the bottom of every page.
  Provides copyright information and branding consistency.
  
  This is a simple, stateless component that requires no props.
*/

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {currentYear} MyCookBook. All rights reserved.</p>
        <p>Happy cooking! 🍳</p>
      </div>
    </footer>
  );
}
