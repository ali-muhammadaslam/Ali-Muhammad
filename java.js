
//   AOS.init({ duration: 800, once: true, offset: 100 });

//   window.addEventListener('load', () => {
//     const loader = document.getElementById('loader');
//     setTimeout(() => {
//       loader.style.opacity = '0';
//       setTimeout(() => { loader.style.display = 'none'; }, 500);
//     }, 800);
//   });

//   // Typing Animation
//   const roles = ["Full-Stack Developer", "UI/UX Designer", "Creative Coder", "Problem Solver"];
//   let roleIndex = 0, charIndex = 0, isDeleting = false;
//   const typingElement = document.getElementById("typing-text");
  
//   function typeEffect() {
//     const currentRole = roles[roleIndex];
//     if (isDeleting) {
//       typingElement.textContent = currentRole.substring(0, charIndex - 1);
//       charIndex--;
//     } else {
//       typingElement.textContent = currentRole.substring(0, charIndex + 1);
//       charIndex++;
//     }
//     if (!isDeleting && charIndex === currentRole.length) {
//       isDeleting = true;
//       setTimeout(typeEffect, 2000);
//       return;
//     }
//     if (isDeleting && charIndex === 0) {
//       isDeleting = false;
//       roleIndex = (roleIndex + 1) % roles.length;
//       setTimeout(typeEffect, 300);
//       return;
//     }
//     setTimeout(typeEffect, isDeleting ? 60 : 100);
//   }
//   typeEffect();

//   // Skill Bars
//   const skillBars = document.querySelectorAll('.skill-progress');
//   const skillObserver = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         const width = entry.target.getAttribute('data-width');
//         entry.target.style.width = width + '%';
//         skillObserver.unobserve(entry.target);
//       }
//     });
//   }, { threshold: 0.5 });
//   skillBars.forEach(bar => skillObserver.observe(bar));

//   // Active Nav Link
//   const sections = document.querySelectorAll('section');
//   const navLinks = document.querySelectorAll('.nav-link');
  
//   function updateActiveLink() {
//     let current = '';
//     sections.forEach(section => {
//       const sectionTop = section.offsetTop - 100;
//       const sectionHeight = section.clientHeight;
//       if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
//         current = section.getAttribute('id');
//       }
//     });
//     navLinks.forEach(link => {
//       link.classList.remove('active');
//       if (link.getAttribute('href') === `#${current}`) {
//         link.classList.add('active');
//       }
//     });
//   }
//   window.addEventListener('scroll', updateActiveLink);
//   updateActiveLink();

//   // Mobile Menu
//   const hamburger = document.getElementById('hamburger');
//   const navLinksMenu = document.getElementById('navLinks');
//   hamburger.addEventListener('click', () => {
//     navLinksMenu.classList.toggle('active');
//     const icon = hamburger.querySelector('i');
//     icon.classList.toggle('fa-bars');
//     icon.classList.toggle('fa-times');
//   });

//   navLinks.forEach(link => {
//     link.addEventListener('click', () => {
//       navLinksMenu.classList.remove('active');
//       if (hamburger.querySelector('i')) {
//         hamburger.querySelector('i').classList.add('fa-bars');
//         hamburger.querySelector('i').classList.remove('fa-times');
//       }
//     });
//   });

//   // Smooth Scroll
//   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//       e.preventDefault();
//       const target = document.querySelector(this.getAttribute('href'));
//       if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     });
//   });

//   // Theme Toggle
//   const themeCheckbox = document.getElementById('themeCheckbox');
//   if (localStorage.getItem('theme') === 'dark') {
//     document.body.classList.add('dark');
//     themeCheckbox.checked = true;
//   }
//   themeCheckbox.addEventListener('change', () => {
//     if (themeCheckbox.checked) {
//       document.body.classList.add('dark');
//       localStorage.setItem('theme', 'dark');
//     } else {
//       document.body.classList.remove('dark');
//       localStorage.setItem('theme', 'light');
//     }
//   });

