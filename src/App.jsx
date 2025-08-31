import { useTwibbon } from './hooks/useTwibbon';
import { Header } from './components/Header';
import { Description } from './components/Description';
import { PreviewSection } from './components/PreviewSection';
import { Instructions } from './components/Instructions';
import { Footer } from './components/Footer';
import { Watermark } from './components/Watermark';

function App() {
  const {
    previewUrl,
    fileInputRef,
    canvasRef,
    handleFileUpload,
    handleUploadClick,
    handleDownload,
  } = useTwibbon();

  return (
    <div className='min-h-screen bg-gray-50'>
      <canvas ref={canvasRef} className='hidden' />
      <Header />
      <div className='max-w-4xl mx-auto px-4 py-8'>
        <Description />
        <PreviewSection
          previewUrl={previewUrl}
          fileInputRef={fileInputRef}
          handleFileUpload={handleFileUpload}
          handleUploadClick={handleUploadClick}
          handleDownload={handleDownload}
        />
        <Instructions />
      </div>
      <Watermark />
      <Footer />
    </div>
  );
}

export default App;
