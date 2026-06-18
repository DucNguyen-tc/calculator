function Button({ value, onClick, className = "" }) {
  return (
    <button
      onClick={() => onClick?.(value)}
      className={`
        h-full w-full rounded-2xl text-xl sm:text-2xl md:text-3xl bg-gray-700 text-white font-normal
        active:scale-95 transition-all duration-100 select-none flex items-center justify-center
        ${className}
      `}
    >
      {value}
    </button>
  );
}

export default Button;