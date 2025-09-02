import { CloudUpload, Download } from 'lucide-react';
import { Button } from './Button';

export const PreviewSection = ({
  previewUrl,
  fileInputRef,
  handleFileUpload,
  handleUploadClick,
  handleDownload,
}) => {
  return (
    <div className='bg-white rounded-xl shadow-lg p-6 mb-6'>
      <h3 className='text-xl font-bold text-center mb-4'>Liat Hasilnya!</h3>

      <div className='flex justify-center mb-4'>
        <div className='w-64 h-64 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center overflow-hidden'>
          {previewUrl ? (
            <img
              src={previewUrl}
              alt='Twibbon Preview'
              className='w-full h-full object-cover rounded-lg'
            />
          ) : (
            <img
              src='/palestine.png'
              alt='Palestine Flag'
              className='w-full h-full object-cover rounded-lg opacity-80'
            />
          )}
        </div>
      </div>

      <div className='text-center'>
        <input
          type='file'
          ref={fileInputRef}
          onChange={handleFileUpload}
          accept='image/*'
          className='hidden'
        />

        <div className='flex flex-col sm:flex-row sm:justify-center items-center'>
          <Button variant='primary' onClick={handleUploadClick}>
            <CloudUpload />
            Unggah
          </Button>
          <Button
            variant='secondary'
            onClick={handleDownload}
            visible={!!previewUrl}
          >
            <Download />
            Unduh
          </Button>
        </div>
      </div>
    </div>
  );
};
