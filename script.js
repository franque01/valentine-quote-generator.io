const quoteContent  = document.querySelector('.quote');
const btn = document.querySelector('.btn');
const author = document.querySelector('.author');
const speak = document.querySelector('.fa-volume-high');
const copy = document.querySelector('.fa-copy')
const xTwitter = document.querySelector('.fa-x-twitter')


btn.addEventListener('click', () => {
    btn.innerHTML = 'Loading...';
    fetch('https://api.quotable.io/random?tags=love').then(res => res.json()).then(result =>{
        console.log(result.author);

        quoteContent.innerHTML = `${result.content}`;
        author.innerHTML = `${result.author}`;
        btn.innerHTML = 'New Quote';
    })
})

window.addEventListener('load', () => {
    speak.addEventListener('click', () => {
        let utterance = new SpeechSynthesisUtterance(`${quoteContent.innerHTML}`);
    
        speechSynthesis.speak(utterance)
    })

    copy.addEventListener('click', () => {
        navigator.clipboard.writeText(quoteContent.innerHTML);
    })

    xTwitter.addEventListener('click', () => {
        let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteContent.innerHTML}`;
        window.open(tweetUrl, 'blanck');
    })
})
