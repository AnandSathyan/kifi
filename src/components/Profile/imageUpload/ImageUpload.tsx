    import React, { useState } from 'react';

interface ImageUploadProps {
    handleUpdateProfile: (image: File) => void;
  
}

const ImageUpload: React.FC<ImageUploadProps> = ({ handleUpdateProfile }) => {
  const [selectedImage, setSelectedImage] = useState<File | null | Blob | any>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const imageFile = event.target.files?.[0];
    setSelectedImage(imageFile || null);
    if (selectedImage) {
        handleUpdateProfile(selectedImage);
    //   setImage(selectedImage)

      // Clear the selected image after upload
      setSelectedImage(null);
    }
  };

  const handleUpload = () => {
    
  };
// console.log("selectedImageselectedImage",selectedImage);

  return (
    <div>
        {selectedImage?
        //@ts-ignore
      <img src={URL.createObjectURL(selectedImage)} alt="image upload"/>
      :null}
      <input type="file" accept="image/*" onChange={handleImageChange}/>
      {/* <button onClick={handleUpload}>Upload Image</button> */}
      
    </div>
  );
};

export default ImageUpload;
