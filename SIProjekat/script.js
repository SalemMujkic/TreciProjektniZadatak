let kliknuta=null;
let zaustaviKlik=null;
let pogodci=0;

const colors = [
    'red',
    'green',
    'blue',
    'orange',
    'cyan',
    'yellow',
    'pink',
    'purple'
];

const cards=[...document.querySelectorAll('.card')];
for(let color of colors){
    const cardAindex=parseInt(Math.random()*cards.length);
    const cardA=cards[cardAindex];
    cards.splice(cardAindex,1);
    cardA.className += ` ${color}`;
    cardA.setAttribute('data-color', color);

    const cardBindex=parseInt(Math.random()*cards.length);
    const cardB=cards[cardBindex];
    cards.splice(cardBindex,1);
    cardB.className+=` ${color}`;
    cardB.setAttribute('data-color', color);
};

function onCardClick(e){
    const target=e.currentTarget;

    if(target===kliknuta || target.className.includes('done') || zaustaviKlik){
        return;
    }

    target.className=target.className.replace('hidden','').trim();
    target.className+=' done'; 

    if(!kliknuta){
        
        kliknuta=target;

    }else if(kliknuta){
        zaustaviKlik=true;
        // target.className=target.className.replace('hidden','').trim();
        if(kliknuta.getAttribute('data-color')!==target.getAttribute('data-color')){
            zaustaviKlik=true;
            setTimeout(()=>{
                kliknuta.className=kliknuta.className.replace('done','').trim()+'hidden';
                target.className=target.className.replace('done','').trim()+'hidden'; 
                kliknuta=null;
                zaustaviKlik=false;
                

            }, 500);
        }else{
            pogodci++;
            kliknuta=null;
            zaustaviKlik=false;
            if(pogodci===8){
                alert("You win");
            }
        }
    }
    

}