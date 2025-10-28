'use client';

import { useState } from 'react';

const SizeFilter = ({ 
  title = "Size",
  waistSizes = ["36", "38", "40", "42", "44", "46", "48", "50"],
  clothingSizes = ["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL"],
  showWaist = true,
  showClothing = true,
  onSizeToggle = () => {},
  selectedSizes = []
}) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleSizeChange = (size) => {
    onSizeToggle(size);
  };

  return (
    <div className="border-b border-gray-200 pb-4">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between w-full py-2 text-left"
      >
        <span className="font-maisonNeue font-book text-sm leading-5 text-black">
          {title}
        </span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${
            isExpanded ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isExpanded && (
        <div className="mt-4 space-y-6">
          {/* Waist Sizes Section */}
          {showWaist && (
            <div>
              <h4 className="font-maisonNeue font-book text-sm leading-5 text-black mb-3">
                Waist
              </h4>
              <div className="grid grid-cols-4 gap-2">
                {waistSizes.map((size) => (
                  <label
                    key={size}
                    className="cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedSizes.includes(size)}
                      onChange={() => handleSizeChange(size)}
                      className="sr-only"
                    />
                    <div
                      className={`
                        w-full h-10 flex items-center justify-center text-sm font-maisonNeue font-book
                        border border-gray-300 rounded transition-colors duration-200
                        ${selectedSizes.includes(size)
                          ? 'bg-black text-white border-black'
                          : 'bg-gray-100 text-black hover:bg-gray-200'
                        }
                      `}
                    >
                      {size}
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Clothing Sizes Section */}
          {showClothing && (
            <div>
              <h4 className="font-maisonNeue font-book text-sm leading-5 text-black mb-3">
                Clothing
              </h4>
              <div className="grid grid-cols-4 gap-2">
                {clothingSizes.map((size) => (
                  <label
                    key={size}
                    className="cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedSizes.includes(size)}
                      onChange={() => handleSizeChange(size)}
                      className="sr-only"
                    />
                    <div
                      className={`
                        w-full h-10 flex items-center justify-center text-sm font-maisonNeue font-book
                        border border-gray-300 rounded transition-colors duration-200
                        ${selectedSizes.includes(size)
                          ? 'bg-black text-white border-black'
                          : 'bg-gray-100 text-black hover:bg-gray-200'
                        }
                      `}
                    >
                      {size}
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SizeFilter;