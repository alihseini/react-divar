import { sendOtp } from "../../services/auth";
import toast from "react-hot-toast";

function SendOtp({ mobile, setMobile, setStep }) {
  const submitHandler = async (e) => {
    e.preventDefault();

    if (!/^09\d{9}$/.test(mobile)) {
      toast.error("شماره موبایل معتبر نیست");
      return;
    }

    const { response, error } = await sendOtp(mobile);

    if (response) setStep(2);
    if (error) toast.error(error.response?.data.message || "خطا در ارسال کد");
  };

  return (
    <form
      onSubmit={submitHandler}
      className="bg-white h-70 rounded-lg shadow-lg w-100"
    >
      <p className="text-lg font-semibold !p-3">ورود به حساب کاربری</p>
      <p className="text-right !p-2 text-sm text-gray-400">
        برای استفاده از خدمات دیوار،لطفا شماره موبایل خود را وارد کنید. کد تایید
        به این شماره ارسال میشود.
      </p>
      <label htmlFor="input" className="block text-right !p-3">
        شماره موبایل:
      </label>
      <input
        type="text"
        id="input"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        className="w-70 !p-1.5 border border-gray-300 rounded !ml-4"
        placeholder="شماره موبایل..."
      />
      <button
        type="submit"
        className="w-20 bg-red-600 text-white !p-1 rounded hover:bg-red-300 hover:cursor-pointer delay-50 ease-in"
      >
        تایید
      </button>
    </form>
  );
}

export default SendOtp;
