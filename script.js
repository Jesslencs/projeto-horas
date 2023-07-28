
function carregar () {       
const msg = window.document.getElementById('msg');
const img = window.document.getElementById('imagem');
const data = new Date();
const hora = data.getHours();

msg.innerHTML = `Agora são ${hora} horas.`


if (hora >=  0 && hora < 12){
    // BOM DIA
    img.src = 'imagens/coffemorninggg.png';
    document.body.style.background = '#096873'
    
   

} else if ( hora >= 12 && hora <= 18){
    img.src ='imagens/fotodetarde.png'
    document.body.style.background ='#B55220'

}else {
    //Boa noite
    img.src ='imagens/fotodenoite.png';
    document.body.style.background = '#242135'

}

}
