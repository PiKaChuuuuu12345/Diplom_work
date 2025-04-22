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
