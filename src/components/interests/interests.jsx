import React from "react";
import interests from "../../assets/images/interests.jpg"

const Interests = () => {
  return (
    <>
      <div className="main__textContainer main__textContainer--interests">
        <h1>Interests</h1>
        <p>
          My passion are mountains, in my spare time when I'm not working on my
          projects I am looking for travel opportunities. I love spring and
          winter journeys, walking and cycling in the mountains. I love to
          admire the views and put myself on more and more difficult challenges.
        </p>
      </div>
      <div className="main__photoContainer main__photoContainer--interests">
        <img src={interests} alt=""/>
      </div>
    </>
  );
};

export default Interests;
