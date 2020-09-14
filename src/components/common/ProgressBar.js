import React from "react";
import { useSelector } from "react-redux";
const ProgressBar = (props) => {
  const loading = useSelector((state) => state.auth.loading);
  let progressBar = null;
  if (loading) {
    progressBar = (
      <div className="w-full -mt-3">
        <div clasNames="w-full overflow-hidden">
          <div className="w-1/2 inline-block relative animate-progress h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent"></div>
        </div>
      </div>
    );
  }
  return progressBar;
};

export default ProgressBar;
