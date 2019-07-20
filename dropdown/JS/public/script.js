main();

function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function getOptions(url, defaultValue) {
    return new Promise((resolve) => {
        delay(2000)
            .then(() => fetch(`/data${url}`)
            .then(response => response.json())
            .then(data => {
                let options = `<option disabled selected>${defaultValue}</option>`;
                _.forEach(data, element => options += `<option>${element}</option>`);
                resolve(options);
            })
        )
    }) 
}

function assignResult(promise, element) {
    return promise.then(res => element.innerHTML = res);
}

function loadOptions(url, element){
    element.innerHTML = '<option selected>Loading...</option>';
    const options = getOptions(url, `Select ${element.id}`);
    return assignResult(options, element);
}

function main() {

    const country = document.getElementById("country");
    const group = document.getElementById("group");
    const album = document.getElementById("album");
    
    const flow = [country, group, album];

    window.addEventListener("load", loadOptions('', flow[0]));

    country.addEventListener("change", () => {  
        flow[1].disabled = false;
        flow[2].disabled = true;
        loadOptions(`?${flow[0].id}=${flow[0].value}`, flow[1]);
        flow[2].innerHTML = `<option disabled selected>Select ${flow[2].id}</option>`;  
    });

    group.addEventListener("change", () => {
        flow[2].disabled = false;
        loadOptions(`?${flow[0].id}=${flow[0].value}&${flow[1].id}=${flow[1].value}`, flow[2]);
    });
}
