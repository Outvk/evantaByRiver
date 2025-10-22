import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";
import initParticleAnimation from "./ParticleAnimation.js";
import LoadingScreen from "./LoadingScreen";
import Navbar from "./Navbar";
import {
  initTabSystem,
  initFlipButtons,
  initTabSection,
} from "./TabAnimations";
import { initProjectAnimations } from "./ProjectAnimations";
import CTA from "./CTA.jsx";

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize particle animation after component mounts
    initParticleAnimation();

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Initialize GSAP animations
    initTabSystem();
    initFlipButtons();
    initTabSection();
    initProjectAnimations();

    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const handleContactClick = () => {
    navigate("/contact");
  };

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      {isLoading && <LoadingScreen />}
      <div className={`content ${isLoading ? "hidden" : "visible"}`}>
        <Navbar isScrolled={isScrolled} />
        <div className="header">
          <h2 className="river">
            <a
              href="https://codepen.io/RAFA3L"
              target="_blank"
              rel="noopener noreferrer"
            >
              RIVER
            </a>
          </h2>
          <div
            className="mid-spot"
            onClick={() => document.body.classList.toggle("gold")}
          ></div>
          <CTA handleContactClick={handleContactClick} />

          <div className="spotlight">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <canvas id="particleCanvas"></canvas>

        <div className="accent-lines">
          <div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <div className="heroSubP">
          <p>Introducing</p>
        </div>

        <div className="hero">
          <div className="heroT">
            <h2 style={{ bottom: "140px" }}>Evant</h2>
            <h2 style={{ bottom: "125px" }}>Eclipx</h2>
          </div>
        </div>

        <p className="heroP">
          The world's best platform, <br />
          powered by OutRiver + React.
        </p>

        <div className="mountains">
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className="hero-spacer"></div>

        <div className="content-section">
          <div className="content-acc"></div>
          <p className="subt">Revolutionary by design</p>
          <h3 className="title">
            Harness. Empower.
            <br />
            Unmatched Versatility.
          </h3>
          <p className="subp">
            At the core lies our revolutionary framework, <br />
            ensuring adaptability across all application architectures.
          </p>
        </div>

        <section className="cloneable">
          <div data-tabs="wrapper" className="tab-layout">
            <div className="tab-layout-col">
              <div className="tab-layout-container">
                <div className="tab-container">
                  <div className="tab-container-top">
                    <h1
                      className="tab-layout-heading"
                      style={{ fontSize: "50px" }}
                    >
                      Explore the Layers of Abstract Design and Depth
                    </h1>
                    <div
                      data-flip-button="wrap"
                      data-tabs="nav"
                      className="filter-bar"
                    >
                      <div
                        data-flip-button="bg"
                        className="tab-button__bg"
                      ></div>
                      <button
                        data-tabs="button"
                        data-flip-button="button"
                        className={`filter-button ${
                          activeTab === 0 ? "active" : ""
                        }`}
                        onClick={() => handleTabClick(0)}
                      >
                        <div className="filter-button__p">Shapes</div>
                      </button>
                      <button
                        data-tabs="button"
                        data-flip-button="button"
                        className={`filter-button ${
                          activeTab === 1 ? "active" : ""
                        }`}
                        onClick={() => handleTabClick(1)}
                      >
                        <div className="filter-button__p">Depth</div>
                      </button>
                      <button
                        data-tabs="button"
                        data-flip-button="button"
                        className={`filter-button ${
                          activeTab === 2 ? "active" : ""
                        }`}
                        onClick={() => handleTabClick(2)}
                      >
                        <div className="filter-button__p">Layers</div>
                      </button>
                    </div>
                  </div>
                  <div className="tab-container-bottom">
                    <div data-tabs="content-wrap" className="tab-content-wrap">
                      <div
                        data-tabs="content-item"
                        className={`tab-content-item ${
                          activeTab === 0 ? "active" : ""
                        }`}
                      >
                        <h2 data-tabs-fade="" className="tab-content__heading">
                          Shifting Perspectives
                        </h2>
                        <p data-tabs-fade="" className="content-p opacity--80">
                          A dynamic exploration of structure, balance, and
                          creative symmetry.
                        </p>
                      </div>
                      <div
                        data-tabs="content-item"
                        className={`tab-content-item ${
                          activeTab === 1 ? "active" : ""
                        }`}
                      >
                        <h2 data-tabs-fade="" className="tab-content__heading">
                          Fragments of Motion
                        </h2>
                        <p data-tabs-fade="" className="content-p opacity--80">
                          Where design meets depth—an abstract dance of light
                          and form.
                        </p>
                      </div>
                      <div
                        data-tabs="content-item"
                        className={`tab-content-item ${
                          activeTab === 2 ? "active" : ""
                        }`}
                      >
                        <h2 data-tabs-fade="" className="tab-content__heading">
                          Echoes in Orange
                        </h2>
                        <p data-tabs-fade="" className="content-p opacity--80">
                          A journey through layered geometry and endless
                          possibilities.
                        </p>
                      </div>
                    </div>
                    <a
                      id="form-button"
                      href="#"
                      className="tab-content__button w-inline-block"
                    >
                      <p className="content-p">Become a member</p>
                      <div className="content-button__bg"></div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-layout-col">
              <div data-tabs="visual-wrap" className="tab-visual-wrap">
                <div
                  data-tabs="visual-item"
                  className={`tab-visual-item ${
                    activeTab === 0 ? "active" : ""
                  }`}
                >
                  <img
                    src="/public/img/girlparty.jpg"
                    loading="lazy"
                    className="tab-image"
                    alt="Abstract shapes"
                  />
                </div>
                <div
                  data-tabs="visual-item"
                  className={`tab-visual-item ${
                    activeTab === 1 ? "active" : ""
                  }`}
                >
                  <img
                    src="/public/img/elusion.jpg"
                    loading="lazy"
                    className="tab-image"
                    alt="Depth perspective"
                  />
                </div>
                <div
                  data-tabs="visual-item"
                  className={`tab-visual-item ${
                    activeTab === 2 ? "active" : ""
                  }`}
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    width: "90%",
                  }}
                >
                  <img
                    src="/public/img/pyramid.jpeg"
                    loading="lazy"
                    className="tab-image"
                    alt="Layered design"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="osmo-credits">
          <p className="osmo-credits__p">
            Resource by{" "}
            <a
              target="_blank"
              href="https://river-portofilo.framer.website/"
              className="osmo-credits__p-a"
              rel="noopener noreferrer"
            >
              OutRiver
            </a>
          </p>
        </div>
      </div>

      <div class="projects-component">
        <div class="projects-list">
          <div class="project-item" data-index="0">
            <div class="project-title-container">
              <div class="hover-indicator left"></div>
              <h2 class="project-title">COSMIC DEPTHS</h2>
              <div class="hover-indicator right"></div>
            </div>
            <div class="project-content">
              <div class="project-details left">
                <p class="detail-label">SPATIAL AWARENESS</p>
                <p class="detail-label">EXPANSIVE VISION</p>
                <p class="detail-label">ETERNAL MOMENT</p>
              </div>
              <div class="project-image">
                <div className="image-wrapper">
                  <img
                    src="https://cdn.cosmos.so/2519c3a3-40c4-49ff-95ed-928b3cf69740?format=jpeg"
                    alt="Cosmic depths image"
                  />
                </div>
              </div>
              <div class="project-details right">
                <p class="detail-label">SILENT OBSERVATION</p>
                <p class="detail-label">TIMELESS CAPTURE</p>
                <p class="detail-label">BEYOND PERCEPTION</p>
                <p class="detail-year">/2025</p>
              </div>
            </div>
          </div>

          <div class="project-item" data-index="1">
            <div class="project-title-container">
              <div class="hover-indicator left"></div>
              <h2 class="project-title">FOURTH DIMENSION</h2>
              <div class="hover-indicator right"></div>
            </div>
            <div class="project-content">
              <div class="project-details left">
                <p class="detail-label">TEMPORAL SHIFT</p>
                <p class="detail-label">BEYOND LINEAR</p>
                <p class="detail-label">QUANTUM SPACE</p>
              </div>
              <div class="project-image">
                <div className="image-wrapper">
                  <img
                    src="https://cdn.cosmos.so/17b5c6b8-91c7-420b-8b98-29ec22b1afbb?format=jpeg"
                    alt="Fourth dimension image"
                  />
                </div>
              </div>
              <div class="project-details right">
                <p class="detail-label">TIME COLLAPSE</p>
                <p class="detail-label">HYPERCUBE VISION</p>
                <p class="detail-label">BEYOND LIMITS</p>
                <p class="detail-year">/2025</p>
              </div>
            </div>
          </div>

          <div class="project-item" data-index="2">
            <div class="project-title-container">
              <div class="hover-indicator left"></div>
              <h2 class="project-title">INNER VOID</h2>
              <div class="hover-indicator right"></div>
            </div>
            <div class="project-content">
              <div class="project-details left">
                <p class="detail-label">NEGATIVE SPACE</p>
                <p class="detail-label">CONSCIOUS ABSENCE</p>
                <p class="detail-label">SILENT DEPTH</p>
              </div>
              <div className="project-image">
                <div className="image-wrapper">
                  <img
                    src="https://cdn.cosmos.so/9ed5e53a-bc97-4f58-bbde-3c4590687eb7?format=jpeg"
                    alt="Inner void image"
                  />
                </div>
              </div>
              <div className="project-details right">
                <p className="detail-label">CREATIVE EMPTINESS</p>
                <p className="detail-label">QUANTUM POTENTIAL</p>
                <p className="detail-label">ABSOLUTE STILLNESS</p>
                <p className="detail-year">/2025</p>
              </div>
            </div>
          </div>

          <div class="project-item" data-index="3">
            <div class="project-title-container">
              <div class="hover-indicator left"></div>
              <h2 class="project-title">PRESENT WITNESS</h2>
              <div class="hover-indicator right"></div>
            </div>
            <div class="project-content">
              <div class="project-details left">
                <p className="detail-label">AWARE PERCEPTION</p>
                <p className="detail-label">PHOTOGRAPHIC TRUTH</p>
                <p className="detail-label">ESSENTIAL SEEING</p>
              </div>
              <div className="project-image">
                <div className="image-wrapper">
                  <img
                    src="https://cdn.cosmos.so/29733ed0-b6cc-4991-8585-159f41f658a9?format=jpeg"
                    alt="Present witness image"
                  />
                </div>
              </div>
              <div className="project-details right">
                <p className="detail-label">SUSPENDED MOMENT</p>
                <p className="detail-label">DISTILLED REALITY</p>
                <p className="detail-label">INFINITE FRAME</p>
                <p className="detail-year">/2025</p>
              </div>
            </div>
          </div>

          <div class="project-item" data-index="4">
            <div class="project-title-container">
              <div class="hover-indicator left"></div>
              <h2 class="project-title">CREATIVE FLOW</h2>
              <div class="hover-indicator right"></div>
            </div>
            <div class="project-content">
              <div className="project-details left">
                <p className="detail-label">CHANNELED INSIGHT</p>
                <p className="detail-label">BEYOND THOUGHT</p>
                <p className="detail-label">PURE EXPRESSION</p>
              </div>
              <div className="project-image">
                <div className="image-wrapper">
                  <img
                    src="https://cdn.cosmos.so/2519c3a3-40c4-49ff-95ed-928b3cf69740?format=jpeg"
                    alt="Creative flow image"
                  />
                </div>
              </div>
              <div className="project-details right">
                <p className="detail-label">TIMELESS STATE</p>
                <p className="detail-label">DIRECT CONNECTION</p>
                <p className="detail-label">SOURCE ALIGNMENT</p>
                <p className="detail-year">/2025</p>
              </div>
            </div>
          </div>

          <div class="project-item" data-index="5">
            <div class="project-title-container">
              <div className="hover-indicator left"></div>
              <h2 className="project-title">UNIVERSAL LENS</h2>
              <div className="hover-indicator right"></div>
            </div>
            <div className="project-content">
              <div className="project-details left">
                <p className="detail-label">COSMIC PERSPECTIVE</p>
                <p className="detail-label">UNIVERSAL TRUTH</p>
                <p className="detail-label">SINGULAR VISION</p>
              </div>
              <div className="project-image">
                <div className="image-wrapper">
                  <img
                    src="https://cdn.cosmos.so/17b5c6b8-91c7-420b-8b98-29ec22b1afbb?format=jpeg"
                    alt="Universal lens image"
                  />
                </div>
              </div>
              <div className="project-details right">
                <p className="detail-label">SPACE COLLAPSE</p>
                <p className="detail-label">UNIFIED FIELD</p>
                <p className="detail-label">QUANTUM OBSERVER</p>
                <p className="detail-year">/2025</p>
              </div>
            </div>
          </div>

          <div class="project-item" data-index="6">
            <div className="project-title-container">
              <div className="hover-indicator left"></div>
              <h2 className="project-title">ESSENTIAL LIGHT</h2>
              <div className="hover-indicator right"></div>
            </div>
            <div className="project-content">
              <div className="project-details left">
                <p className="detail-label">PHOTON DANCE</p>
                <p className="detail-label">ILLUMINATION</p>
                <p className="detail-label">PURE REVELATION</p>
              </div>
              <div className="project-image">
                <div className="image-wrapper">
                  <img
                    src="https://cdn.cosmos.so/9ed5e53a-bc97-4f58-bbde-3c4590687eb7?format=jpeg"
                    alt="Essential light image"
                  />
                </div>
              </div>
              <div className="project-details right">
                <p className="detail-label">LUMINOUS TRUTH</p>
                <p className="detail-label">SPACE BETWEEN</p>
                <p className="detail-label">RADIANT ESSENCE</p>
                <p className="detail-year">/2025</p>
              </div>
            </div>
          </div>

          <div className="project-item" data-index="7">
            <div className="project-title-container">
              <div className="hover-indicator left"></div>
              <h2 className="project-title">SACRED FRAME</h2>
              <div className="hover-indicator right"></div>
            </div>
            <div className="project-content">
              <div className="project-details left">
                <p className="detail-label">DECISIVE MOMENT</p>
                <p className="detail-label">ETERNAL CAPTURE</p>
                <p className="detail-label">BOUNDARY DISSOLVE</p>
              </div>
              <div className="project-image">
                <div className="image-wrapper">
                  <img
                    src="https://cdn.cosmos.so/29733ed0-b6cc-4991-8585-159f41f658a9?format=jpeg"
                    alt="Sacred frame image"
                  />
                </div>
              </div>
              <div className="project-details right">
                <p className="detail-label">LIMITLESS VIEW</p>
                <p className="detail-label">SACRED GEOMETRY</p>
                <p className="detail-label">INFINITE MOMENT</p>
                <p className="detail-year">/2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
