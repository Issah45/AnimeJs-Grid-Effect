count = 0
di = document.getElementById('di')

while(count < 100) {
    count++
    h = document.createElement('h1')
    di.appendChild(h)
    h.id = count
    h.addEventListener("click", function() {
        anime({
            targets: 'div h1',
            keyframes: [
                {scale: 1.5, easing: 'easeInQuad'},
                {scale: 0.5}
            ],
            delay: anime.stagger(100, {grid: [10, 10], from: Number(this.id - 1), axis: 'z'}),
        })
    })
}

