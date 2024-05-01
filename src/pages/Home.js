import { Link } from "react-router-dom";
import reactLogo from "../images/reactLogo.png";
import firebase from "../images/firebase.svg";
import css from "../images/css.png";

const Home = () => {
  return (
    <div id="page-container">
      <div className="square first-square">
        <h1>Welcome To My Personal Website!</h1>
      </div>
      <div className="square second-square">
        <h1>This website was built using</h1>
        <div className="logo-div">
          <img src={reactLogo} alt="" className="reactLogo" />
          <img src={firebase} alt="" className="firebase" />
          <img src={css} alt="" className="css" />
        </div>
      </div>
      <div id="content-wrap"></div>
      <footer id="footer">
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
    </div>
  );
};

export default Home;
