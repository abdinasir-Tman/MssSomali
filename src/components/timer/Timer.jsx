import Countdown from "react-countdown";
import Time from "./Time";
const Timer = () => {
  // Random component
  const Completionist = () => <span>You are good to go!</span>;

  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <Time days={days} hours={hours} minutes={minutes} seconds={seconds} />
      );
    }
  };
  return <Countdown date={Date.now() + 14515200000} renderer={renderer} />;
};

export default Timer;
