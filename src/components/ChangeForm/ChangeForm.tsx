import { useState, ChangeEvent, FormEvent } from "react";
import { useDispatch } from "react-redux";
import DatePicker from "react-datepicker";

import {
  Form,
  FormWrapper,
  Button,
  LabelStyled,
  InputStyled,
} from "./ChangeForm.styled";
import ButtonClose from "../ButtonClose/ButtonClose";

import { formatDate } from "../../helpers/formateDate";
import { changeExpense } from "../../redux/money/reducer";
import { IValues } from "../../types/types";

type Props = {
  operation: IValues;
  type: string;
  toggleModal: () => void;
};

const ChangeForm = ({ operation, toggleModal, type }: Props) => {
  const dispatch = useDispatch();

  const [price, setPrice] = useState(operation.price);
  const [description, setDescription] = useState(operation.description);
  const [date, setDate] = useState(new Date(operation.date));
  const [changedType, setChangedType] = useState(operation.type);

  const onValueChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;

    switch (name) {
      case "price":
        setPrice(value);
        break;

      case "description":
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

    dispatch(changeExpense({ type, changes }));
  };

  return (
    <FormWrapper>
      <ButtonClose onClick={toggleModal} />
      <Form onSubmit={onSubmit}>
        <LabelStyled>
          Price
          <InputStyled
            type="text"
            value={price}
            name="changedPrice"
            onChange={onValueChange}
          />
        </LabelStyled>
        <LabelStyled>
          Description
          <InputStyled
            type="text"
            value={description}
            name="changedDescription"
            onChange={onValueChange}
          />
        </LabelStyled>
        <LabelStyled>
          Date
          <DatePicker
            showIcon
            id="date"
            name="changedDate"
            onChange={(date) => date && setDate(date)}
            selected={date}
            customInput={<InputStyled />}
          />
        </LabelStyled>
        <div>
          Type of operation
          <label>
            Expenses
            <input
              type="radio"
              name="type"
              onChange={onValueChange}
              value={"expenses"}
            />
          </label>
          <label>
            Income
            <input
              type="radio"
              name="type"
              onChange={onValueChange}
              value={"income"}
            />
          </label>
        </div>
        <Button type="submit">change</Button>
      </Form>
    </FormWrapper>
  );
};

export default ChangeForm;
