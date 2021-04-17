

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

    const topScorers = document.createElement('li');
    topScorers.classList.add('top-scorers-item');
    

   
    const listItem1 = document.createElement('h1');
    listItem1.textContent = `${scorerName}`;

    const listItem2 = document.createElement('h2');
    listItem2.textContent = `${team}`;

    const listItem3 = document.createElement('h3');
    listItem3.textContent = `${scorerGoals}`
    
    const list = document.querySelector('#top-scorers');
    list.appendChild(listItem1);
    list.appendChild(listItem2);
    list.appendChild(listItem3);
    event.target.reset();

  

}

const handleDeleteButtonClick = function(){
    const buttonClick = document.querySelectorAll('#top-scorers');
    for (const item of buttonClick){
        item.remove();
    }
}