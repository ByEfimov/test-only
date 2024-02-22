import React from "react";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { Data } from ".";

const Years = ({
  points,
  activePoint,
}: {
  points: Data[];
  activePoint: number;
}) => {
  const currentPoint = points[activePoint - 1];
  const startYearRef = useRef(null);
  const endYearRef = useRef(null);

  useEffect(() => {
    gsap.to(startYearRef.current, {
      duration: 1,
      innerText: currentPoint.startYear,
    });
    gsap.to(endYearRef.current, {
      duration: 1,
      innerText: currentPoint.endYear,
    });
  }, [currentPoint]);

  return (
    <div className="Years">
      <div className="startYear" ref={startYearRef}>
        0
      </div>
      <div className="endYear" ref={endYearRef}>
        0
      </div>
    </div>
  );
};

export default Years;
