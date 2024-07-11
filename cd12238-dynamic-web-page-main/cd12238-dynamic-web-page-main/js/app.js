
document.addEventListener('DOMContentLoaded', () => {
const sections = document.querySelectorAll('section');
const navList = document.getElementById('navbar__list');
sections.forEach(section => {
const navItem = document.createElement('li');
const navLink = document.createElement('a');
navLink.href = `#${section.id}`;
navLink.textContent = section.dataset.nav;
navItem.appendChild(navLink);
navList.appendChild(navItem);
    });
    navList.addEventListener('click', (event) => {
        event.preventDefault();
        if (event.target.tagName === 'A') {
            const targetSection = document.querySelector(event.target.getAttribute('href'));
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
            setActiveSection(targetSection);
        }
    });

    function setActiveSection(section) {
        sections.forEach(sec => {
            sec.classList.remove('active');
        });
        section.classList.add('active');
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setActiveSection(entry.target);
            }
        });
    }, { threshold: 0.6 });

    sections.forEach(section => {
        observer.observe(section);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const sendButton = document.getElementById('sendButton');
    const commentInput = document.getElementById('commentInput');
    const commentSection = document.getElementById('commentSection');

    sendButton.addEventListener('click', () => {
        const commentText = commentInput.value;
        if (commentText !== '') {
            const newComment = document.createElement('p');
            newComment.textContent = commentText;
            commentSection.appendChild(newComment);
            commentInput.value = ''; // Clear the input field after adding the comment
        }
    });
});
