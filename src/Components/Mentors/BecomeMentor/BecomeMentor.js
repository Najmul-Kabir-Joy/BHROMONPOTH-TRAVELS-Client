import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const BecomeMentor = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.status = "pending";
    axios
      .post(
        "https://bhromonpoth-travels-server-production.up.railway.app/mentors",
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
    console.log(data);
  };
  return (
    <div className="pt-8">
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
      <div className=" px-4 py-24 mx-auto max-w-screen-xl sm:px-6 lg:px-8 sm:py-36 lg:h-screen lg:flex lg:items-center ">
        <div className=" relative mx-auto max-w-6xl py-20 px-2 lg:px-24 shadow-xl mb-24">
          <div>
            <h1 className="text-3xl mb-5 font-extrabold text-transparent sm:text-6xl bg-clip-text bg-gradient-to-r from-green-200 via-green-500 to-green-200">
              BhromonPoth
            </h1>
            <h1 className="text-2xl">APPLY TO BECOME A MENTOR</h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col ">
              <div className="-mx-3 md:flex mb-6">
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                    for="name"
                  >
                    your name*
                  </label>
                  <input
                    className="w-full bg-green-200 text-black border border-green-500 rounded py-3 px-4 mb-3"
                    id="name"
                    type="text"
                    placeholder="Your name"
                    {...register("name", { required: true })}
                  />
                </div>
                <div className="md:w-1/2 px-3">
                  <label
                    className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                    for="des"
                  >
                    about you*
                  </label>
                  <input
                    className="w-full bg-green-200 text-black border border-green-500 rounded py-3 px-4 mb-3"
                    id="des"
                    type="text"
                    placeholder="Short description"
                    {...register("des", { required: true, maxLength: 60 })}
                  />
                </div>
              </div>
              {/*ROW 2*/}
              <div className="-mx-3 md:flex mb-6">
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                    for="photo"
                  >
                    profile photo*
                  </label>
                  <input
                    className="w-full bg-green-200 text-black border border-green-500 rounded py-3 px-4 mb-3"
                    id="photo"
                    type="text"
                    placeholder="Your photo URL"
                    {...register("photo", { required: true })}
                  />
                </div>
                <div className="md:w-1/2 px-3">
                  <label
                    className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                    for="job"
                  >
                    current job*
                  </label>
                  <input
                    className="w-full bg-green-200 text-black border border-green-500 rounded py-3 px-4 mb-3"
                    id="job"
                    type="text"
                    placeholder="Job"
                    {...register("job", { required: true })}
                  />
                </div>
              </div>
              {/*ROW 3*/}
              <div className="-mx-3 md:flex mb-6">
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                    for="location"
                  >
                    Where you live?*
                  </label>
                  <input
                    className="w-full bg-green-200 text-black border border-green-500 rounded py-3 px-4 mb-3"
                    id="location"
                    type="text"
                    placeholder="You live at?"
                    {...register("location", { required: true })}
                  />
                </div>
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                    for="email"
                  >
                    your email*
                  </label>
                  <input
                    className="w-full bg-green-200 text-black border border-green-500 rounded py-3 px-4 mb-3"
                    id="email"
                    type="email"
                    placeholder="Your email"
                    {...register("email", { required: true })}
                  />
                </div>
              </div>

              {/* BUTTON */}
              <div className="-mx-3 md:flex mt-2">
                <div className="md:w-full px-3">
                  <button className="md:w-full bg-green-400 text-white font-bold py-2 px-4 shadow-lg hover:bg-green-700 border-green-500 hover:border-green-500 rounded-full">
                    SEND YOUR APPLICATION
                  </button>
                </div>
              </div>
              <p className="text-red-500">MAKE SURE ALL INPUTS ARE OKAY</p>
              <Link to="/" className="text-green-500 mt-5">
                SEE OUR MENTORS
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BecomeMentor;
