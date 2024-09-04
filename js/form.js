'use strict';

// movie next and previus button
function handleClickButton() {
    const nextBtn = document.querySelector('.arrow_right');
    const prevBtn = document.querySelector('.arrow_left');
    const movieContainer = document.querySelector('.films__container');

    nextButton(nextBtn, movieContainer, 330);
    nextButton(prevBtn, movieContainer, -330);
}
handleClickButton();



// details show and hidden button
function handleShowButton() {
    const buttons = Array.from(document.querySelectorAll('.show_button'));

    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            const dataButton = e.target.dataset.button;
            //  sellect decription container
            const descriptionContainer = document.querySelector(
                `.description_box[data-desc="${dataButton}"]`
            );

            // button
            button.innerText = button.innerText == 'Show Less' ? 'Show detail' : 'Show Less';

            // decs show or hidden
            descriptionContainer.classList.toggle('hidden_desc');
        });
    });
    // click
}
handleShowButton();
