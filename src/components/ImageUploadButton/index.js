import React, { useState } from 'react';
import Button from "components/Button";
import { getCharactersFromImage, convertTextToArray } from "./../../utils";


function ImageUploadButton({ label, onUpload, splitLetters }) {
  const [selectedFile, setSelectedFile] = useState(null);

  React.useEffect(() => {
    if (selectedFile) {
      const callOCR = async () => {
        const data = await getCharactersFromImage(selectedFile);
        const words2DArray = convertTextToArray(data, splitLetters);
        onUpload(words2DArray);
      }
      callOCR();
    };
  }, [selectedFile])

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUploadButtonClick = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = handleFileSelect;
    input.click();
  };

  return (<Button label={label} onClick={handleUploadButtonClick} />
  );
}

export default ImageUploadButton;