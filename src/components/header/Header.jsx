import style from "./header.module.scss";
const Header = () => {
  return (
    <div className={style.header}>
      <ul>
        <li>
          <a href="#">Msssomali</a>
        </li>
        <li>
          <a href="#">All Competitors</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
