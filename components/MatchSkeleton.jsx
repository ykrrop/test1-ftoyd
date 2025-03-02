const MatchSkeleton = () => (
  <article className="bg-[#0B0E12] shadow-md rounded-lg p-4 min-h-[87px] animate-pulse">
    <div className="flex justify-between items-center">
      <div className="flex justify-between h-[48px] w-[171px] items-center">
        <div className="w-[48px] h-[48px] bg-gray-300 rounded"></div>
        <div className="w-[100px] h-[20px] bg-gray-300 rounded"></div>
      </div>
      <div className="text-center">
        <div className="w-[60px] h-[24px] bg-gray-300 rounded mx-auto mb-2"></div>
        <div className="w-[92px] h-[27px] bg-gray-300 rounded mx-auto"></div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex justify-between h-[48px] w-[171px] items-center">
          <div className="w-[100px] h-[20px] bg-gray-300 rounded"></div>
          <div className="w-[48px] h-[48px] bg-gray-300 rounded"></div>
        </div>
        <div className="w-[24px] h-[24px] bg-gray-300 rounded-full"></div>
      </div>
    </div>
  </article>
);

export default MatchSkeleton;
