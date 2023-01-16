var classes = {
    btn: { add_colony: "nersery_btn_add_colony"},
    modal: { add_colony: "nurseryStyle_modal"}
}

var selectors = {
    btn: { add_colony: document.querySelector(`.${classes.btn.add_colony}`)},
    modal: { add_colony: document.querySelector(`.${classes.modal.add_colony}`)} 
}


selectors.btn.add_colony.addEventListener("click", function() {
    selectors.modal.add_colony
        .setAttribute('class', `${classes.modal.add_colony} open`);
        
    window.onclick = function(event){
        if(event.target.getAttribute('class') ==  `${classes.modal.add_colony} open`){
            selectors.modal.add_colony
                .setAttribute('class', `${classes.modal.add_colony} close`);
        }
    }
});


document.addEventListener('keyup', function(event){
    if(event.keyCode == 66){
        selectors.modal.add_colony
            .setAttribute('class', `${classes.modal.add_colony} close`);
    }
});