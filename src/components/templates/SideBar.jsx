import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../services/admin";

function SideBar() {
  const { data } = useQuery({
    queryKey: ["get-categories"],
    queryFn: getCategories,
  });

  return (
    <aside className="fixed top-18 right-0 h-[calc(100vh-64px)] w-60 bg-white border-l border-gray-200 shadow-lg !p-4 z-40">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        دسته‌بندی‌ها
      </h2>
      <ul className="flex flex-col gap-3">
        {data?.map((item) => (
          <li
            key={item._id}
            className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 transition duration-200 cursor-pointer group"
          >
            <div className="w-9 h-9 flex items-center justify-center rounded-md bg-gray-100 group-hover:bg-indigo-100 transition">
              <img
                src={`${item.icon}.svg`}
                alt={item.name}
                className="w-5 h-5"
              />
            </div>
            <span className="text-gray-700 text-sm font-medium group-hover:text-indigo-600">
              {item.name}
            </span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default SideBar;
