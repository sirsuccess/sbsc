import React, { useState } from "react";
import { css } from "@emotion/core";
// First way to import
import { ClipLoader } from "react-spinners";
// Another way to import. This is recommended to reduce bundle size
// import ClipLoader from "react-spinners/ClipLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function AwesomeComponent() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="sweet-loading">
      <ClipLoader
        css={override}
        size={150}
        //size={"150px"} this also works
        color={"#123abc"}
        loading={loading}
      />
    </div>
  );
}

export default AwesomeComponent;
