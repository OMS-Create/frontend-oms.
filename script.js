document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    const closeBtn = document.getElementById('closeBtn');
    const menuModal = document.getElementById('menuModal');

    // Open Menu
    menuBtn.addEventListener('click', () => {
        menuModal.classList.add('active');
        menuModal.setAttribute('aria-hidden', 'false');
        menuBtn.setAttribute('aria-expanded', 'true');
        closeBtn.focus(); // Pass focus into modal
    });

    // Close Menu
    closeBtn.addEventListener('click', () => {
        menuModal.classList.remove('active');
        menuModal.setAttribute('aria-hidden', 'true');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.focus(); // Return focus to trigger
    });

    // Close Menu on Escape Key //
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menuModal.classList.contains('active')) {
            closeBtn.click();
        }
    });
});