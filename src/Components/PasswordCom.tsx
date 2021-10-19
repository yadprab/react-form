import { useState } from "react";
import { IField } from "../Interface/interface";
import { Error } from "./Error";
import { Eye } from "./Eye";

const PasswordComp = ({
  fieldObj,
  register,
  er,
}: {
  fieldObj: IField;
  register: any;
  er: any;
}) => {
  const { id, name, type, label } = fieldObj;
  const [Show, setShow] = useState({ state: false });
  const handleClick = () => {
    setShow({
      state: !Show.state,
    });
  };
  return (
    <div className="form--control">
      <label htmlFor={id}>{label}</label>
      <div className="pass--wrapper">
        <input
          type={Show.state ? "text" : type}
          name={name}
          id={id}
          {...register(`${id}`)}
        />
        <Error message={er[id]?.message} />
        <button id="show--pass" onClick={handleClick} type="button">
          <Eye />
        </button>
      </div>
    </div>
  );
};
export { PasswordComp };
