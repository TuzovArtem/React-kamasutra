import classes from "./Header.module.css";

const Header = () => {
  return (
    <ul className={classes.list}>
      <li className={classes.item}>
        <a className={classes.link}> Logo </a>
      </li>
      <li className={classes.item}>
        <a className={classes.link}> Search </a>
      </li>
      <li className={classes.item}>
        <a className={classes.link}> icon#1 </a>
      </li>
      <li className={classes.item}>
        <a className={classes.link}> icon#2 </a>
      </li>
    </ul>
  );
};
export default Header;
