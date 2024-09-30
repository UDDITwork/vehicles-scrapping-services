document.addEventListener('DOMContentLoaded', (event) => {
    const buttons = document.querySelectorAll('.nav-button');
    const contents = document.querySelectorAll('.content');

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const targetId = e.target.getAttribute('data-target');
            contents.forEach(content => {
                if (content.id === targetId) {
                    content.classList.remove('hidden');
                } else {
                    content.classList.add('hidden');
                }
            });
            if (targetId === 'contact') {
                document.querySelector('.background-video').play();
            }
        });
    });

    // Initial state: show home content
    document.getElementById('home').classList.remove('hidden');
});