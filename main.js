
const pybtn = document.getElementById('py-btn')
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const sendBtn = document.getElementById("send-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")

chrome.storage.sync.get("myLeads", function (result) {
    myLeads = [].concat(result.myLeads)
    render(myLeads)
    chrome.storage.sync.set({ "myLeads": myLeads })
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
    alert("Se está realizando analisis de datos, recibirá un correo con los resultados en menos de 10 minutos")
    // const abs = fetch('http://34.136.1.107:8080/reportes/', {
    //     method: 'POST',
    //     mode: 'no-cors',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({ "id": 2 })
    // }).then((response) => response.json())
    //     .then((data) => {
    //         console.log('Success:', data);
    //         console.log(response.json());
    //     })
    //     .catch((error) => {
    //         console.error('Error:', error);
    //     });

    chrome.storage.sync.clear()
    myLeads = []
    render(myLeads)
})



async function enviarPython(leads) {

    // for (let i = 1; i < leads.length; i++) { }

}