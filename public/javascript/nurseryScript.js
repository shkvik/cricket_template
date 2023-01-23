const incubation_box = {
    btn_open: document.getElementById('btn_add_incubation_box'),
    btn_close: document.getElementById('btn_close_add_incubation_box'),
    window: document.getElementById('incubationModal')
}

const neonates_box = {
    btn_open: document.getElementById('btn_add_neonates_trays'),
    btn_close: document.getElementById('btn_close_add_neonates_tray'),
    window: document.getElementById('neonatesModal')
}

async function bindAllFunctional(box){

    var modalName = 'nurseryStyle_modal';
    box.btn_open.addEventListener('click', function() {
        document.body.style.overflow = "hidden";
        box.window.setAttribute('class', `${modalName} open`);
    });

    box.btn_close.addEventListener('click', function() {
        document.body.style.overflow = "auto";
        box.window.setAttribute('class', `${modalName} close`);
    });
}

await bindAllFunctional(neonates_box);
await bindAllFunctional(incubation_box);