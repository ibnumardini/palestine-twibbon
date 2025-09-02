import { ExternalLink } from 'lucide-react';

export const Watermark = () => {
  return (
    <div className='fixed bottom-4 right-4 z-50'>
      <a
        href='https://ibnu.mardini.dev'
        target='_blank'
        rel='noopener noreferrer'
        className='inline-flex items-center px-2 py-1 bg-black/70 hover:bg-black/80 text-white text-xs rounded-lg backdrop-blur-sm transition-colors'
      >
        https://ibnu.mardini.dev
       <ExternalLink size={12} className='ml-1' />
      </a>
    </div>
  );
};
