import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { addCategory } from "../services/admin";
import toast from "react-hot-toast";

function Admin() {
  const [form, setForm] = useState({ name: "", slug: "", icon: "" });
  const { mutate } = useMutation({
    mutationFn: addCategory,
    onSuccess: () => {
      toast.success("دسته‌بندی اضافه شد");
      setForm({ name: "", slug: "", icon: "" }); // پاک کردن فرم
    },
    onError: (error) => {
      if (error.status === 409) {
        toast.error("این دسته بندی قبلا اضافه شده است");
      } else {
        toast.error("خطا در اضافه کردن دسته بندی");
      }
    },
  });

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!form.name || !form.slug || !form.icon) {
      return toast("لطفا اطلاعات را تکمیل کنید");
    }
    mutate(form);
  };

  return (
    <form
      className="flex flex-col w-full"
      onChange={changeHandler}
      onSubmit={submitHandler}
    >
      <p className="text-2xl font-bold border-b-2 !p-2 w-fit border-red-600">
        ایجاد دسته بندی جدید
      </p>
      <div className="!p-5 flex gap-3 items-center ">
        <label htmlFor="name" className="w-10">
          نام
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-70 !p-1.5 border border-gray-300 rounded !ml-4"
          value={form.name}
        />
      </div>
      <div className="!p-5 flex gap-3 items-center">
        <label htmlFor="slug" className="w-10">
          اسلاگ
        </label>
        <input
          type="text"
          id="slug"
          name="slug"
          className="w-70 !p-1.5 border border-gray-300 rounded !ml-4"
          value={form.slug}
        />
      </div>
      <div className="!p-5 flex gap-3 items-center">
        <label htmlFor="icon" className="w-10">
          آیکون
        </label>
        <input
          type="text"
          id="icon"
          name="icon"
          className="w-70 !p-1.5 border border-gray-300 rounded !ml-4"
          value={form.icon}
        />
      </div>
      <button
        type="submit"
        className="w-30 bg-red-600 text-white !p-1 !mt-6 rounded hover:bg-red-300 hover:cursor-pointer delay-50 ease-in"
      >
        ایجاد دسته بندی
      </button>
    </form>
  );
}

export default Admin;
