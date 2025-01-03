import React from "react";
import { indicesData } from "../context/indices";

const IndianIndices = () => {
  return (
    <div className="overflow-x-auto">
      <div className="flex gap-6 w-max">
        {indicesData.map((index, idx) => (
          <div
            key={idx}
            className="min-w-[200px] border rounded-lg p-4 text-xs font-medium bg-white "
          >
            <div>
              <p>{index.name}</p>
            </div>
            <div className="flex flex-row gap-2 py-2 ">
              <p className="my-0">{index.value}</p>
              <p className={`${index.changeClass} my-0 font-semibold`}>
                {index.change}
                {index.percentage}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndianIndices;
