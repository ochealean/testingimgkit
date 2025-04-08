// Initialize ImageKit
const imagekit = new ImageKit({
    publicKey: "public_iy8EJDeldl/YjZUG96o7O1xN06I=",
    urlEndpoint: "https://ik.imagekit.io/xeoq2ip1cp",
    authenticationEndpoint: "https://testingimgkit.vercel.app/api/auth"
});

// Upload function
function upload() {
    const fileInput = document.getElementById("file1");
    
    if (!fileInput.files[0]) {
        alert("Please select a file first!");
        return;
    }

    imagekit.upload({
        file: fileInput.files[0],
        fileName: "upload_" + Date.now() + ".jpg",
        tags: ["web-upload"]
    }, function(err, result) {
        if (err) {
            console.error("Upload error:", err);
            alert("Upload failed! Check console for details.");
        } else {
            console.log("Upload successful:", result);
            alert("Upload successful! URL: " + result.url);
        }
    });
}

// Add event listener properly
document.getElementById("uploadBtn").addEventListener("click", upload);