function newImage(imagePath, left, bottom){
    let object = document.createElement('img')
    object.src = imagePath
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}

for(let xValue = 0; xValue <= window.innerWidth; xValue += 100 ){
    for (let yValue = 400; yValue >= 0; yValue -= 100){
        newImage('assets/grass.png', xValue, yValue)}
}

for(let x = 0; x <= window.innerWidth; x += 100){
    for(let y = 500; y <= window.innerHeight; y += 100){
        newImage('assets/sky.png', x, y)}
}

newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

function newItem(imagePath, left, bottom){
    let object = newImage(imagePath, left, bottom)
    object.addEventListener('dblclick', function(){
        object.remove()
    })
}

newItem('assets/sword.png', 500, 405)
newItem('assets/sheild.png', 165, 185)
newItem('assets/staff.png', 600, 100)