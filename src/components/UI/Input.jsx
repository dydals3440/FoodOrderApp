import classes from './Input.module.css';

const Input = (props) => {
  return (
    <div className={classes.input}>
      {/* htmlFor, id를 맞춰주는게 중요 */}
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* 모든 props을 스프레드 연산자로 받아옴 */}
      <input {...props.input} />
    </div>
  );
};

export default Input;
