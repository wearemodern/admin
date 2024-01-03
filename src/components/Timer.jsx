import React from "react";
import { useTimer } from "react-timer-hook";
import './../../css/timer.css'
function MyTimer({ expiryTimestamp,discounted }) {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp
  });
  return (
    <div style={{ textAlign: "center"}} >
  {   discounted && <div style={{ fontSize: "14px" }}  className={`${
    'd-flex justify-content-between'
    } timer-box`}>
<span className="ml-3">
  تا پایان تخفیف
</span>
       <div>
       <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
        <span>{seconds}</span>
       </div>
      </div>}
     { !discounted && <div>
      &nbsp;
      </div>}
    </div>
  );
}
export default function App({discounted}) {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
  return (
    <div>
      <MyTimer expiryTimestamp={time} discounted={discounted}/>
    </div>
  );
}
