const d = document,
    ls = localStorage;
export default function darkTheme(btn, classDark){
    const $themeBtn = d.querySelector(btn),
        $selectors = d.querySelectorAll("[data-dark]"),
        lightMode = () => {
            $selectors.forEach(el => el.classList.remove(classDark));
            $themeBtn.textContent = dark;
            ls.setItem("theme", "light");
        },
        darkMode = () => {
            $selectors.forEach(el => el.classList.add(classDark));
            $themeBtn.textContent = light;
            ls.setItem("theme", "dark");
        };

    let light = "🟡",
        dark = "⚫";

    d.addEventListener("click", e => {
        if(e.target.matches(btn)){
            if($themeBtn.textContent === dark){
                darkMode();
            } else {
                lightMode();
            }
        }
    });

    d.addEventListener("DOMContentLoaded", e => {
        if(ls.getItem("theme") === null){
            ls.setItem("theme", "light");
        } else {
            if(ls.getItem("theme") === "dark"){
                darkMode();
            } else {
                lightMode();
            }
        }
    });
}