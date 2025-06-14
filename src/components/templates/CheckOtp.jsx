import toast from "react-hot-toast";
import { checkOtp } from "../../services/auth";
import { setCookie } from "../../utils/cookie";

function CheckOtp({ mobile, code, setCode, setStep }) {
  const submitHandler = async (e) => {
    e.preventDefault();
    const { response, error } = await checkOtp(mobile, code);
    if (response) {
      toast.success("!با موفقیت وارد شدید");
      setCookie(response.data);
    }
    if (error) {
      toast.error("!ورود با خطا مواجه شد")
    };
  };
  return (
    <form onSubmit={submitHandler}>
      <p>کد تایید اس ام اس شده به شماره ({mobile}) را وارد کنید</p>
      <label htmlFor="input">کد تایید</label>
      <input
        value={code}
        id="input"
        onChange={(e) => setCode(e.target.value)}
      />
      <button type="submit">تایید</button>
      <button onClick={() => setStep(1)}>تغییر شماره موبایل</button>
    </form>
  );
}

export default CheckOtp;
