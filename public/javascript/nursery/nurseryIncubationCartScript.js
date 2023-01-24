
const hatching_box = {
    btn_open: document.getElementById('btn_hatching'),
    btn_close: document.getElementById('btn_close_hatching'),
    window: document.getElementById('incubationBoxModal_hatching')
}

const place_box = {
    btn_open: document.getElementById('btn_place'),
    btn_close: document.getElementById('btn_close_place'),
    window: document.getElementById('incubationBoxModal_place')
}

async function bindAllFunctional(box){

    var modalName = 'incubationBoxModal';
    box.btn_open.addEventListener('click', function() {
        document.body.style.overflow = "hidden";
        box.window.setAttribute('class', `${modalName} open`);
    });

    box.btn_close.addEventListener('click', function() {
        document.body.style.overflow = "auto";
        box.window.setAttribute('class', `${modalName} close`);
    });
}

await bindAllFunctional(place_box);
await bindAllFunctional(hatching_box);
