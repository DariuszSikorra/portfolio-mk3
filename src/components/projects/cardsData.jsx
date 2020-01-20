import React from "react";

import endomondoCloneScreen from "./endomondoClone/endomondoCloneScreen.jpg";
import dawexpolScreen from "./dawexpol/dawexpolScreen.jpg";
import todolistScreen from "./todolist-typescript/todolistScreen.jpg";
import spacexScreen from "./spacex/spacexScreen.jpg";

const cardsData = [
  {
    id: 1,
    name: "Endomondo clone",
    linkText: "Endomondo clone",
    link: "https://dariuszsikorra.github.io/endomondo-like-app/",
    image: endomondoCloneScreen,
    cardTextContent: (
      <>
        The application aims to track the location using the
        navigator.geolocation interface and remember the obtained results. Based
        on the results, the application draws a polyline that reflects the path
        travelled. <br />
        <br /> The map used in the application is based on the Google Maps API.{" "}
        <br /> The application also determines the speed of the device and the
        time for which the measurement is performed.
        <br />
        <br />
        The application was created for mobile devices.
        <br />
        If the application is stuck, refresh data is saved to local storage.
      </>
    ),
    githubLink: "https://github.com/DariuszSikorra/endomondo-like-app"
  },
  {
    id: 2,
    name: "Business brochure",
    linkText: "text linku drugiego",
    link: "https://piaskowanie-dawexpol.pl/",
    image: dawexpolScreen,
    cardTextContent: (
      <>
        React.js based single page
        business-brochure, created for customer. Visual maitained by Sass, and react-spring.
        <br />
        <br />
        Libraries used for this project:
        <ul>
          <li> React-router for routing between pages,</li>
          <li>React-spring for easy to implement and natural animations,</li>
          <li>
            React-responsive for dynamic responsiveness of gallery layout.
          </li>
        </ul>
      </>
    )
    // githubLink: "#"
  },
  {
    id: 3,
    name: "Spacex App",
    linkText: "text linku trzeciego",
    link: "https://dariuszsikorra.github.io/spacex-graphql-app/",
    image: spacexScreen,
    cardTextContent: (
      <>
        An application shows last 10 SpaceX missions, with an exact load in
        rockets. App uses GraphQL to fetch data and free Spacex API as a source.
        <br />
        I wrote the application for the purpose of learning how to use databases
        based on GraphQL.
        <br />
        The data includes:

        <ul>
          <li>when the rocket was launched,</li>
          <li>what kind of rocket they used,</li>
          <li>what was the base of operation,</li>
          <li>what load was in the rocket, and what was a load mass.</li>
        </ul>
      </>
    ),
    githubLink: "https://github.com/DariuszSikorra/spacex-graphql-app"
  },
  {
    id: 4,
    name: "Todo List",
    linkText: "text linku czwartego",
    link: "https://dariuszsikorra.github.io/TodoList-Typescript/",
    image: todolistScreen,
    cardTextContent: (
      <>
        My previous{" "}
        <a
          key="todo"
          href={"https://github.com/DariuszSikorra/TodoList-useHooks"}
        >
          Todo List
        </a>{" "}
        rewritten into Typescript.
        <ul>
          <li>
            React.js with create-react-app-typescript as the main js library,
          </li>
          <li>Typescript for strong typeing,</li>
          <li>
            Sass as a graphic postprocessor for easy page styling and BEM-like
            naming.
          </li>
        </ul>
        It's not as usual as it sounds! ;{")"}
      </>
    ),
    githubLink: "https://github.com/DariuszSikorra/TodoList-Typescript"
  }
];
export default cardsData;
