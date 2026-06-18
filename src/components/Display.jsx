function Display({ value }) {
  return (
    <div className="bg-gray-900 text-white rounded-2xl p-4 sm:p-6 min-h-[80px] sm:min-h-[120px] flex items-end justify-end">
      <span className="text-2xl sm:text-4xl font-light break-all">
        {value}
      </span>
    </div>
  );
}

export default Display;