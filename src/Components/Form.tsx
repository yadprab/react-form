import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { IInput } from "../Interface/interface";
import { Field } from "./Field";
import { PasswordComp } from "./PasswordCom";
const schema = yup
  .object({
    fullName: yup.string().required("This field is required"),
    email: yup
      .string()
      .email("enter a valid email")
      .required("This field is required"),

    password: yup
      .string()

      .required("Please Enter your password"),

    confirmPassword: yup
      .string()
      .required("Please Enter your password")
      .oneOf([yup.ref("password"), null], "Password does'nt match"),
  })
  .required();
const Form = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IInput) => console.log(data);

  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <Field
        fieldObj={{
          id: "fullName",
          name: "fullName",
          label: "fullName",
          type: "text",
        }}
        register={register}
        er={errors}
      />
      <Field
        fieldObj={{
          id: "email",
          name: "email",
          label: "E-MAIL",
          type: "email",
        }}
        register={register}
        er={errors}
      />
      <PasswordComp
        fieldObj={{
          id: "password",
          name: "password",
          label: "Password",
          type: "password",
        }}
        register={register}
        er={errors}
      />
      <PasswordComp
        fieldObj={{
          id: "confirmPassword",
          name: "confirmPassword",
          label: "CONFIRM-PASSWORD",
          type: "password",
        }}
        register={register}
        er={errors}
      />

      <button type="submit" id="submit">
        Register
      </button>
    </form>
  );
};
export { Form };
