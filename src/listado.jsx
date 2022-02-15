import Peliculas from "./peliculas.json";
import { PelisCard } from "./PelisCard";
import styles from "./listado.module.css"

export function Listado() {
  return (
    <ul className={styles.listadoPeli}>
      {Peliculas.map(function (peli) {
        return <PelisCard key={peli.id} peli={peli} />;
      })}
    </ul>
  );
}
