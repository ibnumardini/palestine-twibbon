export const createTwibbonCanvas = (imageUrl, canvas) => {
  return new Promise((resolve, reject) => {
    const ctx = canvas.getContext('2d');
    const userImage = new Image();
    const palestineImage = new Image();

    userImage.onload = () => {
      canvas.width = 400;
      canvas.height = 400;

      const { drawWidth, drawHeight, offsetX, offsetY } = calculateImageFit(
        userImage,
        400,
        400
      );

      ctx.drawImage(userImage, offsetX, offsetY, drawWidth, drawHeight);

      palestineImage.onload = () => {
        ctx.drawImage(palestineImage, 0, 0, 400, 400);
        resolve(canvas.toDataURL());
      };

      palestineImage.onerror = reject;
      palestineImage.src = '/palestine.png';
    };

    userImage.onerror = reject;
    userImage.src = imageUrl;
  });
};

export const calculateImageFit = (image, canvasWidth, canvasHeight) => {
  const imgAspect = image.width / image.height;
  const canvasAspect = canvasWidth / canvasHeight;

  let drawWidth, drawHeight, offsetX, offsetY;

  if (imgAspect > canvasAspect) {
    drawHeight = canvasHeight;
    drawWidth = canvasHeight * imgAspect;
    offsetX = (canvasWidth - drawWidth) / 2;
    offsetY = 0;
  } else {
    drawWidth = canvasWidth;
    drawHeight = canvasWidth / imgAspect;
    offsetX = 0;
    offsetY = (canvasHeight - drawHeight) / 2;
  }

  return { drawWidth, drawHeight, offsetX, offsetY };
};

export const downloadImage = (dataUrl, filename = 'palestine-twibbon.png') => {
  const link = document.createElement('a');
  link.download = filename;
  link.href = dataUrl;
  link.click();
};
