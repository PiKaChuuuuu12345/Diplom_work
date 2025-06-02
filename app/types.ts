export type Service = {
  id: number;
  title: string;
  description: string;
  icon: string;
  price: number;
};

export type Testimonial = {
  id: number;
  name: string;
  company: string;
  text: string;
  image: string;
};

export type Language = {
  code: string;
  name: string;
  flag: string;
};

declare global {
  interface Window {
    DG: {
      then: (cb: () => void) => void;
      map: (
        id: string,
        options: {
          center: [number, number];
          zoom: number;
          fullscreenControl?: boolean;
          zoomControl?: boolean;
        }
      ) => DGMap;
      marker: (coords: [number, number]) => DGMarker;
    };
  }
}

interface DGMap {
  remove: () => void;
}

interface DGMarker {
  addTo: (map: DGMap) => DGPopup;
}

interface DGPopup {
  bindPopup: (text: string) => void;
}
