function hashCode(str) {
    let hash = 0;
    for (let i = 0, len = str.length; i < len; i++) {
        let chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}

function noselect() {
    return false;
}

let check = true;
const password = 1601206599;
document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyC' && event.ctrlKey && check) {
        window.getSelection()?.removeAllRanges();
    }
});
document.addEventListener('mousedown', function(click) {
    if (check) {
        switch (click.button) {
            case 0:
                window.getSelection()?.removeAllRanges();
                break;
            case 2:
                click.preventDefault();
                let userinput = prompt('Введите пароль для копирования');
                let hashpas = hashCode(userinput);
                if (password == hashpas) {
                    check = false;
                };
                break;
        }
    }
});





document.addEventListener('keydown', function(event) {
  console.log(event.code)
});


function hashCode(str) {
    let hash = 0;
    for (let i = 0, len = str.length; i < len; i++) {
        let chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}
let check = false;
const password = 1601206599;
let hash = hashCode("aboba312");
if (password == hash) {console.log(1)};
