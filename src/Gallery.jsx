import React from "react";
import { useGlobalContext } from "./Context";

export default function Gallery() {
  const { data, total } = useGlobalContext();
  return (
    <>
      {total > 0 ? (
        <div className="gallery-container">
          {data.map((image) => {
            const url = image.urls.small;
            return (
              <img
                src={url}
                alt={image.alt_description}
                className="img"
                key={image.id}
              />
            );
          })}
        </div>
      ) : (
        <h5 className="no-result">No Results Founded</h5>
      )}
    </>
  );
}
