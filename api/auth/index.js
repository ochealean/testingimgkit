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