/* eslint-disable no-undef */
// eslint-disable-next-line
/*eslint no-restricted-globals: ["error", "event"]*/

import React, { useEffect } from "react";
import "./index.scss";

// Importing TagCloud package
import TagCloud from "TagCloud";

const TextShpere = () => {
  // Animation settings for Text Cloud
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const texts = [
        "HTML",
        "CSS",
        "SASS",
        "JavaScript",
        "React",
        "Python",
        "SailPoint",
        "NodeJS",
        "IDM",
        "Jquery",
        "DJango",
        "AJAX",
        "MySQL",
      ];

      const options = {
        radius: 250,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };

      TagCloud(container, texts, options);
    };
  }, []);

  return (
    <>
      <div className="text-shpere">
        {/* span tag className must be "tagcloud"  */}
        <span className="tagcloud"></span>
      </div>
    </>
  );
};

export default TextShpere;