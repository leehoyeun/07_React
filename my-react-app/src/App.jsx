import { useState } from "react";
import "./App.css";
import Exam2 from "./components/Exam2";
import Exam3 from "./components/Exam3";
import Exam4 from "./components/Exam4";
import Exam5 from "./components/Exam5";
import Exam6 from "./components/Exam6";
import Exam7 from "./components/Exam7";

function App() {
  // 상태(state)
  const [showExam, setShowExam] = useState(true);

  return (
    // js 주석
    // <></> : fragment (html 역할 X)
    /*
      
    <>
       jsx 주석 
      // <h1>hellow world</h1>
      // <h1>hellow world</h1>
    </>
    //형제끼리는 동일선상에 존재할수 없음 <></>로 감싸야함
  */

    // <>
    //   <button onClick={() => setShowExam(!showExam)}>클릭</button>

    //   {/* showExam 이 true면 화면에 Exam1 컴포넌트 호출하여 렌더링함 */}
    //   {showExam && <Exam2 hoyeun="hello" test="world" />}
    // </>

    // <Exam3 />
    // <Exam4 />
    // <Exam5 />
    // <Exam6 />
    <Exam7 />
  );
}

export default App;
