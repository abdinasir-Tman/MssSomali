import style from "./competitors.module.scss";
import Competitor from "../competitor/Competitor";
import { useSelector } from "react-redux/es/hooks/useSelector";
const Competitors = () => {
  const { competitors } = useSelector((store) => store.competitor);
  return (
    <div className={style.competitors_container}>
      <div className={style.competitors_header}>
        <span>MssSomali</span>
        <p>
          Built with React.js — the template is a well-structured, thoughtfully
          componentized Next.js project, giving you a codebase that’s productive
          and enjoyable to work in.
        </p>
      </div>
      <div className={style.competitors}>
        {competitors.map((competitor) => (
          <Competitor key={competitor.Id} competitor={competitor} />
        ))}
      </div>
    </div>
  );
};

export default Competitors;
