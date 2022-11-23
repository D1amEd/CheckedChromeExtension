
let myLeads = []


chrome.contextMenus.removeAll(function () {
    let contextMenuItem = {
        "id": "Analisis",
        "title": "Parrafo a analizar",
        "contexts": ["selection"]
    }
    chrome.contextMenus.create(contextMenuItem);
});


chrome.contextMenus.onClicked.addListener(function (clickData) {
    if (clickData.menuItemId == "Analisis" && clickData.selectionText) {
        chrome.storage.sync.get("myLeads", function(result){
            console.log(clickData.selectionText);
        })
    }
})
