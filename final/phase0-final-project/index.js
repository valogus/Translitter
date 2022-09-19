let mainButton = document.querySelector(".button");
let input = document.querySelector("input")
let mainblock = document.querySelector(".main__block")
let blockLeft = document.querySelector(".block__left")
let blockRight = document.querySelector(".block__right")
let count = 1;

const translit = {

    'а': 'a',    'б': 'b',    'в': 'v',    'г': 'g',    'д': 'd',

    'е': 'e',    'ё': 'e',   'ж': 'zh',   'з': 'z',    'и': 'i',

    'й': 'j',    'к': 'k',    'л': 'l',    'м': 'm',    'н': 'n',

    'о': 'o',    'п': 'p',    'р': 'r',    'с': 's',    'т': 't',

    'у': 'u',    'ф': 'f',    'х': 'h',    'ц': 'c',    'ч': 'ch',

    'ш': 'sh',   'щ': 'sch',  'ь': `'`,   'ы': 'y',    'ъ': '#',

    'э': 'je',    'ю': 'ju',   'я': 'ja',


    'А': 'A',    'Б': 'B',    'В': 'V',    'Г': 'G',    'Д': 'D',

    'Е': 'E',    'Ё': 'E',   'Ж': 'Zh',   'З': 'Z',    'И': 'I',

    'Й': 'J',    'К': 'K',    'Л': 'L',    'М': 'M',    'Н': 'N',

    'О': 'O',    'П': 'P',    'Р': 'R',    'С': 'S',    'Т': 'T',

    'У': 'U',    'Ф': 'F',    'Х': 'H',    'Ц': 'C',    'Ч': 'Ch',

    'Ш': 'Sh',   'Щ': 'Sch',  'Ь': `'`,   'Ы': 'Y',    'Ъ': '#',

    'Э': 'je',    'Ю': 'Ju',   'Я': 'ja',

};

mainButton.addEventListener('click',  function(){  
    let translitedFull = '';
    for(let i=0; i<input.value.length; i++){
        if(input.value[i]==" "){
            translitedFull+=" "
        } else if(translit[`${input.value[i]}`]==undefined){
            translitedFull+=input.value[i]
        }
        else{
        translitedFull+=translit[`${input.value[i]}`]
        }
    }
    let translited = translitedFull;
    count+=1;
    // обрезка
    let slovo = input.value;
    let slovoFull = input.value;
    if(slovo.length == 0){ 
        slovo = "пусто"
        translited = "pusto"
    }  else if(slovo.length>8){
        slovo = input.value.slice(0, 7) + "..."
        translited = translited.slice(0, 7) + "..."
    };
    // заполнение
    let newWordLeft = document.createElement('div');
    newWordLeft.className = "block__left__2"
    let number = document.createElement('div');
    number.className = "number";
    number.innerText = count;
    newWordLeft.innerHTML = `
    <p>${slovo}</p>`
    newWordLeft.prepend(number);
    blockLeft.append(newWordLeft)
    let newWordRight = document.createElement('div');
    newWordRight.className = "block__right__2"
    newWordRight.innerHTML = `<p>${translited}</p>`
    // создание и настройка креста с изменением номера
    let cross = document.createElement("img");
    cross.className = "cross";
    cross.src = "icons/Group 1.svg";
    cross.alt = "cross";
    cross.id = `${count}`
    newWordRight.append(cross);
    cross.addEventListener("click", function(){
        newWordLeft.remove()
        newWordRight.remove()
        count-=1;
    })
    cross.addEventListener("click",e=>{
    let groupNum = document.querySelectorAll(".number")
    let crosses = document.querySelectorAll(".cross");
    for (let i = 1; i<groupNum.length; i++){
        let currNum = groupNum[i]     
        let cross = crosses[i]
    if (i+2>e.target.id){
        currNum.innerText=`${currNum.innerText-1}` 
        console.log(cross.id)
        cross.id = `${cross.id - 1}`
    }

    }
    
 } )
    // вставка
    blockLeft.append(newWordLeft)
    blockRight.append(newWordRight)
    // подсказки
    if(slovo.length>8){
        let adviceLeftFull=document.createElement("p")
        adviceLeftFull.innerHTML = `${slovoFull}`
        adviceLeftFull.classList.add('adviceleft');
        newWordLeft.append( adviceLeftFull)
        let adviceRightFull=document.createElement("p")
        adviceRightFull.innerHTML = `${translitedFull}`
        adviceRightFull.classList.add('adviceright')
        newWordRight.prepend(adviceRightFull)
    }
    
    input.value = "";
    
})
//энтер
document.addEventListener('keyup',  event =>{
    if( event.code === 'Enter' ) {
        mainButton.click();
    }
})

//очистка
let clear = document.querySelector(".button_bottom");
clear.addEventListener('click', function(){
    let nblockLeft = document.querySelectorAll(".block__left__2")
    let nblockRight = document.querySelectorAll(".block__right__2")
    for(let i =0; i<nblockLeft.length; i++){
        nblockLeft[i].remove()
        nblockRight[i].remove()
    }
    count = 1;
})