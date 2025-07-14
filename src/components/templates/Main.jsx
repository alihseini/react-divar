import { useState } from "react";
import { sp } from "../../utils/numbers";

function Main({ posts }) {
  const itemsPerPage = 100;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(posts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = posts
    .slice(startIndex, endIndex)
    .filter((item) => item && item.options);

  return (
    <main className="!pt-16 !pr-60 !p-6 min-h-screen bg-gray-50">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
          >
            <div className="!p-4">
              <h2 className="text-lg font-semibold !mb-2">
                {item.options.title || "عنوان ندارد"}
              </h2>
              <img
                src={`${import.meta.env.VITE_BASE_URL}${
                  item.images?.[0] || ""
                }`}
                alt={item.options.title || ""}
                className="w-full h-48 object-cover rounded-md !mb-4"
              />
              <p className="text-gray-700 !mb-1">{sp(item.amount)} تومان</p>
              <p className="text-gray-500">
                {item.options.city || "شهر نامشخص"}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="!mt-8 flex justify-center space-x-2 flex-wrap">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`!px-4 !py-2 rounded-md text-sm font-medium transition ${
              currentPage === page
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </main>
  );
}

export default Main;
