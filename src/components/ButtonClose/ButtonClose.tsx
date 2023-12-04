import { MdClose } from "react-icons/md";
import { Button } from "./ButtonClose.styled";

type Props = {
  onClick: () => void;
};

const ButtonClose = ({ onClick }: Props) => {
  return (
    <Button type="button" onClick={onClick}>
      <MdClose size={20} />
    </Button>
  );
};

export default ButtonClose;
