import React from "react";
import "./MyDevs.css";

const MyDevs = () => {
  return (
    <section id="my-develops" className="m-0 p-5">
      <h2 className="col-12 m-0 p-0">My Develops</h2>
      <div id="carouselMydevs" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div id="GadPets" class="carousel-item active p-2 d-flex flex-row projectCard">
            <div id="GadpetsImg" className="col-6 p-2 logo"></div>
            <div className="col-6 p-2">
              <h3>Landing Page</h3>
              <h4>Description</h4>
              <p>
                Landing Page for a Pet Shop with the intention to put on practice concepts of HTML5
                and CSS3.
              </p>
              <h4>Languages</h4>
              <div className="languages m-1">
                {/* <img src={htmlLogo} />
                <img src={cssLogo} /> */}
              </div>
              <div className="buttons">
                <button type="button" class="btn btn-outline-success btn-sm m-1">
                  U-Camp Badge
                </button>
                <button type="button" class="btn btn-outline-info btn-sm m-1">
                  View Demo
                </button>
                <button type="button" class="btn btn-outline-secondary btn-sm m-1">
                  View Code
                </button>
              </div>
            </div>
          </div>
          <div class="carousel-item d-flex flex-row projectCard">
            <div className="col-6 p-2">
              <p>Aqui va el logo2</p>
            </div>
          </div>
          <div class="carousel-item">
            <div className="col-6 p-2">
              <p>Aqui va el logo3</p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselMydevs"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselMydevs"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default MyDevs;
