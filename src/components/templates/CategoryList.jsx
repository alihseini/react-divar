import { useQuery } from "@tanstack/react-query";
import Loader from "../modules/Loader";
import { getCategories } from "../../services/admin";
import MiniLoader from "../modules/MiniLoader";

function CategoryList() {
  const { data, isPending } = useQuery({
    queryKey: ["get-categories"],
    queryFn: getCategories,
  });
  console.log(data);
  return (
    <div className="!mt-20 !mb-5">
      {isPending ? (
        <MiniLoader />
      ) : (
        data.map((item) => (
          <div
            key={item._id}
            className="flex justify-between items-center w-150 !px-10 !py-5 !my-5 rounded-xl gap-10 border-dashed border-2 border-red-700"
          >
            <img src={`${item.icon}.svg`} />
            <p>{item.name}</p>
            <p>slug:{item.slug}</p>
            <button className="border-dashed transition-all delay-75 ease-in rounded-xl hover:cursor-pointer bg-white hover:bg-red-400 hover:text-white border-2 !p-2 border-red-700">
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default CategoryList;
