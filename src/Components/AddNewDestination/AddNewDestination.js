import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddNewDestination = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    axios
      .post(
        "https://bhromonpoth-travels-server-production.up.railway.app/destinationlist",
        data
      )
      .then((res) => {
        if (res.data.insertedId) {
          toast("✅ Added successfully", {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          reset();
        }
      });
  };
  return (
    <div className="py-0 lg:py-32 md:py-0 xl:py-10">
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className=" px-4 py-0  mx-auto max-w-screen-xl sm:px-6 lg:px-8 sm:py-16 lg:h-screen lg:flex lg:items-center ">
        <div className=" relative mx-auto max-w-6xl py-0 px-2 lg:px-24 shadow-xl mb-24">
          <div>
            <h1 className="text-3xl mb-5 font-extrabold text-transparent sm:text-6xl bg-clip-text bg-gradient-to-r from-green-200 via-green-500 to-green-200">
              BhromonPoth
            </h1>
            <h1 className="text-2xl">ADD NEW DESTINATION</h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="">
              <div className="-mx-3 md:flex mb-6">
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                    htmlFor="name"
                  >
                    COUNTRY name*
                  </label>
                  <input
                    className="w-full bg-green-200 text-black border border-green-500 rounded py-3 px-4 mb-3"
                    id="name"
                    type="text"
                    placeholder="Country name"
                    {...register("countryname", { required: true })}
                  />
                </div>
                <div className="md:w-1/2 px-3">
                  <label
                    className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                    htmlFor="title"
                  >
                    short title*
                  </label>
                  <input
                    className="w-full bg-green-200 text-black border border-green-500 rounded py-3 px-4 mb-3"
                    id="title"
                    type="text"
                    placeholder="Short title"
                    {...register("shorttitle", {
                      required: true,
                      minLength: 110,
                    })}
                  />
                </div>
              </div>
              {/*ROW 2*/}
              <div className="-mx-3 md:flex mb-6">
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                    htmlFor="banimg"
                  >
                    BANNER IMG URL*
                  </label>
                  <input
                    className="w-full bg-green-200 text-black border border-green-500 rounded py-3 px-4 mb-3"
                    id="banimg"
                    type="text"
                    placeholder="Banner image"
                    {...register("bannerimg", { required: true })}
                  />
                </div>
                <div className="md:w-1/2 px-3">
                  <label
                    className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                    htmlFor="longdes"
                  >
                    LONG DESCRIPTION*
                  </label>
                  <textarea
                    className="w-full bg-green-200 text-black border border-green-500 rounded py-3 px-4 mb-3"
                    id="longdes"
                    type="text"
                    placeholder="Long description"
                    {...register("longdes", { required: true })}
                  />
                </div>
              </div>
              {/*ROW 3 */}
              <div className="-mx-3 md:flex mb-6">
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                    htmlFor="desimgone"
                  >
                    DESCRIPTION IMAGE ONE*
                  </label>
                  <input
                    className="w-full bg-green-200 text-black border border-green-500 rounded py-3 px-4 mb-3"
                    id="desimgone"
                    type="text"
                    placeholder="Description Image One"
                    {...register("desimgone", { required: true })}
                  />
                </div>
                <div className="md:w-1/2 px-3">
                  <label
                    className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                    htmlFor="desone"
                  >
                    DESCRIPTION ONE*
                  </label>
                  <textarea
                    className="w-full bg-green-200 text-black border border-green-500 rounded py-3 px-4 mb-3"
                    id="desone"
                    type="text"
                    placeholder="Description one"
                    {...register("desone", { required: true })}
                  />
                </div>
              </div>
              {/*ROW 4 */}
              <div className="-mx-3 md:flex mb-6">
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                    htmlFor="desimgtwo"
                  >
                    DESCRIPTION IMAGE TWO*
                  </label>
                  <input
                    className="w-full bg-green-200 text-black border border-green-500 rounded py-3 px-4 mb-3"
                    id="desimgtwo"
                    type="text"
                    placeholder="Description Image Two"
                    {...register("desimgtwo", { required: true })}
                  />
                </div>
                <div className="md:w-1/2 px-3">
                  <label
                    className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                    htmlFor="destwo"
                  >
                    DESCRIPTION TWO*
                  </label>
                  <textarea
                    className="w-full bg-green-200 text-black border border-green-500 rounded py-3 px-4 mb-3"
                    id="destwo"
                    type="text"
                    placeholder="Description two"
                    {...register("destwo", { required: true })}
                  />
                </div>
              </div>

              {/* BUTTON */}
              <div className="-mx-3 md:flex mt-2">
                <div className="md:w-full px-3">
                  <button className="md:w-full bg-green-400 text-white font-bold py-2 px-4 shadow-lg hover:bg-green-700 border-green-500 hover:border-green-500 rounded-full">
                    ADD NEW DESTINATION
                  </button>
                </div>
              </div>
              <p className="text-red-500">MAKE SURE ALL INPUTS ARE OKAY</p>
              <Link to="/" className="text-green-500 mt-5">
                SEE DESTINATION LIST
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewDestination;
