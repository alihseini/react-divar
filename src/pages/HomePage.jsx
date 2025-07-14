import { useQuery } from "@tanstack/react-query";
import SideBar from "../components/templates/SideBar";
import { getAllPosts } from "../services/user";
import Loader from "../components/modules/Loader";
import Main from "../components/templates/Main";

function HomePage() {
  const { data, isPending } = useQuery({
    queryKey: ["get-all-posts"],
    queryFn: getAllPosts,
  });
  return (
    <>
      {isPending ? (
        <Loader />
      ) : (
        <div>
          <SideBar />
          <Main posts={data?.data?.posts} />
        </div>
      )}
    </>
  );
}

export default HomePage;
