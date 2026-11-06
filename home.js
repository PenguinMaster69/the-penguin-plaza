const image = document.getElementById("Image");

function GetGallery() {
    return fetch("images.json")
    .then(function(respone) {
        return respone.json();
    })
    .catch(function(error) {
        console.error("Failed to load images:", error);
        return [];
    });
};

window.addEventListener("DOMContentLoaded", function(){
    GetGallery().then(function(gallery) {
        if (!Array.isArray(gallery) || gallery.length === 0) {
            return;
        };
        const newImage = gallery[Math.floor(Math.random() * gallery.length)];
        image.src = "Gallery/" + newImage;
    });
});
