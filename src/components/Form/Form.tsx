import { nanoid } from "nanoid";
import { useFormik } from "formik";
import { useDispatch } from "react-redux/es/exports";

import Section from "../Section/Section";
import { addNote } from "../../redux/money/reducer";

import { TType } from "../../types/types";

const Form = ({ type }: TType) => {
  const dispatch = useDispatch();

  const initialValues = {
    price: "",
    description: "",
    date: "",
  };

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      const newNote = { ...values, id: nanoid() };

      dispatch(addNote({ type, newNote }));
    },
  });

  return (
    <Section>
      <form onSubmit={formik.handleSubmit}>
        <label>
          <input
            id="price"
            name="price"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.price}
          />
        </label>
        <label>
          <input
            id="description"
            name="description"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
        </label>
        <label>
          <input
            id="date"
            name="date"
            type="date"
            onChange={formik.handleChange}
            value={formik.values.date}
          />
        </label>
        <button type="submit"> sub</button>
      </form>
    </Section>
  );
};

export default Form;
