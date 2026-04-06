import React from "react";
import GoFoodsAbout from "../Components/Gofoodsabout";
import GoFoodsObjectivePromise from "../Components/Gofoodsobjectivepromise";
import GoFoodsFarms from "../Components/Gofoodsfarms";

const AboutUs = () => {
  return (
    <div className="pt-5 md:pt-0">
      <GoFoodsAbout />
      <GoFoodsObjectivePromise />
      <GoFoodsFarms />
    </div>
  );
};

export default AboutUs;
