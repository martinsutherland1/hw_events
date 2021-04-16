document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded');

    const form = document.querySelector('#new-scorer-item');
    form.addEventListener('submit', handleFormSubmit);

    const newButton = document.querySelector('.deletebtn');
    newButton.addEventListener('click', handleDeleteButtonClick);

})

const handleFormSubmit = function(event){
    event.preventDefault();

    const scorerName = event.target.name.value

    let team = document.querySelector('#category');
    team = category.value;

    const scorerGoals = event.target.goals.value

    const listItem = document.createElement('li');
    listItem.textContent = `${scorerName} ${team} ${scorerGoals}`
    const list = document.querySelector('#top-scorers');
    list.appendChild(listItem);
    event.target.reset();

}

const handleDeleteButtonClick = function(){
    const buttonClick = document.querySelectorAll('li');
    for (const item of buttonClick){
        item.remove();
    }
}