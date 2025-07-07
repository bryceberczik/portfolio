import { IconProp } from "@fortawesome/fontawesome-svg-core";

export type CardType = {
  handleShuffle: any;
  testimonial: string;
  position: any;
  imgUrl: string;
  author: string;
};

export type AboutType = {
  heading: string;
  description: string;
  icon: IconProp;
};

export type FormType = {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  isSwitching?: boolean;
  setIsSwitching: React.Dispatch<React.SetStateAction<boolean>>;
};
