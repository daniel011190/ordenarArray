/*
Dado un arreglo de diferentes palabras, ordena alfabeticamente las palabras y muestralas en consola en orden

    palabraEnOrden(['naranja','fresa','sandia','uvas','cerezas','manzana'])
    //cerezas,fresa,manzanas,naranja,sandias,uvas
*/

//ORDENANDO SIN USAR SORT
function palabraEnOrden(arry){
    
    for (let i = 0; i < arry.length; i++) {

        for (let j = 0; j <= arry.length - i -1; j++) {
            
            if (arry[j+1]<arry[j]){

                [arry[j+1],arry[j]]=[arry[j],arry[j+1]];
            }
        }
    }
    console.log(arry)
}

palabraEnOrden(['naranja','fresa','sandia','uvas','cerezas','manzanas'])



//ORDENAR USANDO SORT
function ordenSort(arry){
    arry.sort()
    console.log(arry)
}
ordenSort(['naranja','fresa','sandia','uvas','cerezas','manzanas'])