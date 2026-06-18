function Display({ value }) {
  return (
    <div className="w-full pt-8 pb-4 px-3 flex flex-col items-end justify-end min-h-[100px] sm:min-h-[140px]">
      <span className="text-4xl sm:text-5xl md:text-6xl font-light text-white break-all tracking-tight transition-all">
        {value || "0"}
      </span>
    </div>
  );
}

export default Display;