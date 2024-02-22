import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import classNames from "classnames";
import "./styles.scss";
import { Data } from ".";

const Circle: React.FC<{
  points: Data[];
  setActivePoint: React.Dispatch<React.SetStateAction<number>>;
  activePoint: number;
}> = ({ points, setActivePoint, activePoint }) => {
  const currentPoint = points[activePoint - 1];

  useEffect(() => {
    function rotationCircle() {
      gsap.to(".point", { rotation: 0 });
      gsap.to(`.point[value="${currentPoint.value}"]`, {
        rotation: 360,
        transformOrigin: "center center",
        duration: 2,
        ease: "linear",
      });
      gsap.to(".circle", {
        rotation: -360 * (currentPoint.value / points.length),
        duration: 1,
      });
    }

    rotationCircle();
  }, [currentPoint]);

  const calculatePosition = (index: number, totalPoints: number) => {
    const angle = (index / totalPoints) * 360;
    const radius = 265.5;
    const radians = (angle * Math.PI) / 180;
    return {
      x: radius * Math.cos(radians) + 265.5,
      y: radius * Math.sin(radians) + 265.5,
    };
  };

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.currentTarget as HTMLElement;
    gsap.to(target, { scale: 1, duration: 0.3 });
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.currentTarget as HTMLElement;
    gsap.to(target, { scale: 1, duration: 0.3 });
  };

  return (
    <div className={"circle"}>
      {points.map((point, index) => {
        const { x, y } = calculatePosition(index, points.length);
        const isTopRight = activePoint === point.value;
        return (
          <div
            key={index}
            className={classNames(
              activePoint === point.value && "active",
              "point"
            )}
            onMouseEnter={(event) => handleMouseEnter(event)}
            onMouseLeave={(event) => handleMouseLeave(event)}
            style={{
              left: `${x}px`,
              top: `${y}px`,
              zIndex: isTopRight ? 1 : 0,
            }}
            onClick={() => setActivePoint(point.value)}
          >
            <div className="pointText">
              <div
                className="textContent"
                style={{
                  transform: `rotate(${
                    (360 / points.length) * point.value
                  }deg)`,
                }}
              >
                {point.value}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Circle;
