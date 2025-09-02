export const Button = ({ children, variant, onClick, visible = true }) => {
  if (!visible) return null;

  const baseClasses = 'mt-2 sm:mt-0 sm:ml-4 inline-flex items-center justify-center gap-x-2 py-2 px-4 sm:px-4 text-white font-semibold rounded-lg shadow-md transition-colors';
  const variantClasses = {
    primary: 'bg-green-600 hover:bg-green-700',
    secondary: 'bg-blue-600 hover:bg-blue-700',
  }[variant] || '';

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses}`}
    >
      {children}
    </button>
  );
};
