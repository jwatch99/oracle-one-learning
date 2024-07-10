document.addEventListener('DOMContentLoaded', function() {
    console.log('La página ha terminado de cargar.');
    const texto_out = localStorage.getItem('texto_out');
    if (texto_out){
        document.getElementById('out').value = texto_out;
        document.getElementById("vacio").style.display="none";
        document.getElementById("lleno").style.display="flex";
    } else {
        console.log('No hay texto guardado.');
    }
});

const reglas = [
    { original: 'e', encriptado: 'enter' },
    { original: 'i', encriptado: 'imes' },
    { original: 'a', encriptado: 'ai' },
    { original: 'o', encriptado: 'ober' },
    { original: 'u', encriptado: 'ufat' }
];
function encrypt(){
    let textoEncriptado = document.getElementById('in').value;
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
    reglas.forEach(regla => { // for para la lista
        let regex = new RegExp(regla.original, 'g'); // 'g' para todos los matches
        textoEncriptado = textoEncriptado.replace(regex, regla.encriptado);
    });
    document.getElementById('out').value = textoEncriptado;
    localStorage.setItem('texto_out', textoEncriptado);
    
    document.getElementById("vacio").style.display="none";
    document.getElementById("lleno").style.display="flex";
}
function decrypt(){
    let textoEncriptado = document.getElementById('in').value;
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
    reglas.forEach(regla => {
        let regex = new RegExp(regla.encriptado, 'g'); // 'g' para todos los matches
        textoEncriptado = textoEncriptado.replace(regex, regla.original);
    });
    document.getElementById('out').value = textoEncriptado;
    localStorage.setItem('texto_out', textoEncriptado);
    
    document.getElementById("vacio").style.display="none";
    document.getElementById("lleno").style.display="flex";
}
/*
fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!
->
felicidades por enfrentar este desafio y haberlo concluido con exito!
*/
function copiar(){
    const text = document.getElementById('out');

    text.select();
    navigator.clipboard.writeText(text.value);
}
