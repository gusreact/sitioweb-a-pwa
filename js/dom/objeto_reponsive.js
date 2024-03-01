const d = document,
    w = window;
//mq Media Query
//mobileContent : Contenido HTML que queremos ver a nivel Mobile
//desktopContent : Contenido HTML que queremos ver a nivel Escritorio
export default function responsiveMedia(id, mq, mobileContent, desktopContent){
    let breakpoint = w.matchMedia(mq);
    const responsive = e => {
        if(e.matches){
            d.getElementById(id).innerHTML = desktopContent;
        } else {
            d.getElementById(id).innerHTML = mobileContent;
        }
    };

    breakpoint.addEventListener("change", responsive);
    responsive(breakpoint);
}
