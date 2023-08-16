import Navbar from "./Navbar";
import React from "react";
import Fade from "react-reveal/Fade";

const Header = () => {
  const logoHeader = {
    backgroundImage: "url('/src/assets/wp5187908.jpg')",
  };
  const logoHeader02 = {
    backgroundImage:
      "url('/src/assets/e414f64f2b3148672b1e4769773709ce-1000.jpg')",
  };

  return (
    <>
      <div className="w-full bg-secondary  h-[100vh]">
        <Navbar />
        <div className="flex flex-col md:flex-row-reverse m-5">
          {/* 01 */}

          <Fade>
            <div className="flex-1 ">
              <div className="flex justify-center items-center h-full flex-col gap-3 p-5">
                <div
                  className="w-full h-full bg-cover bg-center flex justify-center items-center flex-col gap-3 rounded-lg p-10"
                  style={logoHeader}
                >
                  <h1 className="text-white text-center font-bold text-5xl">
                    Change you WebSite layout
                  </h1>
                  <h3 className="text-secondary font font-semibold text-center text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptas, quidem! Sit, non consectetur nesciunt perferendis
                    ducimus repudiandae praesentium pariatur earum similique
                    repellat r
                  </h3>
                </div>
              </div>
            </div>
          </Fade>

          {/* 02 */}

          <Fade left>
            <div className="w-100% h-100% md:w-1/4 flex flex-col gap-3 md:gap-3">
              <div className=" m-5 flex flex-col space-y-10 items-center h-full">
                <div className="h-16 w-full flex justify-center items-center font-semibold text-secondary bg-primary  hover:bg-blue-700 text-xl tracking-wide rounded-lg">
                  <h3>Layout 01</h3>
                </div>
                <div className="h-16 w-full flex justify-center items-center font-semibold text-secondary bg-primary  hover:bg-blue-700 text-xl tracking-wide rounded-lg">
                  <h3>Layout 02</h3>
                </div>
                <div className="h-16 w-full flex justify-center items-center font-semibold text-secondary bg-primary  hover:bg-blue-700 text-xl tracking-wide rounded-lg">
                  <h3>Layout 03</h3>
                </div>
                <div className="h-16 w-full flex justify-center items-center font-semibold text-secondary bg-primary  hover:bg-blue-700 text-xl tracking-wide rounded-lg">
                  <h3>Layout 04</h3>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Header;
