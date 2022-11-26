const btnGenerate = document.querySelector(".generate-btn")

const characters = 'abcd';
const limit = 3;


btnGenerate.addEventListener('click', function(e) {
    e.preventDefault();

    let result = [];
    let text = ''

    // for(let x = 0; x < 5; x++) {
    //     for(let i = 0; i < limit; i++) {
    //         text += characters.charAt(Math.floor(Math.random() * characters.length));
    //     }
    // }
    for(let x = 0; result.length < 5; x++) {
        for(let i = 0; i < limit; i++) {
            text += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        if(result.indexOf(text) === -1) {
            result.push(text)
        }
        text = ''
    }
    

    // if(result.indexOf(text) === -1) {
    //     result.push(text)
    // } else {
    //     console.log('test done');
    // }
    console.log(result);
})