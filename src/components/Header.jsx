export const Header = () => {
  return (
    <div
      className='bg-green-600 text-white py-8 relative overflow-hidden'
      style={{
        backgroundImage: `
          linear-gradient(0deg, transparent 24%, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.1) 26%, transparent 27%, transparent 74%, rgba(255,255,255,0.1) 75%, rgba(255,255,255,0.1) 76%, transparent 77%, transparent),
          linear-gradient(90deg, transparent 24%, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.1) 26%, transparent 27%, transparent 74%, rgba(255,255,255,0.1) 75%, rgba(255,255,255,0.1) 76%, transparent 77%, transparent)
        `,
        backgroundSize: '55px 55px',
      }}
    >
      <div className='max-w-4xl mx-auto px-4 text-center relative z-10'>
        <h1 className='text-3xl md:text-4xl font-bold mb-3'>
          Palestine Twibbon
        </h1>
        <p className='text-lg md:text-xl opacity-90'>
          Yuk dukung Palestine lewat foto profile mu! 🇵🇸
        </p>
      </div>
    </div>
  );
};
