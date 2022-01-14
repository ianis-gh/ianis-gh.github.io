import { h } from "preact";
import { useState } from "preact/hooks";
import Cookies from "js-cookie";

function Contact() {
  const [displayContact, setDisplayContact] = useState(
    !!Cookies.get("contact") ?? false
  );

  const displayInformations = () => {
    Cookies.set("contact", "1");
    setDisplayContact(true);
  };

  return (
    <div className="contact" onClick={() => displayInformations()}>
      {!displayContact && (
        <span>Cliquez ici pour afficher mes coordonnées</span>
      )}
      {displayContact && (
        <div className="contact__content">
          <div>
            <a href="mailto:ianisbrebion@gmail.com">ianisbrebion@gmail.com</a>
          </div>
          <div>
            <a href="tel:+33679399825">+33 6 79 39 98 25</a>
          </div>
        </div>
      )}
    </div>
  );
}
export default Contact;
