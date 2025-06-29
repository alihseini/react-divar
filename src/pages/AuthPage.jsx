import { useSearchParams } from "react-router";
import SendOtp from "../components/templates/SendOtp";
import CheckOtp from "../components/templates/CheckOtp";
import { useState } from "react";

function AuthPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const step = parseInt(searchParams.get("step") || "1");

  const [mobile, setMobile] = useState("");
  const [code, setCode] = useState("");

  const goToStep = (newStep) => {
    setSearchParams({ step: newStep });
  };

  return (
    <div className="w-full h-screen overflow-hidden flex items-center justify-center text-center bg-gray-100">
      {step === 1 && (
        <SendOtp mobile={mobile} setMobile={setMobile} setStep={goToStep} />
      )}
      {step === 2 && (
        <CheckOtp
          mobile={mobile}
          code={code}
          setCode={setCode}
          setStep={goToStep}
        />
      )}
    </div>
  );
}

export default AuthPage;