//   // WhatsApp Form
//   const contactForm = document.getElementById('contactForm');
//   const toast = document.getElementById('toast');
  
//   function showToast(message) {
//     toast.textContent = message;
//     toast.classList.add('show');
//     setTimeout(() => toast.classList.remove('show'), 3000);
//   }

//   contactForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const name = document.getElementById('fullName').value.trim();
//     const email = document.getElementById('emailAddress').value.trim();
//     const phone = document.getElementById('phoneNumber').value.trim();
//     const message = document.getElementById('messageText').value.trim();
    
//     if (!name || !email || !message) {
//       showToast('❌ Please fill all required fields!');
//       return;
//     }
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       showToast('❌ Please enter a valid email address!');
//       return;
//     }
//     const whatsappMessage = `*New Message from Portfolio Website*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Phone:* ${phone || 'Not provided'}%0A*Message:* ${message}%0A%0A--- Sent from Ali Muhammad Portfolio ---`;
//     window.open(`https://wa.me/923092072022?text=${whatsappMessage}`, '_blank');
//     showToast('✨ Redirecting to WhatsApp...');
//     contactForm.reset();
//   });
AOS.init({ duration: 800, once: true, offset: 100 });

  window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
      loader.style.opacity = '0';
      setTimeout(() => { loader.style.display = 'none'; }, 500);
    }, 800);
  });

  // Typing Animation
  const roles = ["Full-Stack Developer", "UI/UX Designer", "Creative Coder", "Problem Solver"];
  let roleIndex = 0, charIndex = 0, isDeleting = false;
  const typingElement = document.getElementById("typing-text");
  
  function typeEffect() {
    const currentRole = roles[roleIndex];
    if (isDeleting) {
      typingElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }
    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      setTimeout(typeEffect, 2000);
      return;
    }
    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeEffect, 300);
      return;
    }
    setTimeout(typeEffect, isDeleting ? 60 : 100);
  }
  typeEffect();

  // Skill Bars
  const skillBars = document.querySelectorAll('.skill-progress');
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const width = entry.target.getAttribute('data-width');
        entry.target.style.width = width + '%';
        skillObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  skillBars.forEach(bar => skillObserver.observe(bar));

  // Active Nav Link
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  function updateActiveLink() {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }
  window.addEventListener('scroll', updateActiveLink);
  updateActiveLink();

  // Mobile Menu
  const hamburger = document.getElementById('hamburger');
  const navLinksMenu = document.getElementById('navLinks');
  hamburger.addEventListener('click', () => {
    navLinksMenu.classList.toggle('active');
    const icon = hamburger.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinksMenu.classList.remove('active');
      if (hamburger.querySelector('i')) {
        hamburger.querySelector('i').classList.add('fa-bars');
        hamburger.querySelector('i').classList.remove('fa-times');
      }
    });
  });

  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Theme Toggle
  const themeCheckbox = document.getElementById('themeCheckbox');
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    themeCheckbox.checked = true;
  }
  themeCheckbox.addEventListener('change', () => {
    if (themeCheckbox.checked) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  });

  // WhatsApp Form
  const contactForm = document.getElementById('contactForm');
  const toast = document.getElementById('toast');
  
  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
  }

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('fullName').value.trim();
    const email = document.getElementById('emailAddress').value.trim();
    const phone = document.getElementById('phoneNumber').value.trim();
    const message = document.getElementById('messageText').value.trim();
    
    if (!name || !email || !message) {
      showToast('❌ Please fill all required fields!');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showToast('❌ Please enter a valid email address!');
      return;
    }
    const whatsappMessage = `*New Message from Portfolio Website*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Phone:* ${phone || 'Not provided'}%0A*Message:* ${message}%0A%0A--- Sent from Ali Muhammad Portfolio ---`;
    window.open(`https://wa.me/923092072022?text=${whatsappMessage}`, '_blank');
    showToast('✨ Redirecting to WhatsApp...');
    contactForm.reset();
  });