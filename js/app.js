

document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded');

    const form = document.querySelector('#new-scorer-item');
    form.addEventListener('submit', handleFormSubmit);

    const newButton = document.querySelector('.deletebtn');
    newButton.addEventListener('click', handleDeleteButtonClick);

})

const handleFormSubmit = function(event){
    event.preventDefault();

    

    const readingListItem = document.createElement('li');
    readingListItem.classList.add('reading-list-item');

    const name = document.createElement('h1');
    name.textContent = event.target.name.value;
    readingListItem.appendChild(name);

    const team = document.createElement('h2');
    team.textContent = category.value;
    readingListItem.appendChild(team);

    const goals = document.createElement('h3');
    goals.textContent = event.target.goals.value;
    readingListItem.appendChild(goals);

    const list = document.querySelector('#top-scorers');
    list.appendChild(readingListItem);
    
    event.target.reset();

  

}

const handleDeleteButtonClick = function(){
    const buttonClick = document.querySelectorAll('#top-scorers');
    for (const item of buttonClick){
        item.remove();
    }
}