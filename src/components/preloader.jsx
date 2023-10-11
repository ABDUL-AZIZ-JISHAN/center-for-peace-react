
const Preloader = ({loading }) => {
  return (
    <div className={loading ? "preloader" :  "preloader in_active"}>
      <div className="main-loader">
        <span className="loader1" />
        <span className="loader2" />
        <span className="loader3" />
      </div>
    </div>
  );
};

export default Preloader;
