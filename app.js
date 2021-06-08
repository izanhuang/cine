const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow,i) => {
    const itemNumber = movieLists[i].querySelectorAll("img").length; // 7
    let clickCounter = 0;
    arrow.addEventListener("click",()=>{
        clickCounter++;
        if(itemNumber - (2+clickCounter) > 0){ // 7-5, 7-6, 7-7
            movieLists[i].style.transform = `translateX(${
                movieLists[i].computedStyleMap().get("transform")[0].x.value
            -300}px)`;
        } else {
            movieLists[i].style.transform = `translateX(0)`;
            clickCounter = 0;
        }
    });
});

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
    ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);

ball.addEventListener("click",()=>{
    items.forEach(item=>{
        item.classList.toggle("active")
    })
    ball.classList.toggle("active")
})