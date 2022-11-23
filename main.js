
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const sendBtn = document.getElementById("send-btn")
const prBtn = document.getElementById("pr-btn") //TODO: eliminar este botón de prueba
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")



if (leadsFromLocalStorage) {
    myLeads = chrome.storage.sync.get("myLeads", function(result){
        render(myLeads)
    })
}

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}


inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})

deleteBtn.addEventListener("click", function () {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

sendBtn.addEventListener("click", function () {
    enviarPython(myLeads)
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

prBtn.addEventListener("click", function () { alert("Hola") })

function enviarPython(a) {
    return;
}