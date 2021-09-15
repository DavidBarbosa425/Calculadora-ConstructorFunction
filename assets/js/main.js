function Calculator() {
  this.display = document.querySelector('.display')


  
  this.captureClick = () => {
    document.addEventListener('click', e => {
      let el = e.target;
      if(el.classList.contains('btn-num')) this.addNumDisplay(el), this.display.focus();
      if(el.classList.contains('btn-clear')) this.clear();
      if(el.classList.contains('btn-del')) this.del();
      if(el.classList.contains('btn-eq')) this.doAcoount();
      
    })
   }

   this.captureClickBtnKey = () => {
     this.display.addEventListener('keypress', e => {
       if(e.keyCode === 13) {
        this.doAcoount()
       }
     })
   }

   this.addNumDisplay = el => this.display.value += el.innerText;
   this.clear = () => this.display.value = ' ';
   this.del = () => this.display.value = this.display.value.slice(0, this.display.value.length - 1);
   this.doAcoount = () => this.display.value = eval(this.display.value)
}

let calculator = new Calculator();
calculator.captureClick()
calculator.captureClickBtnKey()