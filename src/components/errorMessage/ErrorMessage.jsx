import css from "./ErrorMessage.module.css";

const errorMessage = ({ children }) => {
  return (
    <div className={css.errorMessage}>
      <p>{children}</p>
    </div>
  );
};
export default errorMessage;
