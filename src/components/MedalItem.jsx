import React from "react";

const MedalItem = ({ country, rank, deleteCountry }) => {
  return (
    // table 짝수, 홀수 열마다 색 다르게 줄 수 있음(even과 odd 사용함)
    <tr className="even:bg-yellow-50  odd:bg-green-50   hover:bg-gray-50">
      <td className="py-3 px-6 text-purple-700 font-semibold">{rank}</td>
      <td className="py-3 px-6 text-gray-800 font-medium">{country.name}</td>
      <td className="py-3 px-6 text-yellow-600 font-semibold">
        {country.gold}
      </td>
      <td className="py-3 px-6 text-gray-500 font-semibold">
        {country.silver}
      </td>
      <td className="py-3 px-6 text-yellow-800 font-semibold">
        {country.bronze}
      </td>
      <td className="py-3 px-6">
        <button
          onClick={() => deleteCountry(country.name)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          삭제
        </button>
      </td>
    </tr>
  );
};

export default MedalItem;
