import React from "react";

function StudentsIcon() {
  return (
    <div>
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect width="100" height="100" fill="url(#pattern0_819_6320)" />
        <defs>
          <pattern
            id="pattern0_819_6320"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_819_6320" transform="scale(0.01)" />
          </pattern>
          <image
            id="image0_819_6320"
            width="100"
            height="100"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
    </div>
  );
}

export default StudentsIcon;
