import { useState } from "react";
import "./search.css";
import { useQuery } from "@tanstack/react-query";
import { Navigate, useNavigate } from "react-router-dom";
export default function Search(props) {
  const navigate = useNavigate();

  const [product, setproduct] = useState("");

  const [show, setshow] = useState();

  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: async () => {
      const data = await fetch("https://fakestoreapi.com/products");
      return data.json();
    },
  });

  function HandleChange(value) {
    setproduct(value);
    const result = data.filter((datas) => {
      return value && datas && datas.title.toLowerCase().includes(value);
    });
    setshow(result);
    // console.log(show);
  }

  function submitHandler() {
    const found = data.find((element) => element.title === product);
    found && navigate("/product/" + found.title);
  
  }

  document.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
      submitHandler();
    }
  });

  return (
    <div>
      <div class="col-md-8">
        <div class="search position-relative">
          <i class="fa fa-search"></i>
          <input
            type="text"
            class="form-control"
            placeholder="Search Product..."
            autoFocus
            onChange={(e) => HandleChange(e.target.value)}
            value={product}
          ></input>
          <button
            class="btn btn-primary position-absolute top-3 end-8"
            onClick={submitHandler}
          >
            Search
          </button>
        </div>
      </div>
      <div class="list-group position-absolute">
        {show?.map((data, id) => {
          return (
            <button
              type="button"
              class="list-group-item list-group-item-action"
              key={id}
              onClick={(e) => {
                setproduct(data.title);
              }}
            >
              {data.title}
            </button>
          );
        })}
      </div>
    </div>
  );
}
