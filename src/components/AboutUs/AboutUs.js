import "./AboutUs.css";

import AboutUs_img from "../../assets/aboutUs.jpg";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <>
      <section className="about-us">
        <div className="aboutUs__container">
          <div className="image-aboutUs__container">
            <img src={AboutUs_img} alt="Modern Villa" />
          </div>
          <div className="aboutUs__content-container">
            <div className="aboutUs__content">
              <h2>We're On A Mission To ChangeView Of RealEstate Field.</h2>

              <p>
                At our company, we strive to revolutionize the real estate
                industry by offering innovative solutions and exceptional
                customer service. Our goal is to make the process of buying,
                selling, or renting a property as seamless and stress-free as
                possible for our clients.
              </p>
              <div className="features">
                <div className="feature">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 main-color "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
                    />
                  </svg>

                  <h3>Modern Villa</h3>
                  <p>
                    Clean lines and glass walls make this villa bright and airy.
                  </p>
                </div>
                <div className="feature">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 main-color "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>

                  <h3>Secure Payment</h3>
                  <p>Focuses on security and peace of mind.</p>
                </div>
              </div>
              <Link to="./paymentDetails">
                <button className="button">Learn More</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
