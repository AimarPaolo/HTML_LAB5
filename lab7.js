function find_max(vettore){
    let massimo = -100000000;
    for(let j of vettore){
        if(massimo < parseInt(j)){
            massimo = parseInt(j);
        }
    }
    return massimo;
}