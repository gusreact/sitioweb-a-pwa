const d = document;

export default function searchFilters(input, selector){
    d.addEventListener("keyup", e => {
        if(e.target.matches(input)){
            if(e.key === "Escape") e.target.value = "";
            applyFilters(e.target.value);
        }
    })

    d.addEventListener("search", e => {
        if(e.target.matches(input)){
            e.target.value = "";
            applyFilters(e.target.value);
        }
    })

    function applyFilters(filterText){
        d.querySelectorAll(selector).forEach(el => 
            el.textContent.toLowerCase().includes(filterText)
            ? el.classList.remove("filter")
            : el.classList.add("filter")
        )
    }
}