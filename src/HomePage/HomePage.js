import { useQuery } from "@tanstack/react-query";
import Show from "./Show";
import { Link } from "react-router-dom";

export default function Homepage() {
  console.log("hello");
  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: async () => {
      const data = await fetch("https://fakestoreapi.com/products");
      return data.json();
    },
  });

  if (isLoading) {
    console.log("Loading");
  }
  if (data) {
    // console.log(data);
  }

  return (
    <div>
      <nav className="navbar bg-dark position-sticky top-0 z-1">
        <div className="container-fluid">
          <div className="navbar-brand text-light font-monospace fs-3">
            Online Store
          </div>
          <div className="d-flex">
            <Link to="/search">
              <button className="btn btn-outline-success ms-25" type="submit">
                Search
              </button>
            </Link>
          </div>
        </div>
      </nav>
      <div
        className="d-flex flex-wrap justify-content-evenly align-content-evenly"
        style={{ width: "1500px" }}
      >
        {data &&
          data.map((data) => {
            return (
              <Show
                name={data.title}
                image={data.image}
                price={data.price}
              ></Show>
            );
          })}
      </div>
    </div>
  );
}

