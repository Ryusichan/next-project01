import React from "react";

const ScreenShot = () => {
  const screenshot1 = "/screenshot-1.jpg";
  const screenshot2 = "/screenshot-2.jpg";
  const screenshot3 = "/screenshot-3.jpg";
  const screenshot4 = "/screenshot-4.jpg";
  const screenshot5 = "/screenshot-5.jpg";
  const screenshot6 = "/screenshot-6.jpg";
  const screenshot7 = "/screenshot-7.jpg";
  const screenshot8 = "/screenshot-8.jpg";
  const screenshot9 = "/screenshot-9.jpg";
  const screenshot10 = "/screenshot-10.jpg";

  return (
    <div id="screens" className="slider">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* Image Slider */}
            <div className="slider-container">
              <div className="swiper-container image-slider">
                <div className="swiper-wrapper">
                  {/* Slide */}
                  <div className="swiper-slide">
                    <a
                      href="src/res/images/screenshot-1.jpg"
                      className="popup-link"
                      data-effect="fadeIn"
                    >
                      <img
                        className="img-fluid"
                        src={screenshot1}
                        alt="alternative"
                      />
                    </a>
                  </div>
                  {/* end of slide */}

                  {/* Slide */}
                  <div className="swiper-slide">
                    <a
                      href={screenshot2}
                      className="popup-link"
                      data-effect="fadeIn"
                    >
                      <img
                        className="img-fluid"
                        src={screenshot2}
                        alt="alternative"
                      />
                    </a>
                  </div>
                  {/* end of slide */}

                  {/* Slide */}
                  <div className="swiper-slide">
                    <a
                      href={screenshot3}
                      className="popup-link"
                      data-effect="fadeIn"
                    >
                      <img
                        className="img-fluid"
                        src={screenshot3}
                        alt="alternative"
                      />
                    </a>
                  </div>
                  {/* end of slide */}

                  {/* Slide */}
                  <div className="swiper-slide">
                    <a
                      href={screenshot4}
                      className="popup-link"
                      data-effect="fadeIn"
                    >
                      <img
                        className="img-fluid"
                        src={screenshot4}
                        alt="alternative"
                      />
                    </a>
                  </div>
                  {/* end of slide */}

                  {/* Slide */}
                  <div className="swiper-slide">
                    <a
                      href={screenshot5}
                      className="popup-link"
                      data-effect="fadeIn"
                    >
                      <img
                        className="img-fluid"
                        src={screenshot5}
                        alt="alternative"
                      />
                    </a>
                  </div>
                  {/* end of slide */}

                  {/* Slide */}
                  <div className="swiper-slide">
                    <a
                      href={screenshot1}
                      className="popup-link"
                      data-effect="fadeIn"
                    >
                      <img
                        className="img-fluid"
                        src={screenshot6}
                        alt="alternative"
                      />
                    </a>
                  </div>
                  {/* end of slide */}

                  {/* Slide */}
                  <div className="swiper-slide">
                    <a
                      href="images/screenshot-2.jpg"
                      className="popup-link"
                      data-effect="fadeIn"
                    >
                      <img
                        className="img-fluid"
                        src={screenshot7}
                        alt="alternative"
                      />
                    </a>
                  </div>
                  {/* end of slide */}

                  {/* Slide */}
                  <div className="swiper-slide">
                    <a
                      href={screenshot3}
                      className="popup-link"
                      data-effect="fadeIn"
                    >
                      <img
                        className="img-fluid"
                        src={screenshot8}
                        alt="alternative"
                      />
                    </a>
                  </div>
                  {/* end of slide */}

                  {/* Slide */}
                  <div className="swiper-slide">
                    <a
                      href={screenshot4}
                      className="popup-link"
                      data-effect="fadeIn"
                    >
                      <img
                        className="img-fluid"
                        src={screenshot9}
                        alt="alternative"
                      />
                    </a>
                  </div>
                  {/* end of slide */}

                  {/* Slide */}
                  <div className="swiper-slide">
                    <a
                      href={screenshot5}
                      className="popup-link"
                      data-effect="fadeIn"
                    >
                      <img
                        className="img-fluid"
                        src={screenshot10}
                        alt="alternative"
                      />
                    </a>
                  </div>
                  {/* end of slide */}
                </div>

                {/* Add Arrows */}
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
                {/* end of add arrows */}
              </div>
            </div>
            {/* end of image slider */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenShot;
