import { Heading } from "../../reusable";
import { Footer } from "./Footer.styled";

const FooterLayout = () => {
  return (
    <Footer>
      <Heading as="h3" color="red" type="custom">
        Money counter By Oleksii Korotenko
      </Heading>
    </Footer>
  );
};

export default FooterLayout;
