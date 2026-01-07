
const sections = document.querySelectorAll('.princess-section');
const subtabs = document.querySelectorAll('.subtabs a');

window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY + 100; // offset for header
    sections.forEach(section => {
        if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
            subtabs.forEach(link => link.classList.remove('active'));
            const activeLink = document.querySelector(`.subtabs a[href="#${section.id}"]`);
            if(activeLink) activeLink.classList.add('active');
        }
    });
});

