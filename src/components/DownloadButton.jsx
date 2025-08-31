export const DownloadButton = ({ onClick, visible = false }) => {
  if (!visible) return null;

  return (
    <button
      onClick={onClick}
      className="mt-2 sm:mt-0 sm:ml-4 inline-flex items-center justify-center gap-x-2 py-3 px-4 sm:px-6 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md transition-colors"
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
      Download
    </button>
  );
};
