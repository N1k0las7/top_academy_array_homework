let inp = document.getElementById('inp1');
let but1 = document.getElementById('but1');
let out1 = document.getElementById('out1');
let but2 = document.getElementById('but2');
let inp2 = document.getElementById('inp2');
let out2 = document.getElementById('out2');

but1.onclick = f1

function f1() {
    //берем текст из инпута и преобразуем в строку
    let stroka = inp.value;
    console.log(stroka)
    //разбиваем строку массива на отдельные элементы массива
    const strokaArr = stroka.split(' ')
    console.log(strokaArr)

    //считаем колличество элементов массива
    let res = strokaArr.length;
    console.log(res)

    //сортируем массив от самого большего элемента массива к меньшему
    let res1 = strokaArr.sort((a, b) => b.length - a.length)[0];
    console.log(res1);
    //обьединяем все элементы массива в одну строку
    let res2 = strokaArr.join('');
    console.log(res2)

    out1.innerHTML = 'Слов в предложении: ' + res + '<br>' + 'Самое длинное слово: ' + res1 + '<br>' + 'Одной строкой: ' + res2;
}


function numToPr(number) {
        const one = ['', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто']
        const two = ['один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять','десять']
        const three = ['одиннацать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать']
    let str = number.toString()
    let out = '';

    if(str.length == 1) return two[number-1];

    else if(str.length == 2){
        if(str[0] == 1) out = three[parseInt(str[1])-1];
        
        else out = (one[parseInt(str[0])-1] + ((str[1]!='0')?(' ' + two[parseInt(str[1])-1]):''));
    }


    let arr = out.split('');
    // arr[0] = arr[0].toUpperCase();
    out = arr.join('');
    return out;
}


but2.addEventListener('click', function(){
    let num = inp2.value;
    console.log(numToPr(num))
    out2.textContent = numToPr(num)
})
