document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  // Toggle the navigation menu
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll(".nav-menu a");

  navLinks.forEach(link => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // Project filtering
  const filterButtons = document.querySelectorAll("#project-filters .filter-btn");
  const projects = document.querySelectorAll("#project-list li");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove("active"));
      // Add active class to the clicked button
      button.classList.add("active");

      const category = button.getAttribute("data-category");

      projects.forEach(project => {
        if (category === "all" || project.getAttribute("data-category") === category) {
          project.style.display = "list-item";
        } else {
          project.style.display = "none";
        }
      });
    });
  });

  // Lightbox functionality
  const projectImages = document.querySelectorAll(".project-img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxClose = document.getElementById("lightbox-close");

  projectImages.forEach(img => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightbox.classList.add("visible");
    });
  });

  lightboxClose.addEventListener("click", () => {
    lightbox.classList.remove("visible");
  });

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      lightbox.classList.remove("visible");
    }
  });

  // Form validation
  const contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Evitar el envío del formulario si hay errores

    let isValid = true;

    // Validar el campo de nombre
    const nameInput = document.getElementById("name");
    const nameError = document.getElementById("name-error");
    if (nameInput.value.trim() === "") {
      nameError.textContent = "Name is required.";
      nameError.style.display = "block";
      nameInput.classList.add("error");
      isValid = false;
    } else {
      nameError.textContent = "";
      nameError.style.display = "none";
      nameInput.classList.remove("error");
    }

    // Validar el campo de email
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("email-error");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === "") {
      emailError.textContent = "Email is required.";
      emailError.style.display = "block";
      emailInput.classList.add("error");
      isValid = false;
    } else if (!emailRegex.test(emailInput.value.trim())) {
      emailError.textContent = "Please enter a valid email address.";
      emailError.style.display = "block";
      emailInput.classList.add("error");
      isValid = false;
    } else {
      emailError.textContent = "";
      emailError.style.display = "none";
      emailInput.classList.remove("error");
    }

    // Validar el campo de mensaje
    const messageInput = document.getElementById("message");
    const messageError = document.getElementById("message-error");
    if (messageInput.value.trim() === "") {
      messageError.textContent = "Message is required.";
      messageError.style.display = "block";
      messageInput.classList.add("error");
      isValid = false;
    } else {
      messageError.textContent = "";
      messageError.style.display = "none";
      messageInput.classList.remove("error");
    }

    // Si todo es válido, enviar el formulario
    if (isValid) {
      alert("Form submitted successfully!");
      contactForm.reset();
    }
  });
});