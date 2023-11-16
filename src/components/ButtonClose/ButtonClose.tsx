import { Button } from "./ButtonClose.styled";

type Props = {
  onClick: () => void;
};

const ButtonClose = ({ onClick }: Props) => {
  return (
    <Button type="button" onClick={onClick}>
      X
    </Button>
  );
};

export default ButtonClose;
