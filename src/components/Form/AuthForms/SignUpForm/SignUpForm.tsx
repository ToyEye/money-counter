import { useFormik } from "formik";

import { useAppDispatch } from "/@/hooks/useReduxHooks";
import { signUpUser } from "/@/redux/auth/operation";

import Section from "/@/components/reusable/Section/Section";
import Container from "/@/components/reusable/Container/Container";

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
        <form onSubmit={formik.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </label>
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

export default SignUpForm;
