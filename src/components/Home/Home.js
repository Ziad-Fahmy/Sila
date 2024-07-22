import "./Home.css";

import HeroImg from "../../assets/main-hero.jpg";

import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="luxury-residence">
        <div className="home__container">
          <div className="home__content">
            <div className="home__overlay">

            
            <h1>Discover A Place You'll Love To Live</h1>
            <p className="info-color">
              Homie is a real estate solution that gives you the local scoop
              about homes. Search confidently with your trusted source of homes
              for sale.
            </p>
            <Link to = './paymentDetails'>
            <button className="button">Make An Enquiry</button>
            </Link>

            </div>
          </div>
          <div className="home__image">
            <div className="home__image-layout">

            <img src={HeroImg} alt="Luxury Residence" />
          </div>
            </div>
        </div>
      </section>
    </>
  );
}
// how can add map in react project

export default Home;
