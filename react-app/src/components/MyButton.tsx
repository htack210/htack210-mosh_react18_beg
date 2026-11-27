import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
  color: string;
  onClick: () => void;
}

const MyButton = ({ children, onClick, color }: Props) => {
  return (
    <button
      type="button"
      className={'btn  btn-' + color}
      onClick={onClick}
    >{children}</button>
  );
};

export default MyButton;