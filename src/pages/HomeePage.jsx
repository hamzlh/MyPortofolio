import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image';

const HomePage = () => {
  
  return (
    <>
        <div className="content-custom">
      <div className="container-custom">
        <div className="image-container">
        <Image src="src\assets\profile-asset.png" /* roundedCircle */  />
        </div>
        <div className="name-tag">
          <h2>
            Muhammad <b>Hamzah</b> Hafidzudin
          </h2>
          <div className="border-custom"></div>
          <h4>Application Developer</h4>
        </div>
        <div className="button-custom">
          <Link to="/about">
            <Button variant="dark">See more <i className="bi bi-chevron-double-right"></i></Button>
          </Link>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default HomePage;
