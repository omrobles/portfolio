import React from "react";
import "./MyDevs.css";

import htmlLogo from "../media/HTML5.png";
import cssLogo from "../media/CSS3.png";
import jsLogo from "../media/Javascript.png";
import reactLogo from "../media/react2.png";
import nodeLogo from "../media/nodejs.png";
import mongodbLogo from "../media/mongodb.png";
import bootstrapLogo from "../media/bootstrap.png";

const MyDevs = () => {
  return (
    <section id="my-develops" className="m-0 mb-4 p-5">
      <h2 className="col-12 m-0 p-0 mb-3">My Develops</h2>

      <div id="carouselMydevs" class="carousel slide" data-bs-ride="true">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselMydevs"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselMydevs"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselMydevs"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselMydevs"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselMydevs"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
        </div>
        <div class="carousel-inner">
          <div id="GadPets" class="carousel-item active p-2 d-flex flex-row projectCard">
            <div id="GadpetsImg" className="col-6 p-2 imgProject"></div>
            <div className="col-6 ps-4 infoProj">
              <h3 className="mb-1">GadPets</h3>
              <h5>Description</h5>
              <p>
                Landing Page for academic purpose for a Pet Shop with the intention to put on
                practice concepts of HTML5 and CSS3.
              </p>
              <h5>Languages</h5>
              <div className="languages m-1">
                <img src={htmlLogo} alt="HTML5" />
                <img src={cssLogo} alt="CSS3" />
              </div>
              <div className="buttons">
                <a
                  href="https://www.credly.com/badges/b09c55c5-83ed-4bd2-9a9b-fa06e69cb0b9/public_url"
                  target="_blank"
                >
                  <button type="button" class="btn btn-success btn-sm m-1">
                    U-Camp Badge
                  </button>
                </a>
                <a href="https://omrobles.github.io/gadpets.github.io/" target="_blank">
                  <button type="button" class="btn btn-info btn-sm m-1">
                    View Demo
                  </button>
                </a>
                <a href="https://github.com/omrobles/gadpets.github.io.git" target="_blank">
                  <button type="button" class="btn btn-secondary btn-sm m-1">
                    GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div id="Task-It" class=" p-2 d-flex flex-row projectCard">
              <div id="TaskitImg" className="col-6 p-2 imgProject"></div>
              <div className="col-6 ps-4 infoProj">
                <h3 className="mb-1">Task-It</h3>
                <h5>Description</h5>
                <p>
                  CRUD application for academic purpose for the management of tasks. Usage of HTML5
                  for structure, CSS3 for styling and JavaScript for logic. Use of Local Storage of
                  the browser to have a following of the tasks.
                </p>
                <h5>Languages</h5>
                <div className="languages m-1">
                  <img src={htmlLogo} alt="HTML5" />
                  <img src={cssLogo} alt="CSS3" />
                  <img src={jsLogo} alt="Javascript" />
                </div>
                <div className="buttons">
                  <a
                    href="https://www.credly.com/badges/89c8d641-2d96-400f-9a03-fcdec752b86f/public_url"
                    target="_blank"
                  >
                    <button type="button" class="btn btn-success btn-sm m-1">
                      U-Camp Badge
                    </button>
                  </a>
                  <a href="https://omrobles.github.io/task-it.github.io/" target="_blank">
                    <button type="button" class="btn btn-info btn-sm m-1">
                      View Demo
                    </button>
                  </a>
                  <a href="https://github.com/omrobles/task-it.github.io.git" target="_blank">
                    <button type="button" class="btn btn-secondary btn-sm m-1">
                      GitHub
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div id="PokemonGuide" class=" p-2 d-flex flex-row projectCard">
              <div id="PokeImg" className="col-6 p-2 imgProject"></div>
              <div className="col-6 ps-4 infoProj">
                <h3 className="mb-1">Pokemon Guide</h3>
                <h5>Description</h5>
                <p>
                  Application for academic purpose with the objective to put on practice API's and
                  ChartJS. Pokemon Guide deliver to the ser the information of the first 150
                  pokemon.
                </p>
                <h5>Languages</h5>
                <div className="languages m-1">
                  <img src={htmlLogo} alt="HTML5" />
                  <img src={cssLogo} alt="CSS3" />
                  <img src={jsLogo} alt="Javascript" />
                </div>
                <div className="buttons">
                  <a
                    href="https://www.credly.com/badges/c5e4e9fc-57cd-4b25-8df8-2527399ad988/public_url"
                    target="_blank"
                  >
                    <button type="button" class="btn btn-success btn-sm m-1">
                      U-Camp Badge
                    </button>
                  </a>
                  <a href="https://omrobles.github.io/pokemonguide.github.io/" target="_blank">
                    <button type="button" class="btn btn-info btn-sm m-1">
                      View Demo
                    </button>
                  </a>
                  <a href="https://github.com/omrobles/pokemonguide.github.io" target="_blank">
                    <button type="button" class="btn btn-secondary btn-sm m-1">
                      GitHub
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div id="Zenhotel" class=" p-2 d-flex flex-row projectCard">
              <div id="zenImg" className="col-6 p-2 imgProject"></div>
              <div className="col-6 ps-4 infoProj">
                <h3 className="mb-1">Zen Hotel</h3>
                <h5>Description</h5>
                <p>
                  Application for academic purpose with the objective to put on practice the usage
                  of React and Firebase as database. Applying CRUD to let the user make reservations
                  and business can handle the information.
                </p>
                <h5>Languages</h5>
                <div className="languages m-1">
                  <img src={htmlLogo} alt="HTML5" />
                  <img src={cssLogo} alt="CSS3" />
                  <img src={bootstrapLogo} alt="Bootstrap" />
                  <img src={jsLogo} alt="Javascript" />
                  <img src={reactLogo} alt="React" />
                </div>
                <div className="buttons">
                  <a
                    href="https://www.credly.com/badges/5215df52-6a14-49a7-91e3-0222fd9f6625/public_url"
                    target="_blank"
                  >
                    <button type="button" class="btn btn-success btn-sm m-1">
                      U-Camp Badge
                    </button>
                  </a>
                  <a href="https://omrobles.github.io/ucamp_pr4_hotel_app/" target="_blank">
                    <button type="button" class="btn btn-info btn-sm m-1">
                      View Demo
                    </button>
                  </a>
                  <a href="https://github.com/omrobles/ucamp_pr4_hotel_app.git" target="_blank">
                    <button type="button" class="btn btn-secondary btn-sm m-1">
                      GitHub
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div id="Cochinito" class=" p-2 d-flex flex-row projectCard">
              <div id="cochinitoImg" className="col-6 p-2 imgProject"></div>
              <div className="col-6 ps-4 infoProj">
                <h3 className="mb-1">Cochinito Lector</h3>
                <h5>Description</h5>
                <p>
                  Full Stack application for academic purpose with the objective to create an
                  eCommerce. Focus on financial books Cochinito Lector offer the register of users
                  and selection of books. Paypal Checkout was used to complete purchasing process.
                  All the information of users and books is stored in MongoDB and call with an
                  endpoint using NodeJS. React was used for the frontend of the site.
                </p>
                <h5>Languages</h5>
                <div className="languages m-1">
                  <img src={htmlLogo} alt="HTML5" />
                  <img src={cssLogo} alt="CSS3" />
                  <img src={jsLogo} alt="Javascript" />
                  <img src={reactLogo} alt="React" />
                  <img src={nodeLogo} alt="NodeJS" />
                  <img src={mongodbLogo} alt="MongoDB" />
                </div>
                <div className="buttons">
                  {/* <a
                    href="https://www.credly.com/badges/5215df52-6a14-49a7-91e3-0222fd9f6625/public_url"
                    target="_blank"
                  > */}
                  <button type="button" class="btn btn-success btn-sm m-1" disabled>
                    U-Camp Badge
                  </button>
                  {/* </a> */}
                  <a
                    href="https://62b50c496a33b30c3fd3525c--clinquant-panda-4c945c.netlify.app/"
                    target="_blank"
                  >
                    <button type="button" class="btn btn-info btn-sm m-1">
                      View Demo
                    </button>
                  </a>
                  <a href="https://github.com/omrobles/eCommerce-frontend.git" target="_blank">
                    <button type="button" class="btn btn-secondary btn-sm m-1">
                      GitHub Frontend
                    </button>
                  </a>
                  <a href="https://github.com/omrobles/eCommerce-backend.git" target="_blank">
                    <button type="button" class="btn btn-secondary btn-sm m-1">
                      GitHub Backend
                    </button>
                  </a>
                </div>
              </div>
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
