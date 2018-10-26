function swap(array, idx1, idx2){
    var aux = array[idx1];
    array[idx1] = array[idx2];
    array[idx2] = aux;
}