const cards=document.querySelectorAll('.cards');
cards.forEach((cards)=>{
    cards.addEventListener('click',()=>{
        removeOtherclasses()
        cards.classList.add('active')
    })
})
function removeOtherclasses(){
    cards.forEach((item)=>{
        item.classList.remove('active')
    })
}

