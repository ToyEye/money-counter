import { nanoid } from "nanoid";
import { useFormik } from "formik";
import DatePicker from "react-datepicker";

import { useDispatch } from "react-redux/es/exports";
import { formatDate } from "../../../helpers/formateDate";

import Section from "../../reusable/Section/Section";
import { FormStyled, Label, Input, SubmitBtn } from "./Form.styled";

import { addNote } from "../../../redux/money/reducer";

import { TType } from "../../../types/types";

const Form = ({ type }: TType) => {
  const dispatch = useDispatch();

  const initialValues = {
    price: "",
    description: "",
    date: new Date(),
  };

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      const newNote = {
        ...values,
        id: nanoid(),
        date: formatDate(values.date),
        type,
      };

      dispatch(addNote({ type, newNote }));
    },
  });

  return (
    <Section>
      <FormStyled onSubmit={formik.handleSubmit}>
        <Label>
          <span>Type price</span>
          <Input
            id="price"
            name="price"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.price}
          />
        </Label>
        <Label>
          <span>Type description</span>
          <Input
            id="description"
            name="description"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
        </Label>
        <Label>
          <span>Pick date</span>
          <DatePicker
            showIcon
            id="date"
            name="date"
            onChange={(date) => formik.setFieldValue("date", date)}
            selected={formik.values.date}
            customInput={<Input />}
          />
        </Label>
        <SubmitBtn type="submit" goal={type}>
          Add
        </SubmitBtn>
      </FormStyled>
    </Section>
  );
};

export default Form;
