import styles from "../styles/Box.module.css";

export default function Card({ children }: React.PropsWithChildren) {
  return <div className={styles.card}>{children}</div>;
}
