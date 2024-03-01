const d = document;

export default function scrollSpy(){
    const $sections = d.querySelectorAll("section[data-scroll-spy]"),
    cb = entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute("id");
            //isIntersecting indica si está en el límite donde se empieza a ver el elemento
            if(entry.isIntersecting){
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("active");
            } else {
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("active");
            }
        });
    },
    observer = new IntersectionObserver(cb, {
        //rootMargin: "-250px",//Achicamos la distancia de los márgenes de interacción
        threshold: [0.5, 0.75]//Limita el contenido, si es un arreglo limita entre dos porcentajes, 0 = ejecuta apenas se visualice, 0.5 = ejecuta cuando este al 50%
    });
    
    $sections.forEach(el => observer.observe(el));
}