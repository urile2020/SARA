function login() {
    const adminPassword = document.getElementById('adminPassword').value;
    const correctPassword = 'SABAMENACHEM1234$';  // Change this to your actual password

    if (adminPassword === correctPassword) {
        enableAdminFeatures();
        document.getElementById('login').style.display = 'none';
    } else {
        alert('סיסמה שגויה');
    }
}

function enableAdminFeatures() {
    document.getElementById('backgroundUpload').disabled = false;
    document.getElementById('imageUpload').disabled = false;
    document.getElementById('videoUpload').disabled = false;
    document.getElementById('videoLink').disabled = false;
    document.getElementById('articleLink').disabled = false;
    document.getElementById('memoryText').disabled = false;
}

function uploadBackground() {
    const file = document.getElementById('backgroundUpload').files[0];
    const reader = new FileReader();

    reader.onloadend = function () {
        document.body.style.backgroundImage = `url(${reader.result})`;
    };

    if (file) {
        reader.readAsDataURL(file);
    }
}

function updateTitle() {
    const title = document.getElementById('mainTitle').value;
    document.title = title;
}
