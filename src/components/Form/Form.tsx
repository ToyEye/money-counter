import React from "react";
import { useFormik } from "formik";

interface IValues {
  price: string;
  description: string;
  date: string;
}

type Props = {
  onSubmit: (args: IValues) => void;
};

const initialValues: IValues = {
  price: "",
  description: "",
  date: "",
};

const Form = ({ onSubmit }: Props) => {
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values);
      onSubmit(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label>
        <input id="price" name="price" type="text" />
      </label>
      <label>
        <input id="description" name="description" type="text" />
      </label>
      <label>
        <input id="date" name="date" type="date" />
      </label>
    </form>
  );
};

export default Form;
