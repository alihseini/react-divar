import { Circles } from "react-loader-spinner";

function MiniLoader() {
  return (
    <div>
      <Circles
        height="80"
        width="80"
        color="red"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}

export default MiniLoader;
