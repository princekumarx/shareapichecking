let btn = document.querySelector('button');
let modelbox = document.querySelector('.modelbox');

let overlay = document.querySelector('.overlay');

console.log(document.body)
btn.addEventListener('click',()=>{
    if(window.navigator.share){
        window.navigator.share({
            title:'share working',
            text:'This is web share api checking',
            url: window.location.href
        }).then(()=>{
            console.log('Thanks for sharing!');
        }).catch(err => {
            console.log('Couldn\'t share of',err.message);
        });
    }

    else{

        modelbox.style.display = 'inline-block';

     }
});

overlay.addEventListener('click',(e)=>{
    modelbox.style.display = 'none';
console.log(e)
})
 