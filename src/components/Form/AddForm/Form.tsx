import { nanoid } from "nanoid";
import { useFormik } from "formik";
import DatePicker from "react-datepicker";

import { useDispatch } from "react-redux/es/exports";
import { formatDate } from "/@/helpers/formateDate";

import Section from "/@/components/reusable/Section/Section";
import Button from "/@/components/reusable/Button/Button";
import { InputStyled } from "/@/components/reusable/Input/Input.styled";

import { FormStyled, Label } from "./Form.styled";

import { addNote } from "/@/redux/money/reducer";

import { TType } from "/@/types/types";

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
          <InputStyled
            className="addForm"
            id="price"
            name="price"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.price}
          />
        </Label>
        <Label>
          <span>Type description</span>
          <InputStyled
            className="addForm"
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
            customInput={<InputStyled className="addForm" />}
          />
        </Label>
        <Button type="submit" goal={type} className="addMoney">
          Add
        </Button>
      </FormStyled>
    </Section>
  );
};

export default Form;
