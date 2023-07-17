import style from "./competitor.module.scss";
import { MdHowToVote } from "react-icons/md";
import { useDispatch } from "react-redux";
import { setCompetitor } from "../../features/competitors/CompetitorSlice";
import { handleModal } from "../../features/modalSlice/ModalSlice";
const Competitor = ({ competitor }) => {
  const dispatch = useDispatch();

  const vote_now = () => {
    dispatch(handleModal());
    dispatch(setCompetitor(competitor));
  };
  const backgroundStyle = {
    background: `linear-gradient(rgba(202,22,232,0.2),rgba(255,255,255,0.1)),url(${competitor.Photo})`,

    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className={style.competitor} style={backgroundStyle}>
      <div className={style.info}>
        <span className={style.name}>
          {competitor.FirstName + " " + competitor.LastName}
        </span>
        <span className={style.state}>{competitor.RepresentingState}</span>
        <span className={style.vote_count}>
          Votes: {competitor.NumberofVotes}
        </span>
      </div>
      <div className={style.vote} onClick={vote_now}>
        <MdHowToVote className={style.vote_icon} />
      </div>
    </div>
  );
};

export default Competitor;
