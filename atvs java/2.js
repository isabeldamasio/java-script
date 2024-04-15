const timerElement = document.getElementById('timer');

let seconds = 30;

function contagemRegre () { 
  
    if (seconds > 0) {
        console.log('o foguete vai decolar em ' + seconds);
        seconds--;
        setTimeout(contagemRegre, 1000);
      }
      else {
        console.log('decolou!');
      }
}