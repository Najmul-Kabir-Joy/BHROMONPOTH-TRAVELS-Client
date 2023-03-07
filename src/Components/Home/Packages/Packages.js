import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PackageCard from "../../Packages/PackageCard/PackageCard";

const Packages = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch(
      "https://bhromonpoth-travels-server-production.up.railway.app/packagelist"
    )
      .then((res) => res.json())
      .then((data) => setList(data.packages));
  }, []);
  return (
    <div className="mt-16" data-aos="fade-right" data-aos-duration="4000">
      <div>
        <h1 className="text-5xl border-b-2 border-green-400 inline">
          OUR POPULAR PACKAGES
        </h1>
      </div>
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-14 mx-auto">
          {list.length > 0 ? (
            <div class="flex flex-wrap -m-4">
              {list.slice(0, 8).map((item) => (
                <PackageCard key={item._id} item={item}></PackageCard>
              ))}
            </div>
          ) : (
            <div class="flex justify-center items-center py-20">
              <div
                class="
                                    animate-spin
                                    rounded-full
                                    h-32
                                    w-32
                                    border-t-2 border-b-2 border-green-500
                                "
              ></div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Packages;
