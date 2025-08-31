export const InstructionCard = ({ step, title, description }) => {
  return (
    <div className='text-center p-4 bg-white rounded-lg shadow'>
      <div className='w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-3'>
        <span className='text-lg font-bold'>{step}</span>
      </div>
      <h4 className='font-semibold mb-2 text-sm'>{title}</h4>
      <p className='text-xs text-gray-600'>{description}</p>
    </div>
  );
};
