let space = document.getElementsByClassName('space')

for (const element of space){
    element.style.height = element.getAttribute('data-space-height') + 'em';
}
