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
      <div
        className={
          (displayContact && `contact__toggle contact__toggle--enabled`) ||
          `contact__toggle `
        }
      >
        {(displayContact && ``) || `Cliquez ici pour afficher mes coordonnées`}
      </div>
      {displayContact && (
        <div className="contact__content">
          <div className="contact__location">
            <span>Paris, France</span>
          </div>
          <div className="contact__email">
            <a
              href={(displayContact && `mailto:ianisbrebion@gmail.com`) || `#`}
            >
              {(displayContact && `ianisbrebion@gmail.com`) ||
                `xxxxxxxxxxxx@xxxx.xxx`}
            </a>
          </div>
          <div className="contact__phone">
            <a href={(displayContact && `tel:+33679399825`) || `#`}>
              {(displayContact && `+33 6 79 39 98 25`) || `XX XX XX XX XX`}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
export default Contact;
