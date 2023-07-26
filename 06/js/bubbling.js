const elements = document.querySelectorAll('*'); // 모든 요소를 선택

for (let element of elements) {
    element.addEventListener('click', function(event) {
        console.log(`버블링 => event.target : ${event.target.tagName}, 
                    event.currentTarget : ${event.currentTarget.tagName}`);
    });
}

for (let element of elements) {
    element.addEventListener('click', function(event) {
        console.log(`캐처링 => event.target : ${event.target.tagName}, 
                    event.currentTarget : ${event.currentTarget.tagName}`);
    }, true);
}