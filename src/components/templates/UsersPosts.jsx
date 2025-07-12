import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../services/user";
import Loader from "../modules/Loader";
import { sp } from "../../utils/numbers";

function UsersPosts() {
  const { data, isPending } = useQuery({
    queryKey: ["get-posts"],
    queryFn: getPosts,
  });

  return (
    <div className="w-full">
      <p className="text-2xl font-bold border-b-2 !p-2 w-fit border-red-600 mb-6">
        آگهی‌های شما
      </p>

      {isPending ? (
        <Loader />
      ) : (
        data.data.posts.map((item) => (
          <div
            key={item._id}
            className="flex justify-between items-center w-full border border-gray-300 bg-white !p-4 rounded-md !my-4"
          >
            <div className="flex gap-6 items-center max-w-[70%]">
              <img
                src={`${import.meta.env.VITE_BASE_URL}${item.images[0]}`}
                alt="image"
                className="w-28 h-28 object-cover rounded"
              />
              <div className="space-y-1">
                <p className="font-bold text-lg">{item.options.title}</p>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {item.options.content}
                </p>
              </div>
            </div>

            <div className="text-right min-w-[100px] space-y-1">
              <p className="text-sm text-gray-500">
                {new Date(item.createdAt).toLocaleDateString("fa-IR")}
              </p>
              <p className="font-semibold text-red-600">
                {sp(item.amount)} تومان
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default UsersPosts;
