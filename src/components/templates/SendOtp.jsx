import { sendOtp } from "../../services/auth";
import toast, { Toaster } from "react-hot-toast";

function SendOtp({ mobile, setMobile, setStep }) {
  const submitHandler = async (e) => {
    e.preventDefault();
    if (mobile.length !== 11) return;

    const { response, error } = await sendOtp(mobile);

    if (response) setStep(2);
    if (error) toast.error(error.response?.data.message);
  };
  return (
    <form onSubmit={submitHandler}>
      <p>ورود به حساب کاربری</p>
      <label htmlFor="input">شماره موبایل</label>
      <input
        type="text"
        id="input"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      <button type="submit">تایید</button>
      <Toaster />
    </form>
  );
}

export default SendOtp;
