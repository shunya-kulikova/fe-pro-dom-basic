export const paintCards = () => {
    const getLi = document.querySelectorAll('li:nth-child(odd)')
    for (const li of getLi) {
        li.style.backgroundColor = 'red'
    }
};

export const findElement = () => {
    let getLi = document.querySelector('li')
    while (getLi) {

        if (getLi.matches('.likedItem')) {
            getLi.style.backgroundColor = 'blue' 
        }
        getLi = getLi.nextElementSibling;
        
    }
};
