interface Props {
    producto: string,
    cantidad?: number,
}
const ProductoCarrito = ({producto, cantidad= 30}: Props) => {

  return (
<section
    style= {{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        marginTop: 10,
    }}
>

        <span
        style={{
            width: 150,
        }}
        >{producto} </span>
      <button>+1</button>
      <span>{cantidad}</span>
    <button>-1</button>

    </section>
  );
};

export default ProductoCarrito
