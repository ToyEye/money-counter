import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Money Counter</title>
        <link rel="canonical" href="https://money-counter-nine.vercel.app" />
      </Helmet>
      Home
    </div>
  );
};

export default Home;
