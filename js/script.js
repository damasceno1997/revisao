// DOM
const capa = document.querySelector('.images img')
const sinopse = document.querySelector('#sinopse')
const bt1 = document.querySelector('#bt1')
const bt2 = document.querySelector('#bt2')
const bt3 = document.querySelector('#bt3')
const bt4 = document.querySelector('#bt4')
const bt5 = document.querySelector('#bt5')
const bt6 = document.querySelector('#bt6')

// EVENTOS
bt1.addEventListener('click', velozes)
bt2.addEventListener('click', elChapo)
bt3.addEventListener('click', got)
bt4.addEventListener('click', vikings)
bt5.addEventListener('click', peaky)
bt6.addEventListener('click', breaking)

// AÇÕES
function velozes() {
    capa.src = 'images/vfdt.jpg'
    sinopse.innerText = 'Velozes e Furiosos: Ligação Tóquio (2006) acompanha Sean Boswell, um adolescente rebelde apaixonado por corridas de rua que, para evitar a prisão nos Estados Unidos, é enviado para viver com o pai em Tóquio. No Japão, Sean descobre o perigoso e emocionante mundo do "drifting" no submundo do automobilismo local, onde terá de aprender uma nova forma de pilotar e enfrentar o temido Rei do Drift.'
}

function elChapo() {
    capa.src = 'images/el_chapo.jpg'
    sinopse.innerText = 'El Chapo (2017) relata a história real do famoso barão do tráfico mexicano Joaquín "El Chapo" Guzmán. A série retrata a sua ascensão ao poder no Cartel de Sinaloa durante a década de 1980, a consolidação do seu império global de droga, as espetaculares fugas de prisões de alta segurança e a sua eventual captura definitiva.'
}

function got() {
    capa.src = 'images/game_of_trones.webp'
    sinopse.innerText = 'Game of Thrones (2011) passa-se nos continentes fictícios de Westeros e Essos, onde várias famílias nobres travam uma guerra brutal e repleta de conspirações pelo controlo do Trono de Ferro e o domínio dos Sete Reinos. Enquanto as alianças são formadas e destruídas, uma antiga e mortal ameaça desperta no extremo Norte, além da Muralha.'
}

function vikings() {
    capa.src = 'images/vikings.jpg'
    sinopse.innerText = 'Vikings (2013) segue as lendárias aventuras do guerreiro e agricultor nórdico Ragnar Lothbrok. Movido pelo desejo de explorar terras desconhecidas a oeste, Ragnar lidera incursões inovadoras pela Inglaterra e França, tornando-se uma figura de enorme poder e uma lenda entre os povos nórdicos.'
}

function peaky() {
    capa.src = 'images/peaky-blinders_t63364_3.webp'
    sinopse.innerText = 'Peaky Blinders (2013) desenrola-se em Birmingham, na Inglaterra, logo após o fim da Primeira Guerra Mundial. A série acompanha a ambiciosa família Shelby, liderada pelo frio e astuto Thomas Shelby, que comanda uma poderosa gangue de apostas clandestinas e crime organizado em busca da conquista do poder político e económico.'
}

function breaking() {
    capa.src = 'images/breaking_bad.jpg'
    sinopse.innerText = 'Breaking Bad (2008) conta a história de Walter White, um frustrado professor de química do ensino secundário a quem é diagnosticado um cancro do pulmão inoperável. Para assegurar o futuro financeiro da sua família, Walter alia-se ao seu ex-aluno Jesse Pinkman para fabricar e vender metanfetamina de alta pureza, transformando-se gradualmente num implacável barão do tráfico.'
}