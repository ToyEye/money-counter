import { Helmet } from "react-helmet";

import { SignUpForm } from "/@/components/Form/";

const SignUp = () => {
  return (
    <div>
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <SignUpForm />
    </div>
  );
};

export default SignUp;
