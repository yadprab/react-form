import { IField } from "../Interface/interface";
import { Error } from "./Error";

const Field = ({
  fieldObj,
  register,
  er,
}: {
  fieldObj: IField;
  register: any;
  er: any;
}) => {
  const { id, name, type, label } = fieldObj;

  return (
    <div className="form--control">
      <label htmlFor={id}>{label}</label>
      <input type={type} name={name} id={id} {...register(`${id}`)} />
      <Error message={er[id]?.message} />
    </div>
  );
};
export { Field };
