import oneBedroom from "../../assets/oneBedroom.png";
import oneBedroomReception1 from "../../assets/oneBedroomReception1.png";
import oneBedroomReception2 from "../../assets/oneBedroomReception2.png";
import oneBedroomReception3 from "../../assets/oneBedroomReception3.png";
import oneBedroomReception4 from "../../assets/oneBedroomReception4.png";
import oneBedroomReception5 from "../../assets/oneBedroomReception5.png";
import oneBedroomReception6 from "../../assets/oneBedroomReception6.png";
import oneBedroomReception7 from "../../assets/oneBedroomReception7.png";
import oneBedroomReception8 from "../../assets/oneBedroomReception8.png";
import oneBedroomReception9 from "../../assets/oneBedroomReception9.png";
import mainBathroom1 from "../../assets/mainBathroom1.png";
import mainBathroom2 from "../../assets/mainBathroom2.png";
import mainBathroom3 from "../../assets/mainBathroom3.png";
import mainBathroom4 from "../../assets/mainBathroom4.png";
import masterBedroom1 from "../../assets/masterBedroom1.png";
import masterBedroom2 from "../../assets/masterBedroom2.png";
import masterBedroom3 from "../../assets/masterBedroom3.png";
import masterBedroom4 from "../../assets/masterBedroom4.png";
import masterBedroom5 from "../../assets/masterBedroom5.png";
import masterBedroom6 from "../../assets/masterBedroom6.png";
import ExampleDoc from "../../assets/oneBedroom.pdf";
function OneBedroom() {
  return (
    <>
      {/* one Bedroom */}

      <h1 className="PaymentUnitInfo__h1 secondary-color flex__center">
        One Bedroom
      </h1>

      {/* carousel slider */}

      <div
        id="carouselExample"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner carusel__img">
          <div className="carousel-item active" data-bs-interval="3500">
            <img src={oneBedroom} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img
              src={oneBedroomReception1}
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={oneBedroomReception2}
              className="d-block w-100"
              alt="..."
            />
          </div>

          <div className="carousel-item">
            <img
              src={oneBedroomReception3}
              className="d-block w-100"
              alt="..."
            />
          </div>

          <div className="carousel-item">
            <img
              src={oneBedroomReception4}
              className="d-block w-100"
              alt="..."
            />
          </div>

          <div className="carousel-item">
            <img
              src={oneBedroomReception5}
              className="d-block w-100"
              alt="..."
            />
          </div>

          <div className="carousel-item">
            <img
              src={oneBedroomReception6}
              className="d-block w-100"
              alt="..."
            />
          </div>

          <div className="carousel-item">
            <img
              src={oneBedroomReception7}
              className="d-block w-100"
              alt="..."
            />
          </div>

          <div className="carousel-item">
            <img
              src={oneBedroomReception8}
              className="d-block w-100"
              alt="..."
            />
          </div>

          <div className="carousel-item">
            <img
              src={oneBedroomReception9}
              className="d-block w-100"
              alt="..."
            />
          </div>

          <div className="carousel-item">
            <img src={mainBathroom1} className="d-block w-100" alt="..." />
          </div>

          <div className="carousel-item">
            <img src={mainBathroom2} className="d-block w-100" alt="..." />
          </div>

          <div className="carousel-item">
            <img src={mainBathroom3} className="d-block w-100" alt="..." />
          </div>

          <div className="carousel-item">
            <img src={mainBathroom4} className="d-block w-100" alt="..." />
          </div>

          <div className="carousel-item">
            <img src={masterBedroom1} className="d-block w-100" alt="..." />
          </div>

          <div className="carousel-item">
            <img src={masterBedroom2} className="d-block w-100" alt="..." />
          </div>

          <div className="carousel-item">
            <img src={masterBedroom3} className="d-block w-100" alt="..." />
          </div>

          <div className="carousel-item">
            <img src={masterBedroom4} className="d-block w-100" alt="..." />
          </div>

          <div className="carousel-item">
            <img src={masterBedroom5} className="d-block w-100" alt="..." />
          </div>

          <div className="carousel-item">
            <img src={masterBedroom6} className="d-block w-100" alt="..." />
          </div>
        </div>
        <i
          className="bi bi-chevron-right carousel-control-prev carousel__color"
          type="button"
          data-bs-target="#carouselExample "
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </i>

        <button
          className="carousel-control-next carousel__color"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* dowload file */}
      <div className="OneBedroom__downloadFile">
        <a
          className="flex__center"
          href={ExampleDoc}
          download="Sila One Bedroom"
          target="_blank"
        >
         <button type="button" className="btn btn-primary Downolad-btn">Download File</button>
        </a>
      </div>
      {/* info */}
      <div className="PaymentUnitInfo__oneBedroom-info ">
        <h3 className="flex__center secondary-color">Info</h3>
        <div className="info-grid">
          <div className="info-item">
            <span>Unit Area:</span> 75 Square Meter
          </div>
          <div className="info-item">
            <span>Bedrooms:</span> 1 Bedroom
          </div>
          <div className="info-item">
            <span>Price:</span> 28,000 For Meter
          </div>
          <div className="info-item">
            <span>Payment Method:</span> Cash / Installment
          </div>
          <div className="info-item">
            <span>Unit Cash Price:</span> 2,100,000 EGP
          </div>
          <div className="info-item">
            <span>Unit Installment Price:</span> 700,000 EGP / Year
          </div>
        </div>
      </div>
    </>
  );
}

export default OneBedroom;
