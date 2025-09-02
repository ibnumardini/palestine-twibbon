import { ShieldCheck } from 'lucide-react';

export const Footer = () => {
  return (
    <div
      className='bg-gray-800 text-white py-5'
      style={{
        backgroundImage: `
          linear-gradient(0deg, transparent 24%, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.1) 26%, transparent 27%, transparent 74%, rgba(255,255,255,0.1) 75%, rgba(255,255,255,0.1) 76%, transparent 77%, transparent),
          linear-gradient(90deg, transparent 24%, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.1) 26%, transparent 27%, transparent 74%, rgba(255,255,255,0.1) 75%, rgba(255,255,255,0.1) 76%, transparent 77%, transparent)
        `,
        backgroundSize: '55px 55px',
      }}
    >
      <div className='max-w-4xl mx-auto px-4 text-center'>
        <p className='text-sm'>#freepalestine 🍉 #standwithpalestine 🇵🇸</p>
        <div className='mt-3 inline-flex items-center px-2 py-1 bg-yellow-50 border border-yellow-200 text-yellow-700 rounded-md text-xs'>
          <ShieldCheck size={14} className='mr-1' />
          <span className='font-bold mr-1'>100% Aman:</span> Semua proses dilakukan
          di local browser!
        </div>
      </div>
    </div>
  );
};
