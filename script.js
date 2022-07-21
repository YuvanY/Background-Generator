var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');

function setGradient(){
    body.style.background = 
    'linear-gradient(to right, '
    + color1.value 
    + ', ' 
    + color2.value
    + ')';

    css.textContent = body.style.background + ';'
}

color1.addEventListener('input', setGradient)

color2.addEventListener('input', setGradient)

const random_hex_color_code = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  };
  

function setRndomGradient() {
    css.textContent = random_hex_color_code();
    random_hex_color_code()
    
}

function randomGradient() {
    setRndomGradient()
    color1.value = random_hex_color_code()
    body.style.background = 
    'linear-gradient(to right, '
    + color1.value 
    + ', ' 
    + color2.value
    + ')';

    css.textContent = body.style.background + ';'
}
function randomGradient2() {
    setRndomGradient()
    color2.value = random_hex_color_code()
    body.style.background = 
    'linear-gradient(to right, '
    + color1.value 
    + ', ' 
    + color2.value
    + ')';

    css.textContent = body.style.background + ';'
}