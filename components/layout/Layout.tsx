import Homepage from "../Homepage";
import Navbar from "../Navbar";
import Projects from "../Projects";
import Skills from "../Skills";
import TechStack from "../TechStack";
import Toolkit from "../Toolkit";
import Tools from "../Tools";
import MainLayout from "./MainLayout";
import { useState } from "react";

function Layout() {
  const [currentInfo, setCurrentInfo] = useState(0);

  return (
    <>
      <MainLayout>
        <Navbar setCurrentInfo={setCurrentInfo} />
        <div className="absolute flex items-center justify-center w-screen h-screen gap-40">
          {currentInfo === 0 && <Homepage />}
          {currentInfo === 1 && <Skills />}
          {currentInfo === 2 && <TechStack />}
          {currentInfo === 3 && <Tools />}
          {currentInfo === 4 && <Projects />}
          <Toolkit setCurrentInfo={setCurrentInfo} />
        </div>
      </MainLayout>
    </>
  );
}

export default Layout;
