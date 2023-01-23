//efeito do botão voltar ao Topo


Function topo () {

    window.scrollTo(
        {
            TOP:0,
            left:0
            Behavior:'smooth'
        }
    )
}
//Validação de Login

function Login (){
    var logado = 0,
    var usuário = document.getElementById("usuário").Value; 
    var senha = document.getElementById("senha").Value;
    if(usuario =='admin'  && senha '123456') {
        window.location = "index.html";
        logado = 1;
    }

    if(logado == 0)
{ alert ("acesso negado, dados incorretos")


}

}
//Ativar alert no botão cadastrar
