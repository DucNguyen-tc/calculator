function Button({ value, onClick, className = "" }) {
  return (
    <button
      onClick={() => onClick?.(value)}
      className={`
        h-12 sm:h-16 md:h-20 rounded-xl bg-gray-700 text-white text-lg sm:text-xl md:text-2xl font-medium
        hover:bg-gray-600 active:scale-95 transition
        ${className}
      `}
    >
      {value}
    </button>
  );
}

export default Button;