import React, { useState } from 'react';
import Button from "components/Button";
import { getCharactersFromImage, convertWordsTo2DArray } from "./../../utils";


function ImageUploadButton({ label, onUpload }) {
  const [selectedFile, setSelectedFile] = useState(null);

  React.useEffect(() => {
    if (selectedFile) {
      const callOCR = async () => {
        const data = await getCharactersFromImage(selectedFile);
        console.log("Extracted puzzle:", data);
        const words2DArray = convertWordsTo2DArray(data);
        console.log("Puzzle as 2D array", words2DArray);
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