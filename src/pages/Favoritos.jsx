import React, { useContext } from "react";
import { MyContext } from "../context/MyContext";
import Hearth from "../components/Hearth";

const Favoritos = () => {
  const { fotos, setfotos } = useContext(MyContext);

  const handleClick = (id) => {
    const fotoIndex = fotos.findIndex((foto) => foto.id === id);
    fotos[fotoIndex].favorito = !fotos[fotoIndex].favorito;
    setFotos([...fotos]);
  };


  return (
  <div className="galeria grid-columns-5 p-3 ">
    {fotos.map((foto) => (
        foto.favorito &&
        <div
        onClick={() => handleClick(foto.id)}
        className="foto"
        key={foto.id}
        style={{ backgroundImage: `url(${foto.src})` }}
      >
        <Hearth filled={foto.favorito} />
        </div>
      ))}
    </div>
  );
};


export default Favoritos;
