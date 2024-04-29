import './CutomLoader.css';

const CustomLoader = () => {
  return (
    <div className="loader">
      <div className="circleRotation"></div>
      <img className="loaderImg" src="/public/loader.png" alt="" />
    </div>
  );
};

export default CustomLoader;
