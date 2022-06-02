import React from "react";
import teamImg from "../assets/team.png";

const Team = () => {
  return (
    <section className="w-full mt-20 ">
      <div className="w-full h-[700px] bg-gray-900/90 opacity-100 absolute">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={teamImg}
          alt="/"
        />
      </div>

      <div className="max-w-[1240px] mx-auto relative text-white">
        <div className="px-4 py-12">
          <h2 className="text-3xl pt-8 uppercase text-center">Our Team</h2>
          <h3 className="text-5xl font-bold py-6 text-center">
            Finding the right partner
          </h3>
          <p className="py-4 text-3xl font-medium ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
            corporis neque ducimus magni sunt est consequatur ea error beatae,
            recusandae a animi sit asperiores voluptatum incidunt maxime hic
            tempore praesentium saepe aspernatur molestias cupiditate! Qui nihil
            porro ab reprehenderit maxime hic impedit facere dolorum voluptates
            aspernatur ducimus dolores, ipsum neque.
          </p>
        </div>
        {/* <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <PhoneIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">Sales</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates ad exercitationem inventore iste minima omnis rem
                fugiat suscipit et modi!
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                Contact Us <ArrowSmRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <SupportIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">Technical Support</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates ad exercitationem inventore iste minima omnis rem
                fugiat suscipit et modi!
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                Contact Us <ArrowSmRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <ChipIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">Inquiries</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates ad exercitationem inventore iste minima omnis rem
                fugiat suscipit et modi!
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                Contact Us <ArrowSmRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Team;
