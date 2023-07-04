import { useParams } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";

export default function Display() {
  const param = useParams();
  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: async () => {
      const data = await fetch("https://fakestoreapi.com/products");
      return data.json();
    },
  });

  const found = data?.find((element) => element.title === param.productid);
  console.log(found)
  return (
    <div>
    <div class="card mb-3" style={{width:"540px"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={found?.image} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{found?.title}</h5>
        <p class="card-text">T{found?.description}</p>
        <p class="card-text"><small class="text-body-secondary">${found?.price}</small></p>
      </div>
    </div>
  </div>
</div>
    </div>
  );
}
