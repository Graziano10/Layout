import Navbar from "./Navbar";

const Header = () => {

    // const logoHeader = {
    //     backgroundImage: url('src/assets/763a42a889a803701db274188a6fcef9-1000.jpg'),
    // };


  return (
    <>
      <Navbar />



      <div className="flex flex-col md:flex-row m-5 p-5">
        <div className="w-100% md:w-1/4">
          <div className="bg-secondary border border-black rounded-lg">
            <div className="space-y-20 sm:mx-72 mx-8 bg-secondary py-10 px-3">
              <div className="rounded-lg shadow-md border-2 border-primary">
                <h3 className="text-center text-black py-5 col-end-4 pl-2">
                  Section 01
                </h3>
              </div>

              <div className="rounded-lg shadow-md  border-2 border-primary">
                <h3 className="text-center text-black py-5 col-end-4 pl-2">
                  Section 02
                </h3>
              </div>

              <div className=" rounded-lg shadow-md border-2 border-primary">
                <h3 className="text-center text-black py-5 col-end-4 pl-2">
                  Section 03
                </h3>
              </div>

              <div className="rounded-lg shadow-md  border-2 border-primary">
                <h3 className="text-center text-black py-5 col-end-4 pl-2">
                  Section 04
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 ">
          <div className=" flex justify-center items-center">
            <img src="src\assets\image01.jpg" alt="imgae" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
