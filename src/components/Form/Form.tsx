import { nanoid } from "nanoid";
import { useFormik } from "formik";
import { IValues } from "../../types/types";

type Props = {
  onSubmit: (args: IValues) => void;
};

const Form = ({ onSubmit }: Props) => {
  const initialValues = {
    price: "",
    description: "",
    date: "",
  };

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      const newNote = { ...values, id: nanoid() };

      onSubmit(newNote);
    },
  });

  return (
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
  );
};

export default Form;
