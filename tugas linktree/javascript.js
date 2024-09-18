//Mengganti Gambar Profil Secara Otomatis

const images = ['robot.jpg', 'bocil 2.gif', 'bocil 4.gif']; // Daftar gambar
let currentIndex = 0;

// Fungsi untuk mengganti gambar
function changeProfileImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.querySelector('.img-area img').src = images[currentIndex];
}

// Mengganti gambar setiap 10 detik
setInterval(changeProfileImage, 5000);

//efek transisi pada tombol
document.querySelectorAll('.container nav ul button').forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.1)';
        button.style.transition = 'transform 0.3s ease-in-out';
    });

    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });
});


// Array untuk gambar background
const backgrounds = ['nature.gif', 'dark nature.gif', 'sunset.gif'];
let backgroundIndex = 0;

// Fungsi untuk mengganti background
function toggleBackground() {
    backgroundIndex = (backgroundIndex + 1) % backgrounds.length;
    document.body.style.backgroundImage = `url('${backgrounds[backgroundIndex]}')`;
}

// Event listener untuk tombol ganti background
document.getElementById('toggleButton').addEventListener('click', () => {
    toggleBackground();
});

// Efek transisi pada tombol
document.querySelectorAll('.container nav ul button').forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.1)';
        button.style.transition = 'transform 0.3s ease-in-out';
    });

    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });

    button.addEventListener('mousedown', () => {
        button.style.transform = 'scale(0.95)';
    });

    button.addEventListener('mouseup', () => {
        button.style.transform = 'scale(1)';
    });
});

// Menampilkan form login dan sign in
document.getElementById('loginButton').addEventListener('click', () => {
    document.getElementById('authForms').style.display = 'flex';
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('signinForm').style.display = 'none';
});

document.getElementById('signinButton').addEventListener('click', () => {
    document.getElementById('authForms').style.display = 'flex';
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signinForm').style.display = 'block';
});

// Menyembunyikan form ketika klik di luar form
document.addEventListener('click', (event) => {
    const isClickInside = document.getElementById('authForms').contains(event.target) ||
                          document.getElementById('authButtons').contains(event.target);

    if (!isClickInside) {
        document.getElementById('authForms').style.display = 'none';
    }
});

// Menampilkan form login dan sign in dengan efek transisi
document.getElementById('loginButton').addEventListener('click', () => {
    const authForms = document.getElementById('authForms');
    authForms.classList.add('show');
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('signinForm').style.display = 'none';
});

document.getElementById('signinButton').addEventListener('click', () => {
    const authForms = document.getElementById('authForms');
    authForms.classList.add('show');
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signinForm').style.display = 'block';
});

// Menyembunyikan form dengan efek transisi ketika klik di luar form
document.addEventListener('click', (event) => {
    const authContainer = document.getElementById('authContainer');
    const isClickInside = authContainer.contains(event.target);

    if (!isClickInside) {
        const authForms = document.getElementById('authForms');
        authForms.classList.remove('show'); // Menghilangkan efek transisi
        setTimeout(() => {
            authForms.style.display = 'none'; // Sembunyikan form setelah transisi
        }, 300); // Waktu transisi (sama dengan waktu transisi CSS)
    }
});


//   berikut kode yang saya tidak pakai, cuma untuk pembelajaran...!!

// //menambah efek ketika mengklik tombol ganti

// document.getElementById('toggleButton').addEventListener('click', () => {
//     document.body.style.background = `url('dark nature.gif')`;
//     document.body.style.backgroundSize = 'cover';
// });

// //menambah efek ketika mengklik button

// document.querySelectorAll('button').forEach(button => {
//     button.addEventListener('mousedown', () => {
//         button.style.transform = 'scale(0.95)';
//     });

//     button.addEventListener('mouseup', () => {
//         button.style.transform = 'scale(1)';
//     });
// });
