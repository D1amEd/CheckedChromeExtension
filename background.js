
let myLeads = []

chrome.contextMenus.removeAll(function () {
    let contextMenuItem = {
        "id": "Analisis",
        "title": "Parrafo a analizar",
        "contexts": ["selection"]
    }
    chrome.contextMenus.create(contextMenuItem);
})



chrome.contextMenus.onClicked.addListener(function (clickData) {
    if (clickData.menuItemId == "Analisis" && clickData.selectionText) {
        let Arr = []
        chrome.storage.sync.get("myLeads", function (result) {
            Arr = [].concat(result.myLeads)
            Arr.push(clickData.selectionText.toString())
            console.log("resultados concatenados:")
            console.log(Arr)
            chrome.storage.sync.set({ "myLeads": Arr })
        })

    }
})
