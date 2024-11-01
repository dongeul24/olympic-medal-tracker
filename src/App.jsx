import React, { useState, useEffect } from "react";
import MedalForm from "./components/MedalForm";
import MedalList from "./components/MedalList";

const App = () => {
  const [countries, setCountries] = useState(() => {
    // 로컬 스토리지에서 데이터를 불러와 초기값 설정
    const storedCountries = JSON.parse(localStorage.getItem("countries"));
    return storedCountries || []; // null일 경우 빈 배열로 설정
  });

  //로컬스토리지에 countries 라는 이름의 배열(내부에 각 나라별 메달 수 데이터있음) 저장하기.
  useEffect(() => {
    localStorage.setItem("countries", JSON.stringify(countries));
  }, [countries]);

  const addCountry = (newCountry) => {
    //추가되고자 하는 국가이름이 이미 countries안에 있을 때
    if (countries.some((country) => country.name === newCountry.name)) {
      alert("이미 등록된 국가입니다.");
    } else {
      //없으면 추가
      setCountries([...countries, newCountry]);
    }
  };

  //이미 등록된 국가 메달 수 업데이트 하는 기능
  const updateCountry = (updatedCountry) => {
    const index = countries.findIndex(
      (country) => country.name === updatedCountry.name
    );

    // 배열에서 특정 요소가 존재하지 않을 때, Array.prototype.indexOf()메서드는
    // -1을 반환한다고해서, 배열에 해당 국가가 없을 때 반환되는 index === -1을 이용.
    if (index === -1) {
      alert("등록되지 않은 국가입니다.");
    } else {
      const updatedCountries = [...countries];
      updatedCountries[index] = updatedCountry;
      setCountries(updatedCountries);
    }
  };

  //삭제 기능(filter 사용)
  const deleteCountry = (name) => {
    setCountries(countries.filter((country) => country.name !== name));
    alert("삭제했습니다.");
  };

  return (
    <div className="flex justify-center p-5 bg-gray-100">
      <div className="w-full max-w-4xl text-center">
        <h1 className="text-3xl font-bold mb-5">2024 파리 올림픽</h1>
        <MedalForm addCountry={addCountry} updateCountry={updateCountry} />
        <MedalList countries={countries} deleteCountry={deleteCountry} />
      </div>
    </div>
  );
};

export default App;
