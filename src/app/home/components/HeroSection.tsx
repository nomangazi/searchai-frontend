const HeroSection = () => {
  return (
    <div id="home" className="hero bg-blue-600 text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Face Search AI - Find Faces Quickly and Easily</h2>
        <p className="text-lg mb-6">
          Upload an image and identify faces in seconds. Try now and see the power of AI at work.
        </p>
        <button
          className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-md mr-4"
          onClick={() => "window.location.href='#upload'"}
        >
          Try Now
        </button>
        <button
          className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-md"
          // onclick="window.location.href='https://play.google.com/store'"
          onClick={() => "window.location.href='https://play.google.com/store'"}
        >
          Download the App
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
