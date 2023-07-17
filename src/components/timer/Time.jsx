import style from "./timer.module.scss";
const Time = ({ days, hours, minutes, seconds }) => {
  return (
    <div className={style.voting}>
      <h1>VOITING ENDS IN</h1>
      <div className={style.timer}>
        <div className={style.digit_text}>
          <span className={style.digit}>{days}:</span>
          <span className={style.text}>days</span>
        </div>
        <div className={style.digit_text}>
          <span className={style.digit}>{hours}:</span>
          <span className={style.text}>Hours</span>
        </div>
        <div className={style.digit_text}>
          <span className={style.digit}>{minutes}:</span>
          <span className={style.text}>minutes</span>
        </div>
        <div className={style.digit_text}>
          <span className={style.digit}>{seconds}</span>
          <span className={style.text}>seconds</span>
        </div>
      </div>
    </div>
  );
};

export default Time;
