import toast from "react-hot-toast";
import { checkOtp } from "../../services/auth";
import { setCookie } from "../../utils/cookie";
import { useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../../services/user";

function CheckOtp({ mobile, code, setCode, setStep }) {
  const navigate = useNavigate();

  const { refetch } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
    enabled: false,
  });

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!/^\d{4,6}$/.test(code)) {
      toast.error("کد وارد شده معتبر نیست");
      return;
    }

    const { response, error } = await checkOtp(mobile, code);

    if (response) {
      toast.success("با موفقیت وارد شدید!");
      setCookie(response.data);
      await refetch();
      navigate("/");
    }

    if (error) {
      if (error?.response?.status === 401) {
        toast.error("کد وارد شده اشتباه است!");
      } else {
        toast.error("ورود با خطا مواجه شد!");
      }
    }
  };

  return (
    <form
      onSubmit={submitHandler}
      className="bg-white h-70 rounded-lg shadow-lg w-100"
    >
      <p className="text-lg font-semibold !p-3">تایید کد ارسال شده </p>
      <p className="text-right !p-2 text-sm text-gray-400">
        کد ارسال شده به شماره {mobile} را وارد کنید
      </p>
      <label htmlFor="input" className="block text-right !p-3">
        کد تایید:
      </label>

      <input
        type="text"
        id="input"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="w-70 !p-1.5 border border-gray-300 rounded !ml-4 focus:outline-none"
      />

      <div className="flex flex-col items-center gap-4 !mt-4">
        <button
          type="submit"
          className="w-20 bg-red-600 text-white !p-1 rounded hover:bg-red-300 hover:cursor-pointer delay-50 ease-in"
        >
          تایید
        </button>
        <button
          type="button"
          onClick={() => setStep(1)}
          className="w-30 text-sm bg-gray-400 text-white rounded hover:bg-gray-300 hover:cursor-pointer delay-50 ease-in"
        >
          تغییر شماره همراه
        </button>
      </div>
    </form>
  );
}

export default CheckOtp;
