import React from "react";

export const Avatar = ({ image, altDescription }) => (
  <div>
    <img src={image} alt={altDescription} />
  </div>
);
