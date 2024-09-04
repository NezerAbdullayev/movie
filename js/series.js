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

//series next button
function handleClickSeriesButton(){
    const nextBtn=document.querySelector(".series_next__button");
    const  filmContainer=document.querySelector(".films_1")
    nextButton(nextBtn,filmContainer,317)
}
handleClickSeriesButton()

//smillar movies next button
function handleSmillarClickButton(){
    const nextBtn=document.querySelector(".next_video_button-2")
    const filmsContainer=document.querySelector(".smillar__containers")

    nextButton(nextBtn,filmsContainer,296)
}

handleSmillarClickButton()