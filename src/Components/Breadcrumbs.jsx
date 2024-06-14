import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathname = location.pathname.split("/").filter((x) => x);

  if (pathname.length === 0) {
    return null; // Don't render breadcrumbs on the home page
  }

  let breadcrumbPath = "";

  const fixBreadcrumbName = (value) => {
    let incoming = value.charAt(0).toUpperCase() + value.slice(1);
    return incoming.replace(/[^a-z][0-9]+/gi, "-").replace(/-+$/, "");
  };

  return (
    <nav>
      <ol className="list-reset flex ml-12 my-4">
        <li>
          <Link to="/" className="hover:underline">
            Home
          </Link>
          {pathname.length > 0 && <span className="mx-2">/</span>}
        </li>
        {pathname.map((value, index) => {
          breadcrumbPath += `/${value}`;
          const isLast = index === pathname.length - 1;
          if (value === "category" && pathname[index + 1]) {
            // Include category name along with the next segment
            return null; // Skip rendering category segment separately
          }
          return isLast ? (
            <li key={breadcrumbPath} className="text-gray-500">
              {fixBreadcrumbName(value)}
            </li>
          ) : (
            <li key={breadcrumbPath}>
              <Link to={breadcrumbPath} className="hover:underline">
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
