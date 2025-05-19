import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  // React 개발 모드에서만 동작하는 래퍼 컴포너트
  // 1. 잠재적 문제 탐지
  // 2. 일부 함수 두번 실행 (개발자에게 경고)
  // 3. 오래된 API 사용 탐지

  // -> 실사용(프로덕션)에서는 아무런 영향을 주지 않음.
  // 개발하는데 콘솔이 너무 많이찍혀서 짜증나면 StrictMode를 지우면 됨.
  <StrictMode>
    <App />
  </StrictMode>
);
