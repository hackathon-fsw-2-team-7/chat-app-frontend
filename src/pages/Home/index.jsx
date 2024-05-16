import { Button } from "react-bootstrap";
import { logout } from "../../redux/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      <Button
        onClick={() => {
          dispatch(logout());
          navigate("/login");
        }}
      >
        Logout
      </Button>
      <div>HomePage</div>
    </>
  );
};

export default HomePage;
