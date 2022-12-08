import React from "react";

const LoadingContainer = ({ children, loading }) => {
  return loading ? (
    <div className="status-card">
      <h1>loading...</h1>
    </div>
  ) : (
    <div>{children}</div>
  );
};

export default LoadingContainer;
