const container = document.getElementById("MainContainer");

fetch("images.json")
    .then(function(respone) {
        return respone.json();
    })
    .then(function(images) {
        images.forEach(function(filename) {
            const img = document.createElement("img");

            img.src = "Gallery/" + filename;
            
            container.appendChild(img);
        });
    })
    .catch(function(error) {
        console.error("Failed to load images:", error);
    });
