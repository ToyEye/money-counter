import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useFormik } from "formik";

import Section from "../../../Section/Section";
import Container from "../../../Container/Container";

const SignUpForm = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const auth = getAuth();

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      createUserWithEmailAndPassword(auth, values.email, values.password)
        .then((credential) => {
          const user = credential.user;
          console.log(user);
        })
        .catch((error) => console.warn(error));
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
