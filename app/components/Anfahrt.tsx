import React from "react";

const Anfahrt: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center p-6 ">
      <div className="md:w-1/2 text-center md:text-left" id="anfahrt">
        <h2 className="text-2xl font-bold mb-4">Anfahrt zum Festival</h2>
        <p className="text-gray-300">
          Unser Festivalgelände befindet sich auf dem Feriengelände der schnellst Stuten Europas.
          Einmal durch die Anfahrt bis zur grünen Oase. Danach der Beschilderung folgen.
        </p>
        <p>
          Für den Findungsprozess: Wethener Straße 83 A
        </p>
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
        <img
          src="/images/maps.png"
          alt="Festival Location Map"
          className="w-full h-auto max-w-sm rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Anfahrt;

  