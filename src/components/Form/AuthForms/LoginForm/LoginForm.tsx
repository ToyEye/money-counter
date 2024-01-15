import { useFormik } from "formik";

import {
  Section,
  Container,
  Form,
  Label,
  InputStyled,
  Button,
} from "/@/components/reusable";

import { loginUser } from "/@/redux/auth/operation";
import { useAppDispatch } from "/@/hooks/";

const LoginForm = () => {
  const dispatch = useAppDispatch();

  const initialValues = {
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      dispatch(loginUser({ email: values.email, password: values.password }));
    },
  });

  return (
    <Section>
      <Container>
        <Form onSubmit={formik.handleSubmit} className="authForm">
          <Label className="authForm">
            Email
            <InputStyled
              type="email"
              name="email"
              className="authForm"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </Label>
          <Label className="authForm">
            Password
            <InputStyled
              type="password"
              name="password"
              className="authForm"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </Label>
          <Button typeofbtn="authFormBtn" type="submit">
            Sign up
          </Button>
        </Form>
      </Container>
    </Section>
  );
};

export default LoginForm;
