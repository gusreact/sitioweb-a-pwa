const d = document;

export default function slider(){
    const $nextBtn = d.querySelector(".slider-btns .next"),
        $prevBtn = d.querySelector(".slider-btns .prev"),
        $slides = d.querySelectorAll(".slider-slide");

    let i = 0;

    d.addEventListener("click", e => {
        if(e.target === $prevBtn || e.target === $nextBtn){
            e.preventDefault();
            $slides[i].classList.remove("active");
            e.target === $prevBtn ? i-- : i++;

            if(i < 0){
                i =  $slides.length - 1;
            }

            if(i >= $slides.length){
                i = 0;
            }

            $slides[i].classList.add("active");
        }
    })
}