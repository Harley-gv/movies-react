import styles from "./PelisCard.module.css";

export function PelisCard({ peli }) {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + peli.poster_path;
  return (
    <li className={styles.peliCard}>
      <img 
      width={230}
      height={345}
      className={styles.peliImage} 
      src={imageUrl} 
      alt={peli.title} />
      <div>{peli.title}</div>
    </li>
  );
}
