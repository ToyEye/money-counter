import { Helmet } from "react-helmet";
import { Heading, Section } from "/@/components/reusable";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Money Counter</title>
        <link rel="canonical" href="https://money-counter-nine.vercel.app" />
      </Helmet>

      <Section>
        <Heading as="h1" className="primaryTitle" primary="primary">
          Welcome to money counter
        </Heading>
      </Section>
    </div>
  );
};

export default Home;
