import { PythonShell } from 'python-shell';

const pybtn = document.getElementById('py-btn')
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const sendBtn = document.getElementById("send-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")

chrome.storage.sync.get("myLeads", function (result) {
    myLeads = [].concat(result.myLeads)
    console.log(myLeads)
    render(myLeads)
    chrome.storage.sync.set({ "myLeads": myLeads })
})


pybtn.addEventListener("click", function () {
    PythonShell.run('prueba.py', null, function (err) {
        if (err) throw err;
        console.log('finished');
    });
})
function render(leads) {
    let listItems = ""
    for (let i = 1; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}


inputBtn.addEventListener("click", function () {
    myLeads[0] = "Prueba"
    myLeads.push(inputEl.value)
    inputEl.value = ""
    chrome.storage.sync.set({ "myLeads": myLeads })
    render(myLeads)

})

deleteBtn.addEventListener("click", function () {
    chrome.storage.sync.clear()
    myLeads = []
    render(myLeads)
})

sendBtn.addEventListener("click", function () {
    enviarPython(myLeads)
    chrome.storage.sync.clear()
    myLeads = []
    render(myLeads)
})

function enviarPython(leads) {
    for (let i = 1; i < leads.length; i++) { }

}