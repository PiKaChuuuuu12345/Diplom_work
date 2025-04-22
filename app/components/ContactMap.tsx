/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import { useEffect } from "react";

const ContactMap = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://maps.api.2gis.ru/2.0/loader.js?pkg=full";
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      window.DG.then(function () {
        // @ts-ignore
        const map = window.DG.map("map", {
          center: [42.87551961902157, 74.60950714920719], // Бишкек
          zoom: 17,
        });

        // @ts-ignore
        window.DG.marker([42.87551961902157, 74.60950714920719])
          .addTo(map)
          .bindPopup(
            "Бюро переводов Эталон<br/>ул. К.Тыныстанова, 231, 2 этаж"
          );
      });
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div id="map" className="w-full h-80 md:h-96 rounded-lg shadow-md"></div>
  );
};

export default ContactMap;
