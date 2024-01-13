import { nanoid } from "nanoid";
import { useFormik } from "formik";
import DatePicker from "react-datepicker";

import { formatDate } from "/@/helpers";
import { useAppDispatch } from "/@/hooks";

import {
  InputStyled,
  Section,
  Button,
  Form,
  Label,
} from "/@/components/reusable";

import { TType } from "/@/types";

import { addNoteE } from "/@/redux/money/operations";

const AddForm = ({ type }: TType) => {
  const dispatch = useAppDispatch();

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

      dispatch(addNoteE({ type, newNote }));
    },
  });

  return (
    <Section>
      <Form onSubmit={formik.handleSubmit} className="addForm">
        <Label className="addForm ">
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
        <Label className="addForm ">
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
        <Label className="addForm ">
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
      </Form>
    </Section>
  );
};

export default AddForm;
