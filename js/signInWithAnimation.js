const inputElems = document.querySelectorAll('.userInput');


for (let i = 0; i < inputElems.length; i++) {
    
    inputElems[i].addEventListener('focusin', function() {
        this.style.height = `${40}px`;
        this.style.borderColor = '#006ce7';
    });
    

    inputElems[i].addEventListener('focusout', function() {
        if (!this.value) {
            this.style.height = `${2}px`;
            this.style.borderColor = '';
        }
    });
}