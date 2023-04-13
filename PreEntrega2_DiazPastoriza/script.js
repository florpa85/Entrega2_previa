//funcion
function Presentacion() {
    let IngreseSuNombre =  prompt("Hola extraño! ingresa tu nombre asi dejas de serlo")
    alert("Ah! eres tú "+ IngreseSuNombre + " Bienvenido!")
}
Presentacion();



class productos{
    nombre;
    codigo;
    precio;
    color;
    unidades;
    disponibilidad;

    constructor(nombre,codigo,precio,color,unidades,disponibilidad)
    {
        this.nombre = nombre;
        this.codigo = codigo;
        this.precio = precio;
        this.color = color;
        this.unidades = unidades;
        this.disponibilidad = disponibilidad;
    }
   
    sumarIVA()
    {
     return this.precio  * 1.21;
    }

  

    precioMinorista()
    {
        return this.precio * 1.21 * 1.80;
    }
   
}



//arrays

const conjuntos = [];
let i = 0;

do{
    let NombreProducto = prompt("Ingrese el nombre del producto o escriba ESC para finalizar").toUpperCase();
    if( NombreProducto === "ESC")
    {
        break;
    }
    else{
        NombreP = NombreProducto;
        let CodigoP = prompt("Ingrese el codigo de " + NombreProducto);
        let PrecioP = prompt("Ingrese el precio de "+ NombreProducto);
        let ColorP = prompt("Ingrese el color de " + NombreProducto);
        let unidadesP = prompt("Ingrese las unidades de " + NombreProducto + " que hay.");

        conjuntos.push(new productos (NombreP, CodigoP,PrecioP,ColorP, unidadesP));
        
    }
    i++;
}
    while(conjuntos);

  

    for(let producto of conjuntos){
        console.log(producto.nombre);
        console.log("Precio con IVA: $"+ producto.sumarIVA());
        console.log("COD: " + producto.codigo);
        console.log(producto.color);
        console.log("Precio Minorista: $"+ producto.precioMinorista());
        if(producto.unidades < 1 ){
            console.log("sin stock")
        }
        else{ 
            if(producto.unidades > 1 )
            console.log("stock: "+ producto.unidades);}
    };

