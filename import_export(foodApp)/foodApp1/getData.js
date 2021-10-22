async function getData(url){

    let body = await fetch(url);
    let res = await body.json();
    return res;

}

