import { useNavigate } from "react-router-dom";

export default function Show(props) {
  const naviagate = useNavigate();
  return (
    <div style={{ margin: "20px 20px 10px 20px" }}>
      <div
        className="card"
        style={{ width: "300px", height: "400px" }}
        onClick={() => naviagate("/product/" + props.name)}
      >
        <img
          src={props.image}
          className="rounded mx-auto d-block"
          alt="..."
          style={{ width: "200px", height: "200px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">${props.price}</p>
          <a href="#" className="btn btn-primary">
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
}
