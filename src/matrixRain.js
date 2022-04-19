


function BeginRain(){

const c = document.getElementById("matrix")
c.classList.remove("matrix")
const ctx = c.getContext("2d")
c.height = 1000
c.width = 3000;



const letters = ["日","ﾊ","ﾐ","ﾋ","ｰ","ｳ","ｼ","ﾅ","ﾓ","ﾆ","ｻ","ﾜ","ﾂ","ｵ","ﾘ","ｱ","ﾎ","ﾃ","ﾏ","ｹ","ﾒ","ｴ","ｶ","ｷ","ﾑ","ﾕ","ﾗ","ｾ","ﾈ","ｽ","ﾀ","ﾇ","ﾍ",":","・",".","=","*","+","-","<",">","¦","｜","ﾘ"];


const fontSize = 18

const columns = c.width/ fontSize

const drops = new Array(Math.floor(columns)).fill(1)

function draw(){
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
    ctx.fillRect(0,0,c.width,c.height)
    ctx.font= `${fontSize}px arial`;
    ctx.fillStyle = "#0f0"

    for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
    
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > c.height && Math.random() > 0.95) {
            drops[i] = 0;
          }
      drops[i]++
      }

      window.requestAnimationFrame(draw)
      
    }

    draw()


}


