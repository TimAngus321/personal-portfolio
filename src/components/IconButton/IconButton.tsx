import ButtonIconProps from "./IconButton.types";
import styles from "./iconButton.module.scss";

export default function IconButton({ icon: Icon }: ButtonIconProps) {
  return (
    <button className={styles.icon__button}>
      <Icon />
    </button>
  );
}
