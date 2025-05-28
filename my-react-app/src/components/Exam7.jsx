// SpringBoot 서버로 , React 클라이언트로 서로 요청/응답 주고받는 예제

import { useState } from "react";

const Exam7 = () => {
  const [portMsg, setPortMsg] = useState(null);
  // 만약 하단부에 안전 탐색연산자 ? 를 사용하기 실을때는 초기 셋팅 값을 null이아니라 [] 열로 처리하면 된다!
  const [userMsg, setUserMsg] = useState("");

  const getPortNumber = () => {
    fetch("http://localhost/getPortNumber")
      .then((res) => res.json())
      .then((data) => {
        setPortMsg(data);
      });
  };
  const getUserInfo = () => {
    fetch("http://localhost/getUserInfo", {
      method: "post",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify({ name: "홍길동", age: "20" }),
    })
      .then((res) => res.text())
      .then((data) => setUserMsg(data));
  };
  return (
    <div>
      <p>1. 서버로부터 응답 받은 값(GET)</p>
      <button onClick={getPortNumber}> GET 요청 보내기</button>
      <ul>
        {portMsg?.map((msg, idx) => (
          <li key={idx}>{msg}</li>
        ))}
      </ul>

      <p>2. 서버로 값 전달 후, 응답 받은 값(POST)</p>
      <button onClick={getUserInfo}> POST 요청 보내기</button>
      <p>{userMsg}</p>
    </div>
  );
};

export default Exam7;
