"use client";

import { useEffect, useState } from 'react';

const orderItems = ['인기순', '업데이트순', '조회순', '별점순'];

const ContentListFilter = ({ onFilterChange } : { onFilterChange?: any}) => {
  const [order, setOrder] = useState('인기순');
  const [count, setCount] = useState(10);

  useEffect(() => {
    onFilterChange?.({
      order,
      count,
    });
  }, [order, count]);

  return (
    <div className="flex justify-between items-center px-2 py-4">
      <div className="flex gap-1 items-center dark:text-slate-400">
        <div
          data-select={'인기순' == order ? true : undefined}
          onClick={() => setOrder('인기순')}
          className="cursor-pointer hover:text-gray-600 hover:font-bold data-[select]:font-bold"
        >
          인기순
        </div>
        <div className="text-gray-400">•</div>
        <div
          data-select={'최신순' == order ? true : undefined}
          onClick={() => setOrder('최신순')}
          className="cursor-pointer hover:text-gray-600 hover:font-bold data-[select]:font-bold"
        >
          최신순
        </div>
        <div className="text-gray-400">•</div>
        <div
          data-select={'조회순' == order ? true : undefined}
          onClick={() => setOrder('조회순')}
          className="cursor-pointer hover:text-gray-600 hover:font-bold data-[select]:font-bold"
        >
          조회순
        </div>
        <div className="text-gray-400">•</div>
        <div
          data-select={'급상승' == order ? true : undefined}
          onClick={() => setOrder('급상승')}
          className="cursor-pointer hover:text-gray-600 hover:font-bold data-[select]:font-bold"
        >
          급상승
        </div>
      </div>
      <select
        id="select"
        defaultValue={10}
        onChange={(e) => setCount(parseInt(e.target.value))}
        className="px-1 block text-gray-900 bg-transparent border-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm cursor-pointer"
      >
        <option value={10}>
          10개씩 보기
        </option>
        <option value={20}>
          20개씩 보기
        </option>
        <option value={50}>
          50개씩 보기
        </option>
        <option value={100}>
          100개씩 보기
        </option>
      </select>
    </div>
  );
};

export default ContentListFilter;
