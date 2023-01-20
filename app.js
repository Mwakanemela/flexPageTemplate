const linkz = document.querySelectorAll('a[href*="#"]');
console.log(linkz);

linkz.forEach((el)=> {
    console.log(el);
    el.addEventListener('click', (e)=> {
        console.log(e);
        e.preventDefault(); //prevent default action
        let remover = document.querySelector('.active');
        if(remover != null) {
            remover.classList.remove('active');
        }

        el.classList.add('active');
    })
})