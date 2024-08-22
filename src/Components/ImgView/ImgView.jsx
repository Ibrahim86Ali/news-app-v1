import React from "react";
import PropTypes from "prop-types";

export function ImgView({ image, id, title }) {
  return (
    <div>
      <p>{id}</p>
      <p>{title}</p>
      <img
        className="   cursor-pointer hover:translate-y-0.1  hover:border-4 hover:border-t-6 border-2 border-red-600 duration-500 w-88 object-cover h-28 sm:h-48 md:h-64"
        style={{ height: 400, width: 200 }}
        src={blob}
        alt="any"
      />
    </div>
  );
}

ImgView.propTypes = {
  image: PropTypes.string,
  id: PropTypes.string,
  title: PropTypes.string,
};
