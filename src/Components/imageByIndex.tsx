export const images: string[] = [
  "../../imageSlider/IMG_1082 3.png",
  "/imageSlider/LB_CC23C_Caleb_2_B 1.png",
  "/imageSlider/Photo_Dec_13.png",
  "/imageSlider/Photo_Mar_29.jpg",
];

const imageByIndex = (index: number): string => images[index % images.length];

export default imageByIndex;
