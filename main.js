document.addEventListener('mousemove', moveCircles);

function moveCircles(event) {
    // Get the viewport dimensions
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Get the mouse position relative to the viewport
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Calculate percentages of the cursor's position within the viewport
    const percentageX = (mouseX / windowWidth) - 0.5;  // Range from -0.5 to 0.5
    const percentageY = (mouseY / windowHeight) - 0.5; // Range from -0.5 to 0.5

    // Select all the small circle elements
    const circles = [
        document.getElementById('comb'),
        document.getElementById('comb1'),
        document.getElementById('what'),
        document.getElementById('what1'),
        document.getElementById('womb'),
        document.getElementById('womb1'),
        document.getElementById('jar'),
        document.getElementById('jar1')
    ];

    // Define the maximum movement range (e.g., 45px for more noticeable movement)
    const maxMovement = 25;

    // Iterate over each circle and update its position
    circles.forEach((circle) => {
        // Calculate the translation relative to the original position, constrained by maxMovement
        const translateX = percentageX * maxMovement;
        const translateY = percentageY * maxMovement;

        // Apply the translation using `translate` without moving the element from its fixed position
        circle.style.transform = `translate(${translateX}px, ${translateY}px)`;
    });
}

 

document.addEventListener('DOMContentLoaded', function () {
    const togglePassword = document.querySelector('#togglePassword');
    const password = document.querySelector('#lname');
    // const eyeIcon = document.querySelector('#eyeIcon');

    togglePassword.addEventListener('click', function () {
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);

        if (eyeIcon.classList.contains('fa-eye')) {
            eyeIcon.classList.remove('fa-eye');
            eyeIcon.classList.add('fa-eye-slash');
        } else {
            eyeIcon.classList.remove('fa-eye-slash');
            eyeIcon.classList.add('fa-eye');
        }
    });
});

