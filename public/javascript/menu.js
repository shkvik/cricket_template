const item_link = document.getElementsByClassName("item_link");
const item_select = document.getElementsByClassName("item_select");


for(let i = 0; i < item_link.length;i++){
    item_link[i].addEventListener('mouseover', function() {
        item_select[i].style["opacity"] = "unset";
    });

    item_link[i].addEventListener('mouseout', function() {
        item_select[i].style["opacity"] = ".0";
    });
}
