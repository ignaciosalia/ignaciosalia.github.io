import Menu from "../Menu/Menu";
import "./styles.css";
const Principio = () => {
  return (
    <main id="pagina_main fade-in fade-out">
      <Menu></Menu>
      <section className="presentacion">
        <picture id="yo_mero"></picture>
        <div className="titulo">
          <h1>Ignacio Salia </h1>
          <p>
            Los demonios hacen que lo que no es se presente y a los ojos de los
            hombres como si lo fuese
          </p>
        </div>
      </section>
      <section className="contenido">
        <div className="secciones">
          <section className="subtitulo">
            <h2>Profesion</h2>
          </section>
          <section className="sub-tema">
            <p>Nube | GCP | Desarrollo</p>
          </section>
        </div>
        <div className="secciones">
          <section className="subtitulo">
            <h2>Pasion Muchas</h2>
          </section>
          <section className="sub-tema">
            <p> Foto</p>

            <p> Dibujo</p>

            <p>Escritura</p>
          </section>
        </div>
        <div className="secciones">
          <section className="subtitulo">
            <h2>Personal</h2>
          </section>
          <section className="sub-tema">
            <p>Ni de Aquí</p>
            <p>Ni de Allá</p>
            <p>Siempre en Movimiento</p>
          </section>
        </div>
      </section>
    </main>
  );
};

export default Principio;
