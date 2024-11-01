import React, { useState } from "react";

const MedalForm = ({ addCountry, updateCountry }) => {
  const [name, setName] = useState("");
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);

  const handleAdd = (addEvent) => {
    addEvent.preventDefault();
    // 폼이 제출되었을 때 페이지가 새로 고침되는 기본 동작을 방지
    // 그냥 이름을 "" 아닌 경우만하면 띄어쓰기했을 때 추가되는 경우가 있어서 trim()써주기
    if (name.trim() === "") [alert("국가명을 입력해주세요.")];
    else if (gold >= 0 && silver >= 0 && bronze >= 0) {
      addCountry({
        name,
        //여기 어차피 name: name이니까 걍 name으로 써도됨.
        gold: Number(gold),
        silver: Number(silver),
        bronze: Number(bronze),
      });
      resetForm();
    }
  };

  const handleUpdate = (updateEvent) => {
    updateEvent.preventDefault();
    updateCountry({
      name,
      gold: Number(gold),
      silver: Number(silver),
      bronze: Number(bronze),
    });
    resetForm();
  };

  // 초기화시켜주는 함수
  const resetForm = () => {
    setName("");
    setGold(0);
    setSilver(0);
    setBronze(0);
  };

  return (
    <form
      className="bg-gray-50 p-6 rounded-lg shadow-md mb-6 space-y-4"
      onSubmit={handleAdd}
    >
      <h2 className="text-lg font-bold text-gray-700 mb-4">
        올림픽 메달 트래커
      </h2>

      {/* 국가명 입력하는 곳 */}
      <div className="flex items-center mb-4">
        <label
          className="block text-gray-700 mr-2"
          htmlFor="country-name"
          style={{ width: "100px" }}
        >
          국가명:
        </label>
        <input
          id="country-name"
          className="flex-grow p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="국가명 입력"
          maxLength={60} //알아보니 세계에서 가장 긴 국가명은 60자를 넘지 않는다고함 (한글, 알파벳 포함)
          required
        />
      </div>

      {/* 금메달 입력하는 곳 */}
      <div className="flex items-center mb-4">
        <label
          className="block text-gray-700 mr-2"
          htmlFor="gold-medals"
          style={{ width: "100px" }}
        >
          금메달:
        </label>
        <input
          id="gold-medals"
          type="number"
          min="0"
          className="flex-grow p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
          value={gold}
          onChange={(e) => setGold(e.target.value)}
          placeholder="Gold Medals"
          required
        />
      </div>

      {/* 은메달 입력하는 곳 */}
      <div className="flex items-center mb-4">
        <label
          className="block text-gray-700 mr-2"
          htmlFor="silver-medals"
          style={{ width: "100px" }}
        >
          은메달:
        </label>
        <input
          id="silver-medals"
          type="number"
          min="0"
          className="flex-grow p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
          value={silver}
          onChange={(e) => setSilver(e.target.value)}
          placeholder="Silver Medals"
          required
        />
      </div>

      {/* 동메달 입력하는 곳 */}
      <div className="flex items-center mb-4">
        <label
          className="block text-gray-700 mr-2"
          htmlFor="bronze-medals"
          style={{ width: "100px" }}
        >
          동메달:
        </label>
        <input
          id="bronze-medals"
          type="number"
          min="0"
          className="flex-grow p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
          value={bronze}
          onChange={(e) => setBronze(e.target.value)}
          placeholder="Bronze Medals"
          required
        />
      </div>

      <div className="flex justify-end space-x-3 mt-4">
        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          추가
        </button>
        <button
          onClick={handleUpdate}
          className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          업데이트
        </button>
      </div>
    </form>
  );
};

export default MedalForm;
