import { nanoid } from "nanoid";
import { useFormik } from "formik";
import DatePicker from "react-datepicker";
import { ref, runTransaction } from "firebase/database";

import { formatDate } from "/@/helpers";
import { useAppDispatch } from "/@/hooks";

import {
  InputStyled,
  Section,
  Button,
  Form,
  Label,
} from "/@/components/reusable";

import { addNote } from "/@/redux/money/reducer";

import { IValues, TType } from "/@/types";
import { auth, database } from "/@/firebase";

const AddForm = ({ type }: TType) => {
  const dispatch = useAppDispatch();

  const initialValues = {
    price: "",
    description: "",
    date: new Date(),
  };

  function writeUserData(newNote: IValues, uid: string | undefined) {
    const exampleArrayRef = ref(database, `/users/${uid}/money/${type}`);
    runTransaction(exampleArrayRef, (currentData) => {
      if (!currentData) {
        currentData = [];
      }

      currentData.push(newNote);

      return currentData;
    });
  }

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      const newNote = {
        ...values,
        id: nanoid(),
        date: formatDate(values.date),
        type,
      };
      writeUserData(newNote, auth.currentUser?.uid);
      dispatch(addNote({ type, newNote }));
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
