const item_link = document.getElementsByClassName("item_link");
const item_select = document.getElementsByClassName("item_select");

const menu = {
    dashboard:{
        title: "dashboard",
        item: document.getElementById('dashboard_item'),
        link: document.getElementById('dashboard_link')
    },
    nursery:{
        title: "nursery",
        item: document.getElementById('nursery_item'),
        link: document.getElementById('nursery_link')
    },
    rearing:{
        title: "rearing",
        item: document.getElementById('rearing_item'),
        link: document.getElementById('rearing_link')
    },
    pre_reprod:{
        title: "pre-reprod",
        item: document.getElementById('pre-reprod_item'),
        link: document.getElementById('pre-reprod_link')
    },
    reproduct:{
        title: "reproduct",
        item: document.getElementById('reproduct_item'),
        link: document.getElementById('reproduct_link')
    },
    product:{
        title: "product",
        item: document.getElementById('product_item'),
        link: document.getElementById('product_link')
    },
    inventory:{
        title: "inventory",
        item: document.getElementById('inventory_item'),
        link: document.getElementById('inventory_link')
    },
    colonies:{
        title: "colonies",
        item: document.getElementById('colonies_item'),
        link: document.getElementById('colonies_link')
    },
    users:{
        title: "users",
        item: document.getElementById('users_item'),
        link: document.getElementById('users_link')
    },
    settings:{
        title: "settings",
        item: document.getElementById('settings_item'),
        link: document.getElementById('settings_link')
    },
    
};


async function bindEventHoverMenuItem(page){

    if(document.getElementById('pageName').name == page.title){
        page.item.style.opacity = "unset";
        return;
    }
    
    // page.link.addEventListener('mouseover', function(){
    //     page.item.style["opacity"] = "unset";
    // });
    // page.link.addEventListener('mouseout', function() {
    //     page.item.style["opacity"] = ".0";
    // });
}

let cords = ['scrollX','scrollY'];
// Перед закрытием записываем в локалсторадж window.scrollX и window.scrollY как scrollX и scrollY
window.addEventListener('unload', e => cords.forEach(cord => localStorage[cord] = window[cord]));
// Прокручиваем страницу к scrollX и scrollY из localStorage (либо 0,0 если там еще ничего нет)
window.scroll(...cords.map(cord => localStorage[cord]));

await bindEventHoverMenuItem(menu.dashboard);
await bindEventHoverMenuItem(menu.nursery);
await bindEventHoverMenuItem(menu.rearing);
await bindEventHoverMenuItem(menu.pre_reprod);
await bindEventHoverMenuItem(menu.reproduct);
await bindEventHoverMenuItem(menu.product);
await bindEventHoverMenuItem(menu.inventory);
await bindEventHoverMenuItem(menu.colonies);
await bindEventHoverMenuItem(menu.users);
await bindEventHoverMenuItem(menu.settings);
