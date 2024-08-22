
// current db, oof size small
const Queen_list = [
    {name: 'Nymphia Wind', img:'./assets/Nymphia_Wind.png', wins: 4},
    {name: 'Sapphira Cristál', img:'./assets/Sapphira_Cristal.png', wins: 4},
    {name: 'Plane Jane', img:'./assets/Plane_Jane.png', wins: 4},
    {name: 'Q', img:'./assets/Q.png', wins: 2},
    {name: 'Morphine Love Dion', img:'./assets/Morphine_Love_Dion.png', wins: 1},
    {name: 'Dawn', img:'./assets/Dawn.png', wins: 0},
    {name: 'Mhiya Iman LePaige', img:'./assets/Mhiya_Iman_LePaige.png', wins: 1},
    {name: 'Plasma', img:'./assets/Plasma.png', wins: 2},
    {name: 'Xunami Muse', img:'./assets/Xunami_Muse.png', wins: 0},
    {name: 'Megami', img:'./assets/Megami.png', wins: 1},
    {name: 'Geneva Karr', img:'./assets/Geneva_Karr.png', wins: 1},
    {name: 'Amanda Tori Meating', img:'./assets/Amanda_Tori_Meating.png', wins: 0},
    {name: 'Mirage', img:'./assets/Mirage.png', wins: 0},
    {name: 'Hershii LiqCour-Jeté', img:'./assets/Hershii_LiqCour_Jete.png', wins: 0}
];



// get gallary 
const queenGallary = document.getElementById('queenGallary');
// findout why getElementsBYId doesnt allow me to change draggable, probs bc one is a list and other is html collection
let teams = Array.from(document.getElementsByClassName("team"));
// and why queryselector wont work agian, returns empty array

// turn queens into cards and attach to gallary
Queen_list.forEach((queen)=>{
    // console.log(queen.name)
    let card = document.createElement('div');
    card.setAttribute('class', 'queenCard');
    card.setAttribute('id', queen.name);
    card.style.backgroundImage = `url(${queen.img})`;
    // card.style.backgroundSize = 'cover';
    // card.style.backgroundPosition = 'center';
    card.innerHTML = `<h4>${queen.name}</h4>` //add images next
    queenGallary.prepend(card)
})

//  call after loop, bc is empty otherwise
let queenCards = document.querySelectorAll(".queenCard");
queenCards.forEach(queen => {
    queen.setAttribute('draggable','true');
    queen.addEventListener('dragstart', (e)=>{
        e.dataTransfer.setData('text/plain', e.target.id);
    })
});

teams.forEach((team)=>{
    team.addEventListener('dragover', (e)=> e.preventDefault());
    team.addEventListener('drop', (e)=>{
        e.preventDefault();
        let draggedElementId = e.dataTransfer.getData('text/plain');

        // this is the issue, it
        let draggedElement = document.getElementById(draggedElementId);

        team.appendChild(draggedElement);
    } )
})

// create teams
const addBtn = document.getElementById('add');

addBtn.addEventListener('click', createTeam);
let teamList = document.getElementById("teamList");

function createTeam(){
    let teamName = document.getElementById("teamNameInput").value;
    console.log(teamName);
    let teamCard = document.createElement('div');
    teamCard.setAttribute('class', 'team');
    teamList.appendChild(teamCard);
}
// bug: cant add cards to created teams, probs bc they need the setAttributes




