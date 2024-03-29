import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DestinationCard from "../../Destinations/DestinationCard/DestinationCard";

const Destinations = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch(
      "https://bhromonpoth-travels-server-production.up.railway.app/destinationlist"
    )
      .then((res) => res.json())
      .then((data) => setList(data.destinatons));
  }, []);
  console.log(list.length);
  return (
    <div data-aos="fade-right" data-aos-duration="2000">
      {list.length > 0 ? (
        <section className="mt-16">
          <div className="text-center text-5xl mb-10">
            <h1 className="inline border-b-2 border-green-300">
              POPULAR DESTINATIONS
            </h1>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 lg:gap-16 sm:gap-10 mx-10">
            {list?.slice(0, 8).map((item) => (
              <DestinationCard key={item._id} item={item}></DestinationCard>
            ))}
          </div>
        </section>
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
  );
};

export default Destinations;
