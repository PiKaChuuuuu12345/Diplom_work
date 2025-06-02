"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    DG: any;
  }
}

const ContactMap = () => {
  const mapInstanceRef = useRef(null);
  const containerRef = useRef(null);
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    if (!document.querySelector('script[src*="maps.api.2gis.ru"]')) {
      const script = document.createElement("script");
      script.src = "https://maps.api.2gis.ru/2.0/loader.js?pkg=full";
      script.async = true;
      script.defer = true;
      scriptRef.current = script;

      script.onload = initializeMap;
      document.body.appendChild(script);
    } else {
      initializeMap();
    }

    function initializeMap() {
      if (window.DG) {
        window.DG.then(function () {
          if (mapInstanceRef.current) {
            return;
          }

          const container = document.getElementById("dgis-map");

          if (container && container.childElementCount === 0) {
            const map = window.DG.map("dgis-map", {
              center: [42.87551961902157, 74.60950714920719], // Бишкек
              zoom: 17,
              fullscreenControl: false,
              zoomControl: true,
            });

            mapInstanceRef.current = map;

            window.DG.marker([42.87551961902157, 74.60950714920719])
              .addTo(map)
              .bindPopup(
                "Бюро переводов Эталон<br/>ул. К.Тыныстанова, 231, 2 этаж"
              );
          }
        });
      }
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }

      if (scriptRef.current && document.body.contains(scriptRef.current)) {
        document.body.removeChild(scriptRef.current);
      }
    };
  }, []);

  return (
    <div
      id="dgis-map"
      ref={containerRef}
      className="w-full h-80 md:h-96 rounded-lg shadow-md"
    ></div>
  );
};

export default ContactMap;
