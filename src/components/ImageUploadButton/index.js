import React, { useState } from 'react';
import Button from "components/Button";
import { getCharactersFromImage } from "./../../utils";


function ImageUploadButton() {
  const [selectedFile, setSelectedFile] = useState(null);

  React.useEffect(() => {
    if (selectedFile) {
      getCharactersFromImage(selectedFile);
    }
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

  return (
    <div>
      <Button label="Upload puzzle" onClick={handleUploadButtonClick} />
      {selectedFile && (
        <p>
          Selected file: {selectedFile.name} ({selectedFile.type})
        </p>
      )}
    </div>
  );
}

export default ImageUploadButton;