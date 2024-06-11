import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathname = location.pathname.split("/").filter((x) => x);

  return (
    <nav>
      <ol className="list-reset flex">
        <li>
          <Link to="/" className="hover:underline">
            Home
          </Link>
          {pathname.length > 0 && <span className="mx-2">/</span>}
        </li>
        {pathname.map((value, index) => {
          const to = `/${pathname.slice(0, index + 1).join("/")}`;
          const isLast = index === pathname.length - 1;

          return isLast ? (
            <li key={to} className="text-gray-500">
              {value.charAt(0).toUpperCase() + value.slice(1)}
            </li>
          ) : (
            <li key={to}>
              <Link to={to} className="hover:underline">
                {value.charAt(0).toUpperCase() + value.slice(1)}
              </Link>
              <span className="mx-2">/</span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
