import Contact from "../components/contact/contact";
import Home from "../components/home/home";
import Interests from "../components/interests/interests";
import Projects from "../components/projects/projects";
import Summary from "../components/summary/summary";
import Technologies from "../components/technologies/newTechnologies";

export const routes = [
  {
    id: 1,
    name: "Home",
    path: "/",
    component: Home,
    exact: true
  },
  {
    id: 2,
    name: "Summmary",
    path: "/summary",
    component: Summary,
    exact: false
  },
  {
    id: 3,
    name: "Technologies",
    path: "/technologies",
    component: Technologies,
    exact: false
  },
  {
    id: 4,
    name: "Interests",
    path: "/interests",
    component: Interests,
    exact: false
  },
  {
    id: 5,
    name: "Projects",
    path: "/projects",
    component: Projects,
    exact: false
  },
  {
    id: 6,
    name: "Contact",
    path: "/contact",
    component: Contact,
    exact: false
  }
];
