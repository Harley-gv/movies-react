import { Listado } from "./listado";
import styles from "./home.module.css";

export function Home() {
  return (
    <div>
      <header>
        <h1 className={styles.title}>Listado de Peliculas</h1>
      </header>
      <main>
          <Listado />
      </main>
    </div>
  );
}
