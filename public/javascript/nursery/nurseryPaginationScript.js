const link = document.getElementsByClassName('input_a');

link[0].addEventListener('click', function(){
    const data = {
        inc_box_table_page: link[0].name,
        neo_trays_table_page: 2
    }
    console.log(data);

    //Ищем параметры url
    let params = (new URL(document.location)).searchParams;
    let name = params.get("neo_trays_table_page");

    const searchParams = new URLSearchParams(data);

    // location.href=`/nursery?${searchParams.toString()}`;
    console.log(name);
    console.log(searchParams.toString());
});
