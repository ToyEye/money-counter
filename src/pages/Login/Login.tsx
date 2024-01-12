import { Helmet } from "react-helmet";
import { SignInForm } from "/@/components/Form";

const Login = () => {
  return (
    <div>
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <SignInForm />
    </div>
  );
};

export default Login;
