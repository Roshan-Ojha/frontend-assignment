
import { useQuery } from "@tanstack/react-query";


export default function Homepage() {
    console.log("hello")
  const { isLoading, error, data } = useQuery({
    queryFn: async () => {
      const data = await fetch("https://fakestoreapi.com/products");
      return data.json();
    },
  });

  if (isLoading) {
    console.log("Loading");
  }
  if (data) {
    console.log(data);
  }

  return (
    <div>
      <nav className="navbar bg-dark">
        <div className="container-fluid">
          <div className="navbar-brand text-light font-monospace fs-3">
            Online Store
          </div>
          <div className="d-flex">
            <button class="btn btn-outline-success ms-25" type="submit">
              Search
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
