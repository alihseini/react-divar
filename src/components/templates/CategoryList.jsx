import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteCategory, getCategories } from "../../services/admin";
import MiniLoader from "../modules/MiniLoader";
import toast from "react-hot-toast";

function CategoryList() {
  const queryClient = useQueryClient();
  const { data, isPending } = useQuery({
    queryKey: ["get-categories"],
    queryFn: getCategories,
  });

  const { mutate } = useMutation({
    mutationFn: deleteCategory,
    onSuccess: () => {
      queryClient.invalidateQueries(["get-categories"]);
      toast.success("دسته بندی حذف شد");
    },
  });

  const deleteHandler = (id) => {
    mutate(id);
  };

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
            <button
              onClick={() => deleteHandler(item._id)}
              className="border-dashed transition-all delay-75 ease-in rounded-xl hover:cursor-pointer bg-white hover:bg-red-400 hover:text-white border-2 !p-2 border-red-700"
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default CategoryList;
