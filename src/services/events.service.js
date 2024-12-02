const { cloudinary } = require("../config/cloudinary")

const uploadImageToCloudinary = async (image) => {
    // console.log("image: " + JSON.stringify(image))

    const uploadResults = await cloudinary.uploader.upload(image, {
        upload_preset: 'techsagesymposium',
        allowed_formats: ['jpg', 'png', 'jpeg', 'webp', 'svg', 'ico', 'jfif'],
    })

    console.log("image url: " + uploadResults.url)
    return uploadResults.url
}

module.exports = {
    uploadImageToCloudinary
}