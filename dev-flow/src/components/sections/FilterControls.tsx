import React from 'react';

interface FilterControlsProps {
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  itemsPerPage: number;
  onItemsPerPageChange: (count: number) => void;
  totalResults: number;
  currentPage: number;
  resultsPerPage: number;
}

const FilterControls: React.FC<FilterControlsProps> = ({
  viewMode,
  onViewModeChange,
  sortBy,
  onSortChange,
  itemsPerPage,
  onItemsPerPageChange,
  totalResults,
  currentPage,
  resultsPerPage,
}) => {
  const startResult = (currentPage - 1) * resultsPerPage + 1;
  const endResult = Math.min(currentPage * resultsPerPage, totalResults);

  return (
    <div className="w-full h-[100px] bg-[#F9F1E7] flex items-center justify-between px-[98px]">
      {/* Left Section - Filter Button */}
      <div className="flex items-center gap-[12px]">
        <div className="w-[25px] h-[25px] flex items-center justify-center">
          <svg
            width="20"
            height="17"
            viewBox="0 0 20 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 1H1L8 9.46V15L12 17V9.46L19 1Z"
              stroke="#000000"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <span className="font-poppins font-normal text-[20px] leading-[30px] text-black">
          Filter
        </span>
      </div>

      {/* Center Left - View Toggle Icons */}
      <div className="flex items-center gap-[24px]">
        {/* Grid View Icon */}
        <button
          onClick={() => onViewModeChange('grid')}
          className={`w-[28px] h-[28px] flex items-center justify-center ${
            viewMode === 'grid' ? 'opacity-100' : 'opacity-60'
          }`}
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.5 1H1.5C1.22386 1 1 1.22386 1 1.5V6.5C1 6.77614 1.22386 7 1.5 7H6.5C6.77614 7 7 6.77614 7 6.5V1.5C7 1.22386 6.77614 1 6.5 1Z"
              fill="#000000"
            />
            <path
              d="M15.5 1H10.5C10.2239 1 10 1.22386 10 1.5V6.5C10 6.77614 10.2239 7 10.5 7H15.5C15.7761 7 16 6.77614 16 6.5V1.5C16 1.22386 15.7761 1 15.5 1Z"
              fill="#000000"
            />
            <path
              d="M6.5 10H1.5C1.22386 10 1 10.2239 1 10.5V15.5C1 15.7761 1.22386 16 1.5 16H6.5C6.77614 16 7 15.7761 7 15.5V10.5C7 10.2239 6.77614 10 6.5 10Z"
              fill="#000000"
            />
            <path
              d="M15.5 10H10.5C10.2239 10 10 10.2239 10 10.5V15.5C10 15.7761 10.2239 16 10.5 16H15.5C15.7761 16 16 15.7761 16 15.5V10.5C16 10.2239 15.7761 10 15.5 10Z"
              fill="#000000"
            />
          </svg>
        </button>

        {/* List View Icon */}
        <button
          onClick={() => onViewModeChange('list')}
          className={`w-[24px] h-[24px] flex items-center justify-center ${
            viewMode === 'list' ? 'opacity-100' : 'opacity-60'
          }`}
        >
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 6H21"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 12H21"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 18H21"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 6H3.01"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 12H3.01"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 18H3.01"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Center - Results Count with Separator */}
      <div className="flex items-center gap-[34px]">
        <div className="w-[2px] h-[37px] bg-[#9F9F9F]"></div>
        <span className="font-poppins font-normal text-[16px] leading-[24px] text-black">
          Showing {startResult}–{endResult} of {totalResults} results
        </span>
      </div>

      {/* Right Section - Show and Sort Controls */}
      <div className="flex items-center gap-[29px]">
        {/* Show Dropdown */}
        <div className="flex items-center gap-[17px]">
          <span className="font-poppins font-normal text-[20px] leading-[30px] text-black">
            Show
          </span>
          <div className="relative">
            <select
              value={itemsPerPage}
              onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
              className="w-[55px] h-[55px] bg-white border-none outline-none font-poppins font-normal text-[20px] leading-[30px] text-[#9F9F9F] text-center appearance-none cursor-pointer"
            >
              <option value={8}>8</option>
              <option value={16}>16</option>
              <option value={24}>24</option>
              <option value={32}>32</option>
            </select>
          </div>
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center gap-[17px]">
          <span className="font-poppins font-normal text-[20px] leading-[30px] text-black">
            Short by
          </span>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className="w-[188px] h-[55px] bg-white border-none outline-none font-poppins font-normal text-[20px] leading-[30px] text-[#9F9F9F] pl-[30px] pr-[30px] appearance-none cursor-pointer"
            >
              <option value="default">Default</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name-az">Name: A to Z</option>
              <option value="name-za">Name: Z to A</option>
              <option value="newest">Newest First</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterControls;