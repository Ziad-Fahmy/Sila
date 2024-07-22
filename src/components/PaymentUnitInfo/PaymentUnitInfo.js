import "./PaymentUnitInfo.css";


import OneBedroom from "./OneBedroom";
import TwoBedroom from "./TwoBedroom";


function PaymentUnitInfo() {
  return (
    <>
      <div className="PaymentUnitInfo__oneBedroom">
        <OneBedroom />
        <TwoBedroom />

      </div>
    </>
  );
}

export default PaymentUnitInfo;
