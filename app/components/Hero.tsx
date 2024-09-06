import React from "react";

const ResponsiveImage: React.FC = () => {
  return (
    <div className="flex justify-center items-center relative">
      <div
        className="absolute top-50 left-0 "
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          fontSize: "42px",
          fontStyle: "bold",
        }}
      >
        {"Ackern 24'"}
      </div>

      <img
        src="/images/heroimage.jpg"
        alt="Beschreibung des Bildes"
        width={"100%"} // Standardbreite des Bildes
        height={"auto"} // Standardhöhe des Bildes
        className="object-cover w-[100vw]" // Tailwind-Klasse für responsive Anpassung
        // sizes="(max-width: 768px) 100vw,
        //        (max-width: 1200px) 50vw,
        //        33vw"  // Definiert die Bildgrößen für verschiedene Bildschirmgrößen
      />
    </div>
  );
};

export default function Hero() {
  return (
    <section className="">
      <div className="container mx-auto text-center">
        <ResponsiveImage />
      </div>
    </section>
  );
}
