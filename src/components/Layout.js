import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul className="layout">
          <div>
            <li>
              <Link className="link" to="/">
                Home
              </Link>
            </li>
          </div>

          <div>
            <li>
              <Link className="link" to="/experience">
                Experience
              </Link>
            </li>
            <li>
              <Link className="link" to="/education">
                Education
              </Link>
            </li>
            <li>
              <Link className="link" to="/projects">
                Projects
              </Link>
            </li>
          </div>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
