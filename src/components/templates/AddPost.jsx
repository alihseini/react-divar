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
    price: "",
    image: null,
  });

  const { data } = useQuery({
    queryKey: ["get-categories"],
    queryFn: getCategories,
  });

  const changeHandler = (event) => {
    const name = event.target.name;
    if (name !== "file") {
      setForm({ ...form, [name]: event.target.value });
    } else {
      setForm({ ...form, [name]: event.target.files[0] });
    }
  };

  const addHandler = (event) => {
    event.preventDefault();
    const formData = new FormData();
    for (let i in form) {
      formData.append(i, form[i]);
    }
    const accessToken = getCookie("accessToken");

    axios
      .post(`${import.meta.env.VITE_BASE_URL}post/create`, formData, {
        headers: {
          Authorization: `bearer ${accessToken}`,
        },
      })
      .then((res) => toast.success(res.data.message))
      .catch((error) => toast.error("مشکلی پیش آمده است"));
  };

  return (
    <form className="flex flex-col w-full !my-30" onChange={changeHandler}>
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
        className="w-50 border-dashed border-2 focus:outline-none border-red-700 !px-2 !py-1 "
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
        className="w-50 border-dashed border-2 focus:outline-none border-red-700 border-red-7 !px-2 !py-1"
      />
      <label htmlFor="price" className="!my-5">
        قیمت:
      </label>
      <input
        type="text"
        name="price"
        id="price"
        className="w-50 border-dashed border-2 focus:outline-none border-red-700 !px-2 !py-1"
      />
      <label htmlFor="image" className="!my-5">
        تصویر:
      </label>
      <input
        type="file"
        name="image"
        id="image"
        className="w-50 border-dashed border-2 focus:outline-none border-red-700 !px-2 !py-1"
      />
      <button
        onClick={addHandler}
        className="w-30 bg-red-600 text-white !p-1 !my-6 rounded hover:bg-red-300 hover:cursor-pointer delay-50 ease-in"
      >
        افزودن آگهی
      </button>
    </form>
  );
}

export default AddPost;
