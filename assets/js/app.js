window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.preloader').style.display = 'none';
})

document.querySelector('.privacy').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#privacyView').style.display = 'block';
    document.querySelector('.privacy').classList.add('active');

    document.querySelector('.settings').classList.remove('active');
    document.querySelector('.settingsView').style.display = 'none';
})

document.querySelector('.settings').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#privacyView').style.display = 'none';
    document.querySelector('.privacy').classList.remove('active');

    document.querySelector('.settings').classList.add('active');
    document.querySelector('.settingsView').style.display = 'block';

})

function openChangeAvatar() {
    /*=============== SHOW MODAL ===============*/
    const showModal = () => {
        const openBtn = document.getElementById('open-changeAvatar'),
            modalContainer = document.getElementById('modal-container-changeAvatar')

        if (openBtn && modalContainer) {
            openBtn.addEventListener('click', () => {
                modalContainer.classList.add('show-modal')
            })
        }
    }
    showModal('open-changePassword', 'modal-container-changeAvatar')

    /*=============== CLOSE MODAL ===============*/
    const closeBtn = document.querySelectorAll('.close-modal')

    function closeModal() {
        const modalContainer = document.getElementById('modal-container-changeAvatar')
        modalContainer.classList.remove('show-modal')
    }
    closeBtn.forEach(c => c.addEventListener('click', closeModal))
}

openChangeAvatar()

function openChangePassword() {
    /*=============== SHOW MODAL ===============*/
    const showModal = () => {
        const openBtn = document.getElementById('open-changePassword'),
            modalContainer = document.getElementById('modal-container-changePassword')

        if (openBtn && modalContainer) {
            openBtn.addEventListener('click', () => {
                modalContainer.classList.add('show-modal')
            })
        }
    }
    showModal('open-changePassword', 'modal-container-changePassword')

    /*=============== CLOSE MODAL ===============*/
    const closeBtn = document.querySelectorAll('.close-modal')

    function closeModal() {
        const modalContainer = document.getElementById('modal-container-changePassword')
        modalContainer.classList.remove('show-modal')
    }
    closeBtn.forEach(c => c.addEventListener('click', closeModal))
}

openChangePassword()

function openPromo() {
    /*=============== SHOW MODAL ===============*/
    const showModal = () => {
        const openBtn = document.getElementById('open-promo'),
            modalContainer = document.getElementById('modal-container-promo')

        if (openBtn && modalContainer) {
            openBtn.addEventListener('click', () => {
                modalContainer.classList.add('show-modal')
            })
        }
    }
    showModal('open-promo', 'modal-container-promo')

    /*=============== CLOSE MODAL ===============*/
    const closeBtn = document.querySelectorAll('.close-modal')

    function closeModal() {
        const modalContainer = document.getElementById('modal-container-promo')
        modalContainer.classList.remove('show-modal')
    }
    closeBtn.forEach(c => c.addEventListener('click', closeModal))
}

openPromo()