import { Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Memory.css";
const Memory = (props) => {
  const history = useNavigate();
  const { _id, name, author, description,date,  image } = props.memory;//price,
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/memories/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/memories"));
  };

  return (
    <div className="card">
      <img src={image} alt={name} />
      <article>With:{author}</article>
      <h3>Location:{name}</h3>
      <h3>{date}</h3> 

      <p>{description}</p>
      <Button LinkComponent={Link} to={`/memories/${_id}`} sx={{ mt: "auto" }}>
        Update
      </Button>
      <Button color="error" onClick={deleteHandler} sx={{ mt: "auto" }}>
        Delete
      </Button>
    </div>
  );
};

export default Memory;
