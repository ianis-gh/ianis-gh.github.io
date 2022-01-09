import { h, Component } from "preact";
import { config } from "../../config.js";

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      display: true,
    };
  }

  componentDidMount() {
    if (typeof window !== "undefined") {
      let scrollPosition = window.pageYOffset;
      let previousScrollPosition = window.pageYOffset;
      let maxScrollPosition = window.pageYOffset;
      let minScrollPosition = window.pageYOffset;

      window.onscroll = () => {
        scrollPosition = window.pageYOffset;

        if (scrollPosition < 100) {
          this.setState({ display: true });
        } else {
          if (previousScrollPosition <= scrollPosition) {
            if (scrollPosition > minScrollPosition + 50) {
              this.setState({ display: false });
            }
            maxScrollPosition = window.pageYOffset;
          } else {
            if (scrollPosition < maxScrollPosition - 50) {
              this.setState({ display: true });
            }
            minScrollPosition = window.pageYOffset;
          }
        }

        previousScrollPosition = window.pageYOffset;
      };
    }
  }

  render() {
    return (
      <div className="nav__container">
        <nav className={`nav ${(!this.state.display && "nav--hide") || ""}`}>
          <a href="/">Ianis Brébion</a>
          <a href="/contact/">Contact</a>
          {config.blogEnable && <a href="/blog/">Blog</a>}
          <a href="/about/">Présentation</a>
        </nav>
      </div>
    );
  }
}

export default Nav;
