const StateCard = ({ title, num, state, percent, month }) => {
  const percentIcon = state === "increase" ? "↗" : "↘";

  return (
    <div className="bg-white border border-[#2427371A] rounded-lg py-5 px-6 flex flex-col items-start justify-start gap-1 bg-white shadow-sm">
      <p className="text-base text-gray-500">{title}</p>
      <div className="flex items-end gap-2">
        <h2 className="text-4xl font-semibold text-gray-800">{num}</h2>
        <div
          className={`flex items-center ${
            state === "increase" ? "text-[#128F63]" : "text-[#7F1D1D]"
          } text-sm mb-1`}
        >
          {percentIcon} {Math.abs(percent)}%
        </div>
      </div>
      <p className="text-sm text-gray-500">Last month, {month}</p>
    </div>
  );
};

export default StateCard;
