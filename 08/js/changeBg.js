
window.onload = function() {
    const bgCount = 5;

    let randomNum = Math.floor(Math.random() * bgCount) + 1;
    console.log(randomNum);
    
    document.body.style.backgroundImage = `url(images/bg-${randomNum}.jpg)`;
}