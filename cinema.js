const catalogo = require("./database/catalogo.json")
let cinehouse = "cinehouse"


function buscarFilme(identificador){
    const filme = catalogo.find((objeto) => objeto.codigo == identificador)

    return filme
}

const alterarFilmeEmCartaz = (codigoDofilme) => {
    const filmeParaAlterar = catalogo.find((filme)=> filme.codigo == codigoDoFilme)

    filmeParaAlterar.emCartaz = !filmeParaAlterar.emCartaz

    return filmeParaAlterar
}

function listarTodosOsFilmes(){
    for(let i=0;i<catalogo.length;i++){
        console.log(catalogo[i])
    }
}

function listarFilmesEmCartaz(){
    let filmesEmCartaz = []

    for(let i=0;i<catalogo.length;i++){
        if(catalogo[i].emCartaz){
            filmesEmCartaz.push(catalogo[i])
        }
    } 
    return filmesEmCartaz
}

function alterarStatusEmCartaz(codigo, callback){
    const filmeEncontrado = callback(codigo)
    filmeEncontrado.emCartaz = !filmeEncontrado.emCartaz
}

    
function adicionarFilme(titulo,codigo,duracao,atores,anoDeLancamento,emCartaz){
    catalogo.push({titulo,codigo,duracao,atores,anoDeLancamento,emCartaz})
}

