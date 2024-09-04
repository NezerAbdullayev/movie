'use strict';


// ///////////////////////////////////////////////////////////////////////

// actor button
 function handleClickActorButtons() {
    const actorContainer = document.querySelector('.actors_container');
    const nextBtn = document.querySelector('.new--actor_button');
    //next function
    nextButton(nextBtn,actorContainer,161)

}
handleClickActorButtons()


// movies 1 next buttons
function handleMovieButtonClick() {
    const nextBtn = document.querySelector('.next_button_1');
    const movieContainer = document.querySelector('.movies__container_1');

    nextButton(nextBtn, movieContainer, 296);
}
handleMovieButtonClick();

// simillar  movies buttons
function handleSimilarMovieButtonClick() {
    const nextBtn = document.querySelector('.next_button_2');
    const movieContainer = document.querySelector('.movies__container_2');

    nextButton(nextBtn, movieContainer, 296);
}
handleSimilarMovieButtonClick();


