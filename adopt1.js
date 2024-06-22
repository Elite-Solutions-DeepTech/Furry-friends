let isMouseDown = false;
let startX;
let scrollLeft;

document.querySelector('.slider-wrapper').addEventListener('mousedown', (e) => {
    isMouseDown = true;
    startX = e.pageX - document.querySelector('.slider-wrapper').offsetLeft;
    scrollLeft = document.querySelector('.slider-wrapper').scrollLeft;
});

document.querySelector('.slider-wrapper').addEventListener('mouseleave', () => {
    isMouseDown = false;
});

document.querySelector('.slider-wrapper').addEventListener('mouseup', () => {
    isMouseDown = false;
});

document.querySelector('.slider-wrapper').addEventListener('mousemove', (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - document.querySelector('.slider-wrapper').offsetLeft;
    const walk = (x - startX) * 3; // Adjust the speed of scrolling here
    document.querySelector('.slider-wrapper').scrollLeft = scrollLeft - walk;
});

function viewImage(imageSrc, breed, name, age, Gender,Vaccinated,reason) {
    const image = document.getElementById('selectedImage');
    image.src = imageSrc;

    const description = document.getElementById('description');
    description.innerHTML = `<strong>Breed:</strong> ${breed}<br>
                             <strong>Name:</strong> ${name}<br>
                             <strong>Age:</strong> ${age}<br>
                             <strong>Gender:</strong> ${Gender}<br>
                             <strong>Vaccinated:</strong> ${Vaccinated}<br>
                             <strong>Reason:</strong> ${reason}`;

    const modal = document.getElementById('myModal');
    modal.style.display = 'block';

    document.body.classList.add('modal-open');
}

function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';

    document.body.classList.remove('modal-open');
}

// Close the modal when clicking outside of the modal content
window.onclick = function(event) {
    const modal = document.getElementById('myModal');
    if (event.target == modal) {
        closeModal();
    }
}
