import React from "react";

import pic1 from "../pics/pic1.jpg";
import pic3 from '../pics/pic3.jpg';
import videoBg from '../video/v1.mp4';

const Home = () => {
  return (
    <div>
      <div>
        <h1>BMW</h1>
      </div>

      {/* First Paragraph with Video */}
      <div className="paragraph-container">
        <h2>The Legacy and Innovation of BMW</h2>
        <div className="paragraph-with-video">
          <p>
            BMW, short for{" "}
            <a
              href="https://en.wikipedia.org/wiki/BMW"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bayerische Motoren Werke AG
            </a>
            , is a globally renowned German automobile manufacturer known for
            producing premium vehicles that combine luxury, performance, and
            cutting-edge technology. Established in 1916, BMW has built a strong
            reputation for engineering excellence and driving pleasure, earning
            the slogan "The Ultimate Driving Machine." From elegant sedans and
            dynamic sports cars to innovative electric models and versatile
            SUVs, BMW offers a wide range of vehicles designed to meet the
            demands of modern drivers while maintaining a strong commitment to
            quality, sustainability, and innovation.
          </p>
          <video
            width="650"
            autoPlay
            loop
            muted
            className="video"
            playsInline
            
          >
            <source source src={videoBg} type="video/mp4"/>
             Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <br />
      <br />

      {/* Second Paragraph (Text Only) */}
      <div>
        <h2>BMW: The Ultimate Driving Machine</h2>
        <p>
          BMW is a symbol of luxury, performance, and innovation in the
          automotive world. Known for its sleek designs and powerful engines,{" "}
          <a
            href="https://en.wikipedia.org/wiki/List_of_BMW_vehicles"
            target="_blank"
            rel="noopener noreferrer"
          >
            BMW cars
          </a>{" "}
          offer a unique driving experience that blends comfort with sporty
          precision. The brands commitment to cutting-edge technology is
          reflected in features like advanced driver assistance systems,
          efficient powertrains, and high-quality interiors. Whether it's a
          sporty sedan, a spacious SUV, or an eco-friendly electric model, BMW
          continues to push the boundaries of automotive excellence while
          maintaining its iconic status and heritage.
        </p>
      </div>

      <br />
      <br />

      {/* Third Paragraph (Text Only) */}
      <div>
        <h2>Exploring the Excellence of BMW Cars</h2>
        <p>
          BMW cars are a perfect example of what happens when design,
          technology, and performance come together in harmony. Whether you're
          behind the wheel of a sporty coupe, a luxurious sedan, or a
          cutting-edge electric vehicle, the attention to detail is
          unmistakable. BMW doesnt just build cars—it crafts experiences. With
          advanced features, driver-focused interiors, and a legacy of
          reliability, BMW continues to set high standards for what automotive
          excellence truly means.
        </p>
      </div>
      <br />

      {/* Image Gallery Section after the paragraphs */}
      <div className="image-gallery">
        <img
          src={pic1}
          alt="BMW Performance"
          className="image" style={{ width: "600px", height: "auto", maxWidth: "100%" }}
        />
        <img src={pic3} alt="BMW Style" className="image" style={{ width: "600px", height: "auto", maxWidth: "100%" }} />
      </div>
      <br />
      <br />

      <h2>Legendary BMW Cars</h2>
      <p>Some of the Famous BMW Cars Are:</p>

      <ol
        style={{ listStyle: "none", display: "flex", gap: "30px", paddingLeft: 0 }}
      >
        <li>BMW 3 Series</li>
        <li>BMW 5 Series</li>
        <li>BMW 7 Series</li>
        <li>BMW X5</li>
      </ol>
      <br />

      <h2>BMW: The Ultimate Driving Machine</h2>
      <br />
      <p>
        {" "}
        <a href="https://www.bmw.com" target="_blank" rel="noopener noreferrer">
          BMW
        </a>{" "}
        is a symbol of luxury, performance, and innovation in the automotive
        world. Established in Germany, the brand has built a legacy of
        producing high-performance vehicles that combine powerful engines,
        elegant designs, and advanced technology. Whether its a sleek sedan or
        a rugged SUV, BMW vehicles are crafted to provide the ultimate driving
        experience for those who appreciate excellence.
      </p>

      <div className="bmw-models-container">
        <div className="bmw-models">
          <h3>BMW X Models</h3>
          <ul>
            <li>BMW X1</li>
            <li>BMW X3</li>
            <li>BMW X5</li>
            <li>BMW X7</li>
          </ul>
        </div>

        <div className="bmw-models">
          <h3>BMW i Series</h3>
          <ul>
            <li>BMW i3</li>
            <li>BMW i4</li>
            <li>BMW i8</li>
            <li>BMW iX</li>
          </ul>
        </div>

        <div className="bmw-models">
          <h3>BMW M Models</h3>
          <ul>
            <li>BMW M2</li>
            <li>BMW M3</li>
            <li>BMW M4</li>
            <li>BMW M5</li>
          </ul>
        </div>
      </div>
      <br />
      <br />

      <h2>Watch a Travel Documentary on BMW</h2>
      <br />
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/jZk1-ytzng0?si=KoODVvLcUGn5NcFB"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <br />
      <br />

      <h2>BMW Models and Their Features</h2>
      <br />
      <table border="1">
        <thead>
          <tr>
            <th>BMW Model</th>
            <th>Engine</th>
            <th>Transmission</th>
            <th>Performance</th>
            <th>Features</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>BMW 3 Series</td>
            <td>2.0L Turbo Inline-4</td>
            <td>8-Speed Automatic</td>
            <td>0-60 mph in 5.6 seconds</td>
            <td>Apple CarPlay, Adaptive Cruise Control, Parking Sensors</td>
          </tr>
          <tr>
            <td>BMW 5 Series</td>
            <td>3.0L Turbo Inline-6</td>
            <td>8-Speed Automatic</td>
            <td>0-60 mph in 4.9 seconds</td>
            <td>Gesture Controls, Wireless Charging, Lane Departure Warning</td>
          </tr>
          <tr>
            <td>BMW X5</td>
            <td>3.0L Turbo Inline-6</td>
            <td>8-Speed Automatic</td>
            <td>0-60 mph in 5.3 seconds</td>
            <td>Panoramic Sunroof, Parking Assistance, All-Wheel Drive</td>
          </tr>
          <tr>
            <td>BMW M3</td>
            <td>3.0L Twin-Turbo Inline-6</td>
            <td>6-Speed Manual / 8-Speed Automatic</td>
            <td>0-60 mph in 3.8 seconds</td>
            <td>M Sport Differential, Carbon Fiber Roof, Adaptive M Suspension</td>
          </tr>
          <tr>
            <td>BMW i8</td>
            <td>1.5L Turbo Inline-3 + Electric Motor</td>
            <td>6-Speed Automatic</td>
            <td>0-60 mph in 4.2 seconds</td>
            <td>Hybrid Powertrain, Laser Headlights, Carbon Fiber Body</td>
          </tr>
        </tbody>
      </table>
      <br />
      <br />
    </div>
  );
};

export default Home;
