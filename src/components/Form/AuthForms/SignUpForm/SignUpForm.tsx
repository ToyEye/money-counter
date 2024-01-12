import { useFormik } from "formik";

import { useAppDispatch } from "/@/hooks";
import { signUpUser } from "/@/redux/auth/operation";

import {
  Section,
  Container,
  Form,
  Label,
  InputStyled,
  Button,
} from "/@/components/reusable";

const SignUpForm = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      dispatch(signUpUser(values));
    },
  });

  return (
    <Section>
      <Container>
        <Form onSubmit={formik.handleSubmit} className="authForm">
          <Label className="authForm">
            Name
            <InputStyled
              className="authForm"
              type="text"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </Label>
          <Label className="authForm">
            Email
            <InputStyled
              className="authForm"
              type="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </Label>
          <Label className="authForm">
            Password
            <InputStyled
              className="authForm"
              type="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </Label>
          <Button className="authFormBtn" type="submit">
            Sign up
          </Button>
        </Form>
      </Container>
    </Section>
  );
};

export default SignUpForm;
