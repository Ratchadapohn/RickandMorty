import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-img">
        <img
          src={require("../../Frontend_Assets/footer.png")}
          alt="Footer Background"
        />
      </div>
      <ul className="footer-link">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-socail-icon">
        <div className="footer-icon-container">
          <img
            src={require("../../Frontend_Assets/instagram_icon.png")}
            alt="Instagram"
          />
        </div>
        <div className="footer-icon-container">
          <img
            src={require("../../Frontend_Assets/pintester_icon.png")}
            alt="Pinterest"
          />
        </div>
        <div className="footer-icon-container">
          <img
            src={require("../../Frontend_Assets/whatsapp_icon.png")}
            alt="WhatsApp"
          />
        </div>
      </div>

      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
