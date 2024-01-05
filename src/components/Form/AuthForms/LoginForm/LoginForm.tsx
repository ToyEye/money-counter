import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "firebase/app";

import { useFormik } from "formik";

import Section from "../../../Section/Section";
import Container from "../../../Container/Container";

const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const auth = getAuth();

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      try {
        const { user } = await signInWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        console.log(user);
      } catch (error: unknown) {
        if (error instanceof FirebaseError) {
          console.log(error.message);
        }
      }
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
