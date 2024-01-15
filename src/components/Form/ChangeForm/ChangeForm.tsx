import { useState, ChangeEvent, FormEvent } from "react";

import DatePicker from "react-datepicker";
import { MdClose } from "react-icons/md";

import { FormWrapper, RadioBtnThumb } from "./ChangeForm.styled";

import { Button, Form, InputStyled, Label } from "/@/components/reusable";

import { formatDate } from "/@/helpers/";
import { changeExpense } from "/@/redux/money/reducer";
import { changeNote } from "/@/redux/money/operations";
import { IValues } from "/@/types/";
import { useAppDispatch } from "/@/hooks";

type Props = {
  operation: IValues;
  type: string;
  toggleModal: () => void;
};

const ChangeForm = ({ operation, toggleModal, type }: Props) => {
  const dispatch = useAppDispatch();

  const [price, setPrice] = useState(operation.price);
  const [description, setDescription] = useState(operation.description);
  const [date, setDate] = useState(new Date(operation.date));
  const [changedType, setChangedType] = useState(operation.type);

  const onValueChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;

    switch (name) {
      case "changedPrice":
        setPrice(value);
        break;

      case "changedDescription":
        setDescription(value);
        break;

      case "type":
        setChangedType(value);
        break;

      default:
        break;
    }
  };

  const onSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    toggleModal();

    const changes = {
      price,
      description,
      date: formatDate(date),
      id: operation.id,
      type,
      changedType,
    };

    dispatch(changeNote({ changes, type }));

    dispatch(changeExpense({ type, changes }));
  };

  return (
    <FormWrapper>
      <Button
        onClick={toggleModal}
        type="string"
        className="buttonClose"
        typeofbtn="roundBtn"
      >
        <MdClose size={20} />
      </Button>

      <Form onSubmit={onSubmit} className="changeForm">
        <Label className="changeForm">
          Price
          <InputStyled
            className="changeForm"
            type="text"
            value={price}
            name="changedPrice"
            onChange={onValueChange}
          />
        </Label>
        <Label className="changeForm">
          Description
          <InputStyled
            className="changeForm"
            type="text"
            value={description}
            name="changedDescription"
            onChange={onValueChange}
          />
        </Label>
        <Label className="changeForm">
          Date
          <DatePicker
            showIcon
            id="date"
            name="changedDate"
            onChange={(date) => date && setDate(date)}
            selected={date}
            customInput={<InputStyled className="changeForm" />}
          />
        </Label>
        <RadioBtnThumb>
          <p>Type of operation</p>
          <div>
            <label>
              Expenses
              <input
                type="radio"
                name="type"
                onChange={onValueChange}
                value={"expenses"}
                // checked={operation.type === "expenses"}
              />
              <span></span>
            </label>
            <label>
              Income
              <input
                type="radio"
                name="type"
                onChange={onValueChange}
                value={"income"}
                // checked={operation.type === "income"}
              />
              <span></span>
            </label>
          </div>
        </RadioBtnThumb>
        <Button type="submit" typeofbtn="changeForm">
          change
        </Button>
      </Form>
    </FormWrapper>
  );
};

export default ChangeForm;
