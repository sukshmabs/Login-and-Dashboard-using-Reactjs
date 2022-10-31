import { Link, useMatch, useResolvedPath } from "react-router-dom";
import Table from "../components/Table";

const Dashboard = () => {
  return (
    <>
      <nav className="nav">
        <Link to="/" className="site-title">
          Dashboard
        </Link>
        <ul>
          <CustomLink to="/login">Logout</CustomLink>
        </ul>
      </nav>
      <Table />
    </>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <>
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    </>
  );
}

export default Dashboard;
