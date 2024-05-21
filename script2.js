const emailLog = document.getElementById("emailLog");


emailLog.addEventListener('click', () => {
    emailLog.classList.add('active');
});

emailLog.addEventListener('mouseout', () => {
    emailLog.classList.remove('active');
})