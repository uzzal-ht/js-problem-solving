/* let getSiblings = function (e) {
    let siblings = []; 
    if(!e.parentNode) {
        return siblings;
    }
    let sibling  = e.parentNode.firstChild;
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== e) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }
    return siblings;
};


const accordion = document.querySelectorAll('.accordion-card');

accordion.forEach(item => {
    const head = item.querySelector('.accordion-head');
    head.addEventListener('click', function() {
        const acc = this.parentElement;
        if(acc.classList.contains('active')) {
            acc.classList.remove('active')
        } else {
            acc.classList.add('active')
            getSiblings(acc).forEach(function(item) {
                item.classList.remove('active')
            })
        }
    })
}); */

const cards = document.querySelectorAll('.accordion-card')

cards.forEach(item => {
    const head = item.querySelector('.accordion-head')
    head.addEventListener('click', () => {
        cards.forEach(el => {
            if(el !== item) {
                el.classList.remove('active')
            }
            item.classList.toggle('active')
        })
    })
})