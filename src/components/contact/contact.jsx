import React from "react";
import "./contact.scss"

import linkedInRound from "../../assets/contactIcons/linkedInRound.svg"
import githubRound from "../../assets/contactIcons/githubRound.svg"
import mailRound from "../../assets/contactIcons/mailRound.svg"

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
                <a>
                  <img
                    src={mailRound}
                    alt="email"
                    height="40px"
                    width="40px"
                    srcset=""
                  />
                </a>
              </th>
              <th>
                <a>
                  <span>dariusz.sikorra@gmail.com</span>
                </a>
              </th>
            </tr>
            <tr>
              <th>
                <a href="https://www.linkedin.com/in/dariuszsikorra">
                  <img
                    src={linkedInRound}
                    alt="linkedin"
                    height="40px"
                    width="40px"
                    srcset=""
                  />
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
                  <img
                    src={githubRound}
                    alt="github"
                    height="40px"
                    width="40px"
                    srcset=""
                  />
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
      <div className="main__photoContainer main__photoContainer--contact"></div>
    </>
  );
};

export default Contact;
