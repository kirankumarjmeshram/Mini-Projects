async function getLanguages() {
    let res =await fetch('https://libretranslate.de/languages');
    let data=await res.json();
    appendLanguages(data)
    appendLanguages1(data)
}

function appendLanguages(data) {
    let parent=document.getElementById("languageList");

    data.forEach((el)=> {
        let options=document.createElement("option");
        options.value=el.code;
        options.innerText=el.name;
        parent.append(options);
    })

}

function appendLanguages1(data) {
    let parent=document.getElementById("languageList1")

    data.forEach((el)=> {
        let options=document.createElement("option");
        options.value=el.code;
        options.innerText=el.name;
        parent.append(options);
    })

}


getLanguages()
