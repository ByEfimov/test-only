import React from "react";
import { Data } from ".";
import ArrowIcon from "../../assets/arrowIcon.svg";

const PaginationButtons = ({
  activePoint,
  points,
  setActivePoint,
}: {
  activePoint: number;
  points: Data[];
  setActivePoint: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const disableLeftButton = points[0].value === activePoint;
  const disableRightButton = points.length === activePoint;

  return (
    <div className="paginationButtons">
      <div className="pages">
        {activePoint}/{points.length}
      </div>
      <div className="buttons">
        <button
          onClick={() => !disableLeftButton && setActivePoint(activePoint - 1)}
          className={`button buttonLeft ${
            disableLeftButton && "buttonDisable"
          }`}
        >
          <img src={ArrowIcon} />
        </button>
        <button
          onClick={() => !disableRightButton && setActivePoint(activePoint + 1)}
          className={`button buttonRight ${
            disableRightButton && "buttonDisable"
          }`}
        >
          <img src={ArrowIcon} />
        </button>
      </div>
    </div>
  );
};
export default PaginationButtons;
