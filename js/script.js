document.addEventListener('DOMContentLoaded', () => {

    const profileImg = document.querySelector('.profile img');


    profileImg.addEventListener('mouseover', () => {
        profileImg.style.transform = 'scale(1.1)';
	profileImg.style.transition = 'transform 0.3s ease';
    });

    profileImg.addEventListener('mouseout',() => {
	profileImg.style.transform= 'scale(1)';
    });
});
