const d = document,
    w = window;

export default function smartVideo(){
    const $videos = d.querySelectorAll("video[data-smart-video]"),
        cb = entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    entry.target.play();
                } else {
                    entry.target.pause();
                }

                w.addEventListener("visibilityChange", e => {
                    d.visibilityState === "visible"
                    ? entry.target.play()
                    : entry.target.pause()
                })
            });
        },
        observer = new IntersectionObserver(cb, {threshold: 0.5});

    $videos.forEach(el => observer.observe(el));
}