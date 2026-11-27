import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
  color?: 'primary' | 'secondary' | 'danger' | 'warning' | 'success';
  onClick: () => void;
}

const MyButton = ({ children, onClick, color = 'primary' }: Props) => {
  return (
    <button
      type="button"
      className={'btn  btn-' + color}
      onClick={onClick}
    >{children}</button>
  );
};

export default MyButton;