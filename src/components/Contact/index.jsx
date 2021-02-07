import { h } from "preact";
import { useState } from "preact/hooks";

function Contact() {
  const [displayContact, setDisplayContact] = useState(false);

  return (
    <div className="contact" onClick={() => setDisplayContact(true)}>
      {!displayContact && (
        <span>Cliquez ici pour afficher mes coordonnées</span>
      )}
      {displayContact && (
        <div className="contact__content">
          <a href="mailto:ianisbrebion@gmail.com">ianisbrebion@gmail.com</a>
          <a href="tel:+33679399825">+33 6 79 39 98 25</a>
        </div>
      )}
    </div>
  );
}
export default Contact;
