import React from "react";
import "./contact.scss";

import linkedInRound from "../../assets/contactIcons/linkedInRound.svg";
import githubRound from "../../assets/contactIcons/githubRound.svg";
import mailRound from "../../assets/contactIcons/mailRound.svg";
import contact from "../../assets/images/contact.jpg";

const Contact = () => {
  return (
    <>
      <div className="main__textContainer main__textContainer--contact">
        <h1>Contact</h1>
        <p>
          Wanna get in touch or talk about a projects? Feel free to contact me:
          <table>
            <tr>
              <th>
                <div>
                  <img src={mailRound} alt="email" />
                </div>
              </th>
              <th>
                <div>
                  <span>dariusz.sikorra@gmail.com</span>
                </div>
              </th>
            </tr>
            <tr>
              <th>
                <a href="https://www.linkedin.com/in/dariuszsikorra">
                  <img src={linkedInRound} alt="linkedin" />
                </a>
              </th>
              <th>
                <a href="https://www.linkedin.com/in/dariuszsikorra">
                  <span>https://www.linkedin.com/in/dariuszsikorra</span>
                </a>
              </th>
            </tr>
            <tr>
              <th>
                <a id="link" href="https://github.com/DariuszSikorra">
                  <img src={githubRound} alt="github" />
                </a>
              </th>
              <th>
                <a id="link" href="https://github.com/DariuszSikorra">
                  <span>https://github.com/DariuszSikorra</span>
                </a>
              </th>
            </tr>
          </table>
        </p>
      </div>
      <div className="main__photoContainer main__photoContainer--contact">
        <img src={contact} alt="" />
      </div>
    </>
  );
};

export default Contact;
