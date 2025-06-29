import { Oval } from "react-loader-spinner";

function Loader() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Oval
        visible={true}
        height="80"
        width="80"
        color="red"
        secondaryColor="red"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default Loader;
