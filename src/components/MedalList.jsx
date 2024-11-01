import React from "react";
import MedalItem from "./MedalItem";

const MedalList = ({ countries, deleteCountry }) => {
  // 올림픽에서 메달 순위 매기는 매커니즘: 금메달 수 >> 은메달 수 >> 동메달 수 >> 공동 순위
const calculateRanks = (countries) => {
  return countries
    .sort((a, b) => {
      if (b.gold !== a.gold) return b.gold - a.gold;
      if (b.silver !== a.silver) return b.silver - a.silver;
      return b.bronze - a.bronze;
    })
    .map((country, index, sortedArray) => {
      // 만약 메달 수가 다 같으면,
      const prevCountry = sortedArray[index - 1];
      if (
        prevCountry &&
        prevCountry.gold === country.gold &&
        prevCountry.silver === country.silver &&
        prevCountry.bronze === country.bronze
      ) {
        country.rank = prevCountry.rank; // 공동 순위 부여
      } else {
        country.rank = index + 1;
      }
      return country;
    });
  };
  
  const rankedCountries = calculateRanks(countries);
  
  return (
    <div className="overflow-x-auto bg-gray-50 rounded-lg shadow-md">
      <table className="min-w-full bg-white">
        <thead className="bg-blue-100">
          <tr>
            <th className="py-3 px-6 text-center text-purple-700 font-semibold">
              순위
            </th>
            <th className="py-3 px-6 text-center text-gray-700 font-semibold">
              국가명
            </th>
            <th className="py-3 px-6 text-center text-yellow-600 font-semibold">
              금메달
            </th>
            <th className="py-3 px-6 text-center text-gray-500 font-semibold">
              은메달
            </th>
            <th className="py-3 px-6 text-center text-yellow-800 font-semibold">
              동메달
            </th>
            <th className="py-3 px-6 text-center text-gray-700 font-semibold">
              액션
            </th>
          </tr>
        </thead>
        <tbody>
          {rankedCountries.map((country, index) => (
            <MedalItem
              key={index}
              country={country}
              rank={country.rank}
              deleteCountry={deleteCountry}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MedalList;
