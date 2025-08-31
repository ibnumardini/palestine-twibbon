import { useState, useRef } from 'react';
import { createTwibbonCanvas, downloadImage } from '../utils/twibbonUtils';

export const useTwibbon = () => {
  const [previewUrl, setPreviewUrl] = useState(null);
  const fileInputRef = useRef(null);
  const canvasRef = useRef(null);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        try {
          const twibbonUrl = await createTwibbonCanvas(
            e.target.result,
            canvasRef.current
          );
          setPreviewUrl(twibbonUrl);
        } catch (error) {
          console.error('Error creating twibbon:', error);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleDownload = () => {
    if (previewUrl) {
      downloadImage(previewUrl);
    }
  };

  return {
    previewUrl,
    fileInputRef,
    canvasRef,
    handleFileUpload,
    handleUploadClick,
    handleDownload,
  };
};
