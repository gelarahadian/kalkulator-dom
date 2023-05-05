const input1 = document.querySelector('#input1')
const input2 = document.querySelector('#input2')
const tambah = document.querySelector('#tambah')
const kurang = document.querySelector('#kurang')
const kali = document.querySelector('#kali')
const bagi = document.querySelector('#bagi')
const hasilHTML = document.querySelector('#hasil')
const reset = document.querySelector('#reset')

const kalkulator = (input1, input2, operator) => {
    const nilai1 = parseInt(input1)
    const nilai2 = parseInt(input2)
    let hasil
    if(operator === "+"){
        hasil = nilai1 + nilai2
    }else if(operator === '-'){
        hasil = nilai1 - nilai2
    }else if(operator === '*'){
        hasil = nilai1 * nilai2
    }else if(operator === '/'){
        hasil = nilai1 / nilai2
    }
    return hasil
}

let inputNum1 = 0, inputNum2 = 0

input1.addEventListener('change', (e) => {
    inputNum1 = e.target.value
})

input2.addEventListener('change', (e) => {
    inputNum2 = e.target.value
})

tambah.addEventListener('click', () => {
    const hasil = kalkulator(inputNum1, inputNum2, '+')
    hasilHTML.innerHTML = `hasil: ${hasil}`
    inputNum1 = null
    inputNum2 = null
});
kurang.addEventListener('click', () => {
    const hasil = kalkulator(inputNum1, inputNum2, '-')
    hasilHTML.innerHTML = `hasil: ${hasil}`
    inputNum1 = null
    inputNum2 = null
});
kali.addEventListener('click', () => {
    const hasil = kalkulator(inputNum1, inputNum2, '*')
    hasilHTML.innerHTML = `hasil: ${hasil}`
    inputNum1 = null
    inputNum2 = null
});
bagi.addEventListener('click', () => {
    const hasil = kalkulator(inputNum1, inputNum2, '/')
    hasilHTML.innerHTML = `hasil: ${Math.round(hasil * 100) / 100}`
    inputNum1 = null
    inputNum2 = null
});

reset.addEventListener('click', () => {
    hasilHTML.innerHTML = 'hasil:'
    inputNum1 = null
    inputNum2 = null
    input1.value = ''
    input2.value = ''
})