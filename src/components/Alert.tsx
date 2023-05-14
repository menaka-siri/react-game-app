import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const Alert = ({ children} : Props) => {
  return (
    <div className="alert alert-primary" role="alert">
      {children} A simple primary alert—check it out!
    </div>
  );
};

export default Alert;
