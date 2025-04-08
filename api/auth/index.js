// ImageKit authentication endpoint
import ImageKit from "imagekit";

export default function handler(req, res) {
  const imagekit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    publicKey: "public_iy8EJDeldl/YjZUG96o7O1xN06I=",
    urlEndpoint: "https://ik.imagekit.io/xeoq2ip1cp"
  });

  const authParams = imagekit.getAuthenticationParameters();
  res.status(200).json(authParams);
}

// SDK initialization
var imagekit = new ImageKit({
    publicKey: "public_iy8EJDeldl/YjZUG96o7O1xN06I=",
    urlEndpoint: "https://ik.imagekit.io/xeoq2ip1cp",
    authenticationEndpoint: "https://testingimgkit.vercel.app/api/auth" // Updated endpoint
  });

// Upload function
function upload() {
    var fileInput = document.getElementById("file1");
    
    if (!fileInput.files[0]) {
        alert("Please select a file first!");
        return;
    }

    imagekit.upload({
        file: fileInput.files[0],
        fileName: "upload_" + Date.now() + ".jpg", // Better unique filename
        tags: ["web-upload"]
    }, function(err, result) {
        if (err) {
            console.error("Upload error:", err);
            alert("Upload failed! Check console for details.");
        } else {
            console.log("Upload successful:", result);
            alert("Upload successful! URL: " + result.url);
            
            // Display transformed URL
            var transformedUrl = imagekit.url({
                src: result.url,
                transformation: [{ 
                    height: 300, 
                    width: 400,
                    crop: 'fit' // Added for better image handling
                }]
            });
            console.log("Transformed URL:", transformedUrl);
        }
    });
}