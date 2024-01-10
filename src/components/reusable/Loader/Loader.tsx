import { Blocks } from "react-loader-spinner";
import { LoaderWrapper } from "./Loader.styled";

const Loader = () => {
  return (
    <LoaderWrapper>
      <Blocks
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        visible={true}
      />
    </LoaderWrapper>
  );
};

export default Loader;
