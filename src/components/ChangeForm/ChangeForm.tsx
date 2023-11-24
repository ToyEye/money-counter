import { useState, ChangeEvent, FormEvent } from "react";
import { useDispatch } from "react-redux";

import { Form, FormWrapper, Button } from "./ChangeForm.styled";
import ButtonClose from "../ButtonClose/ButtonClose";

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
  const [date, setDate] = useState(operation.date);

  const onValueChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;

    switch (name) {
      case "price":
        setPrice(value);
        break;

      case "description":
        setDescription(value);
        break;

      case "date":
        setDate(value);
        break;

      default:
        break;
    }
  };

  const onSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    toggleModal();

    const newChanges = { price, description, date, id: operation.id, type };

    dispatch(changeExpense({ type, newChanges }));
  };

  return (
    <FormWrapper>
      <ButtonClose onClick={toggleModal} />
      <Form onSubmit={onSubmit}>
        <label>
          Price
          <input
            type="text"
            value={price}
            name="price"
            onChange={onValueChange}
          />
        </label>
        <label>
          Description
          <input
            type="text"
            value={description}
            name="description"
            onChange={onValueChange}
          />
        </label>
        <label>
          Date
          <input
            type="date"
            value={date}
            name="date"
            onChange={onValueChange}
          />
        </label>
        <Button type="submit">change</Button>
      </Form>
    </FormWrapper>
  );
};

export default ChangeForm;
