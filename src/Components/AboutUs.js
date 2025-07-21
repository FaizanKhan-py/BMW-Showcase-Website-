import React from "react";

const AboutUs = () => {
  return (
    <div>
      <br />
      <h2>About Us</h2>
      <br />
      <p>
        At BMW, we are driven by a passion for innovation, performance, and premium craftsmanship.
        With a legacy of excellence that spans over a century, BMW has become a global symbol of
        luxury and engineering precision. Our commitment to delivering the ultimate driving
        experience is reflected in every vehicle we design—from dynamic sports models to
        sophisticated sedans and versatile SUVs. At the heart of BMW is a relentless pursuit of
        perfection, blending cutting-edge technology with timeless design. We don’t just build
        cars—we create driving experiences that inspire.
      </p>
      <br />

      <div style={{ display: "flex", justifyContent: "center" }}>
        <table border="1" style={{ borderCollapse: "collapse", width: "90%" }}>
          <thead>
            <tr>
              <th colSpan="3">Our Team</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                role: "Chief Executive",
                name: "Oliver Zipse",
                desc:
                  "Oliver Zipse leads BMW as CEO, focusing on innovation, sustainability, and shaping the future of mobility.",
                img: "./pics/Oliver.jpg",
              },
              {
                role: "Finance",
                name: "Nicolas Peter",
                desc:
                  "Nicolas Peter is responsible for BMW financial strategy, ensuring stability and long-term growth.",
                img: "./pics/Nicolas.jpg",
              },
              {
                role: "Development",
                name: "Frank Weber",
                desc:
                  "Frank Weber oversees vehicle development, bringing advanced technology and bold design to every model.",
                img: "./pics/FR.jpg",
              },
              {
                role: "Human Resources",
                name: "Ilka Horstmeier",
                desc:
                  "Ilka Horstmeier drives HR initiatives, fostering a strong, diverse, and forward-thinking workforce.",
                img: "./pics/iika.jpg",
              },
              {
                role: "Procurement",
                name: "Joachim Post",
                desc:
                  "Joachim Post manages procurement, building efficient and reliable supplier partnerships worldwide.",
                img: "./pics/joachim.jpg",
              },
            ].map(({ role, name, desc, img }) => (
              <tr key={role}>
                <td>{role}</td>
                <td>{desc}</td>
                <td style={{ width: "15%", verticalAlign: "top" }}>
                  <img src={img} alt={name} width="100px" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AboutUs;
