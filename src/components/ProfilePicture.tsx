import React, { useRef, useState } from 'react';

function ProfilePicture() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [image, setImage] = useState<Blob | null>(null);

  const handleImageClick = () => {
    inputRef.current!.click();
  };
  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const imgname = file.name;
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const img = new Image();
        if (reader.result) {
          img.src = reader.result as string;
        }

        img.onload = () => {
          const canvas = document.createElement('canvas');
          const maxSize = Math.max(img.width, img.height);
          canvas.width = maxSize;
          canvas.height = maxSize;
          const ctx = canvas.getContext('2d');
          ctx?.drawImage(
            img,
            (maxSize - img.width) / 2,
            (maxSize - img.height) / 2
          );
          canvas.toBlob(
            (blob) => {
              if (blob) {
                const file = new File([blob], imgname, {
                  type: 'image/png',
                  lastModified: Date.now(),
                });
              }
              // console.log(file);
              setImage(file);
            },
            'image/jpeg',
            0.8
          );
        };
      };
    } else {
      console.log('No file selected');
    }
  };
  
  return (
    <div>
      <div onClick={handleImageClick}>
        {image ? (
          <img
            src={URL.createObjectURL(image)}
            alt=''></img>
        ) : (
          <img src='./small.jpg'></img>
        )}
        <input
          type='file'
          ref={inputRef}
          onChange={handleImageChange}
          style={{ display: 'none' }}></input>
      </div>
    </div>
  );
}

export default ProfilePicture;
