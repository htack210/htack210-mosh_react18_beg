import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: () => void;
}

const MyButton = ({ children, onClick }: Props) => {
  return (
    <button
      type="button"
      className="btn-solid theme-primary"
      onClick={onClick}
    >{children}</button>
  );
};

export default MyButton;