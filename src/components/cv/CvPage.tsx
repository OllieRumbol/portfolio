import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { isMobile } from "react-device-detect";
import Pdf from "../../assets/Oliver Bourne CV.pdf";
import "../../style/Cv.css";

const CvPage = () => {
  const history = useHistory();

  useEffect(() => {
    if (isMobile) {
      let mobileLink = document.getElementById("mobileLink");
      if (mobileLink !== null) {
        mobileLink.click();
      }

      history.push("/");
    } else {
      let webLink = document.getElementById("webLink");
      if (webLink !== null) {
        webLink.click();
      }
    }
  }, [history]);

  if (isMobile) {
    return (
      <a
        id="mobileLink"
        href={Pdf}
        target="_blank"
        rel="noreferrer"
        className="hideLink"
        download
      >
        CV
      </a>
    );
  } else {
    return (
      <a id="webLink" href={Pdf} className="hideLink">
        CV
      </a>
    );
  }
};

export default CvPage;
