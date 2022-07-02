const tabs = document.getElementById('tabs');
const content = document.querySelectorAll('.content');
const undertabs = document.getElementById('underTabs');
const undercontent = document.querySelectorAll('.undercontent');

// console.log(tabs);
// console.log(content);
//console.log(tabs.children); //"даёт нисходящие элементы в форме массива"
const changeClass = el=>{
    for (let i = 0; i < tabs.children.length; i++) {
        tabs.children[i].classList.remove('active');
        // console.log(tabs.children[i]);
    }
    el.classList.add('active');
}

tabs.addEventListener('click', e => {
    const currTab = e.target.dataset.btn;
    //console.log(e.target); 'получаем объект на который нажимаем'
    changeClass(e.target);
    for(let i =0; i < content.length; i++) {
        content[i].classList.remove('active');
        if (content[i].dataset.content === currTab) {
            content[i].classList.add('active');
        }
    }
})

const changeClassM = elem => {
    for (let i = 0; i < undertabs.children.length; i++) {
        undertabs.children[i].classList.remove('active');
        // console.log(tabs.children[i]);
    }
    elem.classList.add('active');
}
console.log(tabs);
console.log(undertabs);
console.log(undercontent);

undertabs.addEventListener('click', elem => {
    const currTabM = elem.target.dataset.btnnew;
    //console.log(e.target); 'получаем объект на который нажимаем'
    changeClassM(elem.target);
    for(let i =0; i < undercontent.length; i++) {
        undercontent[i].classList.remove('active');
        if (undercontent[i].dataset.contentnew === currTabM) {
            undercontent[i].classList.add('active');
        }
    }
})