import { useFormik } from "formik";

import Section from "/@/components/reusable/Section/Section";
import Container from "/@/components/reusable/Container/Container";

import { loginUser } from "/@/redux/auth/operation";
import { useAppDispatch } from "/@/hooks/useReduxHooks";

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
        <form onSubmit={formik.handleSubmit}>
          <label>
            Email
            <input
              type="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </label>
          <button type="submit">Sign up</button>
        </form>
      </Container>
    </Section>
  );
};

export default LoginForm;
