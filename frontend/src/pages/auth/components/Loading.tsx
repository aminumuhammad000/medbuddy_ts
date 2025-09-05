import style from "./Loading.module.css";
const Loading = () => {
  return (
    <div className={style.Loading}>
      <span className={style.loader}></span>
    </div>
  );
};

export default Loading;
