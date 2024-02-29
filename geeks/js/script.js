let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.toggle('active');
  loginForm.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
  loginForm.classList.toggle('active');
  navbar.classList.remove('active');
}

window.onscroll = () =>{
  navbar.classList.remove('active');
  loginForm.classList.remove('active');
}

var swiper = new Swiper(".review-slider",{
  spaceBetween: 20,
  centeredSlides: true,
  grabCursor: true,
  autoplay:{
    delay: 7500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});







document.addEventListener('DOMContentLoaded', function() {
    const teamMenuBtn = document.getElementById('team-menu-btn');
    const teamMenuOptions = document.getElementById('team-menu-options');
    const addMembersPopup = document.getElementById('add-members-popup');
    const addMemberSubmitBtn = document.getElementById('add-member-submit');
    const emailInput = document.getElementById('email-input');
    const teamMembersList = document.getElementById('team-members-list');

    // Show team menu options when team menu button is clicked
    teamMenuBtn.addEventListener('click', function() {
        if (teamMenuOptions.style.display === 'none') {
            teamMenuOptions.style.display = 'block';
        } else {
            teamMenuOptions.style.display = 'none';
        }
    });

    // Show add members popup when add member option is clicked
    document.getElementById('add-member-option').addEventListener('click', function() {
        addMembersPopup.style.display = 'block';
    });

    // Add member when add member submit button is clicked
    addMemberSubmitBtn.addEventListener('click', function() {
        const email = emailInput.value.trim();

        if (email !== '') {
            const listItem = document.createElement('li');
            listItem.textContent = email;
            teamMembersList.appendChild(listItem);
            emailInput.value = '';
            addMembersPopup.style.display = 'none';
            teamMenuOptions.style.display = 'none';
        } else {
            alert('Please enter a valid email');
        }
    });
});












document.addEventListener("DOMContentLoaded", function() {
  // Get the "Frontend Development" course box element
  var frontendCourseBox = document.querySelector("#courses .box:nth-child(1)");

  // Add click event listener to the frontendCourseBox
  frontendCourseBox.addEventListener("click", function() {
      // Redirect to the course details page when the box is clicked
      window.location.href = "course_details.html";
  });
});





// Add this JavaScript code to handle the form submission and popup display
document.addEventListener('DOMContentLoaded', function () {
  const applyNowButton = document.querySelector('.blog .btn');
  const applyFormPopup = document.getElementById('apply-form-popup');
  const overlay = document.getElementById('overlay');
  const applyForm = document.getElementById('apply-form');
  const applyName = document.getElementById('apply-name');
  const applyEmail = document.getElementById('apply-email');
  const applyPhone = document.getElementById('apply-phone');

  applyNowButton.addEventListener('click', function (event) {
      event.preventDefault();
      applyFormPopup.style.display = 'block';
      overlay.style.display = 'block';
  });

  applyForm.addEventListener('submit', function (event) {
      event.preventDefault();
      if (applyName.value.trim() !== '' && applyEmail.value.trim() !== '' && applyPhone.value.trim() !== '') {
          // You can handle form submission here, like sending data to server or showing a success message
          alert('Successfully Applied!');
          applyForm.reset();
          applyFormPopup.style.display = 'none';
          overlay.style.display = 'none';
      } else {
          alert('Please fill in all fields.');
      }
  });

  overlay.addEventListener('click', function () {
      applyFormPopup.style.display = 'none';
      overlay.style.display = 'none';
  });
});


















