import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <ul>
          {" "}
          <li className="footer-content">
            <div className="social-links">
              <Link className="social-link" to="#">
                LinkedIn
              </Link>
              <Link className="social-link" to="#">
                Github
              </Link>
              <Link className="social-link" to="#">
                Leetcode
              </Link>
              <Link className="social-link" to="#">
                YouTube
              </Link>
            </div>
            <div className="copy-right">
              <p>
                Copyright &copy;{" "}
                <script>document.write(new Date().getFullYear())</script>{" "}
                Mahamed M. Abdirahman
              </p>
            </div>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
