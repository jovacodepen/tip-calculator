let tipGroup = document.querySelector('.tip-group')
let peopleInp = document.querySelector('#people')
let errorSpan = document.querySelector('.error')
let tipPP = document.querySelector('#tip-val')
let billTot = document.querySelector('#total-val')
let customInp = document.querySelector('#custom-input')
let resetBtn = document.querySelector('#reset')
let tipBtns = document.querySelectorAll('btn-tip')

tipGroup.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-tip')) {
        if (peopleInp.value === '' || peopleInp.value == 0) {
            errorSpan.style.opacity = "1"
            return
        } else {
            for (t of tipBtns) {
                console.log(t)
                if (t.id == e.target.id) {
                    t.classList.add("green-btn")
                    console.log(t)
                } else {
                    t.classList.remove("green-btn")
                }
            }
            tipValidate(e.target.id)
        }
    }
})

customInp.addEventListener('input', (e) => {
    if (peopleInp.value === '' || peopleInp.value == 0 || e.target.value === " ") {
        errorSpan.style.opacity = "1"
        console.log("no people")
        billTot.innerHTML = "£0"
        tipPP.innerHTML = "£0"
        return
    } else {
        tipValidate(e.target.value)
    }
})

resetBtn.addEventListener('click', (e) => {
    billTot.innerHTML = "£0"
    tipPP.innerHTML = "£0"
})



function tipValidate(tipAmt) {
    let tip = document.querySelector('.btn-tip')
    let people = document.querySelector('#people')
    let bill = document.querySelector('#bill')

    errorSpan.style.opacity = '0'
    tip = parseInt(tipAmt) / 100

    people = parseInt(people.value)
    bill = parseInt(bill.value)

    tipCalc(tip, people, bill)


}


function tipCalc(tipVal, peopleVal, billVal) {
    console.log(tipVal)
    console.log(peopleVal)
    console.log(billVal)
    tipPP.innerHTML = "£" + Math.round(((tipVal * billVal) / peopleVal * 100)) / 100;
    billTot.innerHTML = "£" + Math.round(((billVal / peopleVal) * 100)) / 100
}