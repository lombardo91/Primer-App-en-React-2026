import { useState } from "react";


import styles from './ClasesCarrito.module.css';
// import './ClasesCarrito.css';


interface Props {
    producto: string,
    cantidad?: number,
}
const ProductoCarrito = ({producto, cantidad= 30}: Props) => {

  const [ num, nuevoNum ] = useState( cantidad );

  const sumNum = () => {
    if( num === 10)return;
    nuevoNum(num +1 );
  }
  const restNum = () => {
    if (num === 1)return;
    nuevoNum (num -1 );
  } 


  
  const clickBoton = () => {
     console.log(`Mouse enter ${producto}`);
  };

  return (
<section
className= { styles['clase-producto'] }

   /*  style= {{
     display: 'flex',
        alignItems: 'center',
        gap: 10,
        marginTop: 10,
    }} */
>

        <section
        className={styles['clase-nombre']}
        style={{
            color: num === 1 ? 'red' : 'blue',
        }}
        >{producto} </section>
      <button
      onMouseEnter={() => {
       
      }}
      onClick = {sumNum}
      >+1</button>
      <span>{num}</span>
    <button onClick={restNum}>-1</button>

    </section>
  );
};

export default ProductoCarrito
