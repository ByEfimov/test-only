import React, { useState } from "react";
import Circle from "./circle.tsx";
import Years from "./years.tsx";
import PaginationButtons from "./paginationButtons.tsx";
import SliderNews from "./sliderNews.tsx";

export interface Data {
  value: number;
  startYear: number;
  endYear: number;
  news: { year: number; description: string }[];
}
const CircleComponent: React.FC<{ data: Data[] }> = ({ data }) => {
  const [activePoint, setActivePoint] = useState<number>(6);

  return (
    <>
      <Years points={data} activePoint={activePoint} />
      <Circle
        points={data}
        setActivePoint={setActivePoint}
        activePoint={activePoint}
      />
      <PaginationButtons
        points={data}
        activePoint={activePoint}
        setActivePoint={setActivePoint}
      />
      <SliderNews data={data} activePoint={activePoint} />
    </>
  );
};
export default CircleComponent;
