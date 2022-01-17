import React from "react";

const Home = () => {
  const handleApiCall = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/v1");
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.error("Error, could not proxy to API", err);
    }
  };

  return (
    <>
      <div className="text-blue-800">Home page</div>
      <button onClick={handleApiCall}>Fetch Data</button>
    </>
  );
};

export default Home;
