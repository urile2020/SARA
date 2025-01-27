document.getElementById('imageUpload').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            document.getElementById('imageGallery').appendChild(img);
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById('videoUpload').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const video = document.createElement('video');
            video.src = e.target.result;
            video.controls = true;
            document.getElementById('videoGallery').appendChild(video);
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById('submitMemory').addEventListener('click', function () {
    const memoryText = document.getElementById('memoryText').value;
    if (memoryText) {
        const memoryDiv = document.createElement('div');
        memoryDiv.textContent = memoryText;
        document.getElementById('memoryList').appendChild(memoryDiv);
        document.getElementById('memoryText').value = '';
    }
});
