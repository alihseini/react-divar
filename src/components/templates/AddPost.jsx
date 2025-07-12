import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../services/admin";
import { useState } from "react";
import axios from "axios";
import { getCookie } from "../../utils/cookie";
import toast from "react-hot-toast";

function AddPost() {
  const [form, setForm] = useState({
    title: "",
    content: "",
    category: "",
    city: "",
    amount: "",
    images: null,
  });

  const { data } = useQuery({
    queryKey: ["get-categories"],
    queryFn: getCategories,
  });

  const changeHandler = (event) => {
    const { name, type, value, files } = event.target;
    if (type === "file") {
      setForm((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const addHandler = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    for (let key in form) {
      formData.append(key, form[key]);
    }

    // دیباگ برای اطمینان از فایل
    console.log("form.image:", form.image);
    console.log("formData.get('image'):", formData.get("image"));

    const accessToken = getCookie("accessToken");

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}post/create`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            // مهم: Content-Type رو نذار چون axios خودش تنظیم می‌کنه
          },
        }
      );
      toast.success(res.data.message);
    } catch (err) {
      console.error(err);
      toast.error("مشکلی پیش آمده است");
    }
  };

  return (
    <form
      className="flex flex-col w-full !mt-30"
      onSubmit={addHandler}
      onChange={changeHandler}
    >
      <p className="text-2xl font-bold border-b-2 !p-2 w-fit border-red-600">
        افزودن آگهی:
      </p>

      <label htmlFor="title" className="!my-5">
        عنوان:
      </label>
      <input
        type="text"
        name="title"
        id="title"
        className="w-50 border-dashed border-2 focus:outline-none border-red-700 !px-2 !py-1"
      />

      <label htmlFor="content" className="!my-5">
        توضیحات:
      </label>
      <textarea
        name="content"
        id="content"
        className="w-50 border-dashed border-2 focus:outline-none border-red-700 !px-2 !py-1"
      />

      <label htmlFor="category" className="!my-5">
        دسته بندی:
      </label>
      <select
        name="category"
        id="category"
        className="w-50 border-dashed border-2 border-red-700 focus:outline-none"
      >
        {data?.map((item) => (
          <option key={item._id} value={item._id}>
            {item.name}
          </option>
        ))}
      </select>

      <label htmlFor="city" className="!my-5">
        شهر:
      </label>
      <input
        type="text"
        name="city"
        id="city"
        className="w-50 border-dashed border-2 focus:outline-none border-red-700 !px-2 !py-1"
      />

      <label htmlFor="amount" className="!my-5">
        قیمت:
      </label>
      <input
        type="number"
        name="amount"
        id="amount"
        className="w-50 border-dashed border-2 focus:outline-none border-red-700 !px-2 !py-1"
      />

      <label htmlFor="images" className="!my-5">
        تصویر:
      </label>
      <input
        type="file"
        name="images"
        id="images"
        className="w-50 border-dashed border-2 focus:outline-none border-red-700 !px-2 !py-1"
      />

      <button
        type="submit"
        className="w-30 bg-red-600 text-white !p-1 !my-6 rounded hover:bg-red-300 hover:cursor-pointer delay-50 ease-in"
      >
        افزودن آگهی
      </button>
    </form>
  );
}

export default AddPost;
