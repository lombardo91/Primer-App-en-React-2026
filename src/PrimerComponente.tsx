import ProductoCarrito from "./mini-merca/ProductoCarrito";

interface ProductoNombre {
    nompbreProducto: string;
    cantidad: number;
}

const productoNombre: ProductoNombre[] = [
    {nompbreProducto: 'Chinchulin', cantidad: 4},
    {nompbreProducto: 'Chaparro', cantidad: 2},
    {nompbreProducto: 'Chancleta', cantidad: 8},
    {nompbreProducto: 'Chiflette', cantidad: 1},
];


export function PrimerComponenteApp() {
   return(
    <>
    <h1>Hola Mundo</h1>
    <p>Loguii   </p>

    <button>Click aqui</button>
    
    <div>
        <h2>
            Dentro del Div
        </h2>
    </div>
    


    <h1>CARRITO DE COMPRAS!</h1>

    {
        productoNombre.map(( {nompbreProducto, cantidad} ) => (
            < ProductoCarrito key={nompbreProducto} producto={nompbreProducto} cantidad= {cantidad} />
        )
    )}

    <ProductoCarrito producto="Algarroba" cantidad= {3} />
    <ProductoCarrito producto="Ferroquina" cantidad= {1} />
    <ProductoCarrito producto="Ajenjo " cantidad= { 1 } />
    
    </>
   );
}

    const mascotaUno ='Lombardo';
    const mascotaDos = 'Osito';
    const animalesFavoritos = ['Caballo', 'Tero', 'Uron', 'Perro'];
    const estaActivo = false;

    const direccion = {
        localidad: 'Morteros',
        CodPostal: 'abc-2421',
        direcc: 'Av Siempre viva S/N',
    }


export function MyNombreCompletoApp(){
    
    return(
        <>
        <h1>{mascotaUno}</h1>
        
        <h3>{mascotaDos}</h3>

        <h2>{animalesFavoritos.join(', ')}</h2>  

        <h1> { estaActivo ? 'Activo' : 'No Activo!'} </h1>

        <p> {JSON.stringify(direccion)} </p>
        </>

    )
}