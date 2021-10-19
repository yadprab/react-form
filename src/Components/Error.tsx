import { Icon } from "./Icon";

const Error = ({ message }: { message: string }) => {
  return (
    <>
      <small className="error--message">
        {message}
        {message && <Icon />}
      </small>
    </>
  );
};
export { Error };
