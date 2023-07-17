import Modal from "react-modal";
import style from "./votemodal.module.scss";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { handleModal } from "../../features/modalSlice/ModalSlice";
import {
  addVodeToCompetitors,
  clearState,
  decreaseVote,
  increaseVote,
} from "../../features/competitors/CompetitorSlice";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const VoteModal = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((store) => store.modal);
  const { currentCompetitor, voteCount } = useSelector(
    (store) => store.competitor
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addVodeToCompetitors(currentCompetitor.Id));
    dispatch(handleModal());
    dispatch(clearState());
  };
  // let subtitle;
  let cname =
    currentCompetitor &&
    `${currentCompetitor.FirstName} ${currentCompetitor.MiddleName} ${currentCompetitor.LastName}`;
  const backgroundStyle = {
    background: `linear-gradient(rgba(202,22,232,0.2),rgba(255,255,255,0.1)),url(${
      currentCompetitor && currentCompetitor.Photo
    })`,

    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => dispatch(handleModal())}
        style={customStyles}
        contentLabel="Example Modal"
        className={style.voteModal}
        overlayClassName={style.overlay}
      >
        <div className={style.left_side}>
          <div style={backgroundStyle} className={style.image}></div>
          <div className={style.purchase_votes}>
            <div className={style.btns}>
              <h2>Purchase Vote</h2>
              <button type="button" onClick={() => dispatch(decreaseVote())}>
                <AiOutlineMinus className={style.icon} />
              </button>
              <span className={style.count}>
                {currentCompetitor && voteCount}
              </span>
              <button type="button" onClick={() => dispatch(increaseVote())}>
                <AiOutlinePlus className={style.icon} />
              </button>
            </div>
          </div>
        </div>
        <div className={style.right_side}>
          <div className={style.top}>
            <div className={style.name}>
              <h1>Name</h1>
              <p>{currentCompetitor && cname}</p>
            </div>
            <div className={style.name}>
              <h1>Age</h1>
              <p>{currentCompetitor && currentCompetitor.Age}</p>
            </div>
            <div className={style.state}>
              <h1>State</h1>
              <p>{currentCompetitor && currentCompetitor.RepresentingState}</p>
            </div>
            <div className={style.bio}>
              <h1>Personal Background</h1>
              <p>{currentCompetitor && currentCompetitor.PersonalBackground}</p>
            </div>
            <div className={style.employment}>
              <h1>EmploymentorSchool</h1>
              <p>{currentCompetitor && currentCompetitor.EmploymentorSchool}</p>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <label htmlFor="">Pay With Evc,Zaad and Sahal</label>
            <input type="text" name="tell" id="" />
            <button type="submit">Vote Now</button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default VoteModal;
