import React from "react";

const Footer = () => {
  const handleLinkedin = () => {
    // Mi cuenta de Linkedin
    window.location.href = "https://www.linkedin.com/in/jroenginner";
  };

  const handleGithub = () => {
    // Mi cuenta de Github
    window.location.href = "https://github.com/Erisnake";
  };

  return (
    <>
      <div className="wrappe h-full flex container flex-col items-center footer">
        <div className="principal mx-auto">
          <h1 className="text-2xl font-bold text-center">
            Desarrollado por{" "}
            <span className="text-pink-700">Juan Román Ortiz Blanco</span>
          </h1>
          <h3 className="text-lg text-pink-600 text text-center">
            Sígueme en mis Redes Sociales
          </h3>
        </div>

        <ul className="social mb-5 mt-14">
          <li className="ico linkedin" onClick={handleLinkedin}>
            <span className="marca">Linkedin</span>
            <span>
              <i className="fa-brands fa-linkedin"></i>
            </span>
          </li>

          <li className="ico github" onClick={handleGithub}>
            <span className="marca">Github</span>
            <span>
              <i className="fa-brands fa-github"></i>
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
