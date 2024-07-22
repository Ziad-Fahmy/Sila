import "./Units.css";
import Card_data from "../../Card-data";
import { Link } from "react-router-dom";

function Units() {
  return (
    <>
      <p className="center-blue-p" id="Units">
        AVAILABLE UNITS
      </p>
      <h1 className="center-main-add">
        We Bring Dream Homes <br></br>To Reality
      </h1>

      <section className="Units__container flex__center">
        {Card_data.map((data) => {
          return (
            <div className="Units__card" key={data.id}>
              <div className="Units__card-img">
                <img src={data.mainImg} alt="mainIMG" />
              </div>

              <div className="Units__card-title secondary-color">
                <h4>{data.title}</h4>
              </div>
              <hr></hr>

              <div className="Units__card-size flex__center">
                <div className="Units__card-size-svg flex__center">
                  <svg width="30" height="30">
                    <rect
                      x="5"
                      y="5"
                      width="7.5"
                      height="7.5"
                      fill="#0061e0"
                      rx="2"
                      ry="2"
                    />{" "}
                    <rect
                      x="14"
                      y="5"
                      width="7.5"
                      height="7.5"
                      fill="#0061e0"
                      rx="2"
                      ry="2"
                    />{" "}
                    <rect
                      x="14"
                      y="14"
                      width="7.5"
                      height="7.5"
                      fill="#0061e0"
                      rx="2"
                      ry="2"
                    />{" "}
                    <rect
                      x="5"
                      y="14"
                      width="7.5"
                      height="7.5"
                      fill="#0061e0"
                      rx="2"
                      ry="2"
                    />{" "}
                  </svg>
                </div>
                <h6 className="Units__card-size-p info-color Units__card-h6">
                  {data.sizeUnit}
                </h6>
              </div>
              <div className="Units__card-details flex__center">
                <div className="Unist__card-details-gp ">
                  <div className="Units__card-bedroom secondary-color flex__center">
                    <div className="Units__card-bedroom-svg flex__center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        id="Bed"
                      >
                        <path fill="none" d="M0 0h48v48H0z"></path>
                        <path
                          d="M14 26c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6zm24-12H22v14H6V10H2v30h4v-6h36v6h4V22c0-4.42-3.58-8-8-8z"
                          fill="#0061e0"
                          className="color000000 svgShape"
                        ></path>
                      </svg>
                    </div>
                    <h6 className="info-color Units__card-h6 ">
                      {data.bedroomNumber} Bedroom
                    </h6>
                  </div>
                  <div className="Units__card-bathroom flex__center">
                    <div className="Units__card-bathroom-svg flex__center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fillRule="evenodd"
                        strokeLinejoin="round"
                        strokeMiterlimit="2"
                        clipRule="evenodd"
                        viewBox="0 0 24 24"
                        id="Bath"
                      >
                        <path
                          d="M22,10c0,-0.552 -0.448,-1 -1,-1l-18,0c-0.552,0 -1,0.448 -1,1l-0,3.5c-0,1.326 0.527,2.598 1.464,3.536c0.938,0.937 2.21,1.464 3.536,1.464c2.977,0 7.023,0 10,0c1.326,0 2.598,-0.527 3.536,-1.464c0.937,-0.938 1.464,-2.21 1.464,-3.536c0,-1.788 0,-3.5 0,-3.5Z"
                          fill="#0061e0"
                          className="color000000 svgShape"
                        ></path>
                        <path
                          d="M22,9l-20,0c-0.552,0 -1,0.448 -1,1c0,0.552 0.448,1 1,1l20,0c0.552,0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1Z"
                          fill="#0061e0"
                          className="color000000 svgShape"
                        ></path>
                        <path
                          d="M6.949 6.999l.051.001.043-.005c.191-.025.957-.176.957-.997 0-1.656-1.342-2.998-2.998-2.998l-.002 0c-1.657 0-3 1.343-3 3l0 4c0 .552.448 1 1 1 .552 0 1-.448 1-1l0-4c0-.552.448-1 1-1 0 0 .002 0 .002 0 .545 0 .988.437.998.979 0-.025.002-.049.004-.07-.003.03-.004.06-.004.091 0 .535.42.972.949.999zM17.072 17.871l1 2.5c.204.513.787.762 1.299.557.513-.204.762-.787.557-1.299l-1-2.5c-.204-.513-.787-.762-1.299-.557-.513.204-.762.787-.557 1.299zM5.072 17.129l-1 2.5c-.205.512.044 1.095.557 1.299.512.205 1.095-.044 1.299-.557l1-2.5c.205-.512-.044-1.095-.557-1.299-.512-.205-1.095.044-1.299.557z"
                          fill="#0061e0"
                          className="color000000 svgShape"
                        ></path>
                      </svg>
                    </div>
                    <h6 className="info-color Units__card-h6">
                      {data.bathroomsNumber} Bathrooms
                    </h6>
                  </div>
                </div>
              </div>
              <button className="Units__card-button">
                <Link to="/paymentDetails" className="Units__card-button">
                  <h5>More details</h5>
                </Link>
              </button>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default Units;
