function log(message) {
    console.log('> ' + message)
}

const cards = document.querySelectorAll('.card')
const dropzones = document.querySelectorAll('.dropzone')

cards.forEach(card => {
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('drag', drag)
    card.addEventListener('dragend', dragend)
})

function dragstart() {
  // log('CARD: Start dragging ') //originalmente, antes da função log(message): console.log('> CARD: Start dragging ')
  // aqui o "this" é o card
  dropzones.forEach( dropzone => dropzone.classList.add('highlight'))

  this.classList.add('is-dragging')
}

function drag() {
  // log('CARD: Is dragging ')
}

function dragend() {
  // log('CARD: Stop drag! ')
  // aqui o "this" é o card
  dropzones.forEach( dropzone => dropzone.classList.remove('highlight'))

  this.classList.remove('is-dragging')
}

// local onde vou soltar os cartões

// plave where we will drop cards
dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragenter', dragenter)
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragleave', dragleave)
    dropzone.addEventListener('drop', drop)
})

function dragenter() {
   //log('DROPZONE: Enter in zone ')
}

function dragover() {
    //log('DROPZONE: Over ')
    // aqui o "this" é o dropzone
    this.classList.add('over')

    // pegar o cartão que está no is-dragging
    const cardBeingDragged = document.querySelector('.is-dragging')

        // aqui o "this" é o dropzone
    this.appendChild(cardBeingDragged)

}

function dragleave() {
    //log('DROPZONE: Leave ')
    // aqui o "this" é o dropzone
    this.classList.remove('over')
}

function drop() {
    //log('DROPZONE: dropped ')
}

