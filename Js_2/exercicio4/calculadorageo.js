let opcao = ""
function AreaDoRetangulo(a,b){
    return a*b
}
function AreaDoTriangulo(a,b){
return (AreaDoRetangulo(a,b)/2)
}
function AreaDoQuadrado(lado){
    return AreaDoRetangulo(lado, lado)
}
function AreaDoTrapezio(a,b,c){
    return (AreaDoRetangulo(a+c,b)/2)
}
function AreaDoCirculo(b){
    const pi = 3.14;
    return (AreaDoQuadrado(b,b)*pi)
}
function altura(){
    if(parseInt(opcao) === 3){
        const x = prompt("Qual o lado: ")
        return x
    }
    else{
        const x = prompt("Qual a altura: ")
        return x
    }

}
function largura(){
    if(parseInt(opcao) === 5){
        const x = prompt("Qual o raio:")
        return x
    }
    else{
        if(parseInt(opcao) === 4){
            const x = prompt("Qual a base:")
            return x
        }
        else{
        const x = prompt("Qual a largura:")
        return x
        }
    }
    
}
function menu(){
    return prompt("Calculadora Geométrica:\n1)Area do Triângulo\n2)Area do Retângulo\n3)Area do Quadrado\n4)Area do Trápezio\n5)Area do Circulo\n6)Sair")
}
function executar(){
    do{
        let resultado
        opcao = menu() 
        switch(opcao)
        {
            case "1":
                resultado = AreaDoTriangulo(altura(),largura())
                break;
            case "2":
                resultado = AreaDoRetangulo(altura(),largura())    
                break;
            case "3":
                resultado = AreaDoQuadrado(altura())
                break;
            case "4":
                resultado = AreaDoTrapezio(largura(),largura(),altura())
                break;
            case "5":
                resultado = AreaDoCirculo(largura())
                break;
            case "6":
                alert("Saindo...")
                break;
            default:
                alert("Opção Inválida")
                break;
        }
        if(resultado){
            alert("Resultado:" + resultado)
        }
    }
    while(opcao !== "6")
}
executar()