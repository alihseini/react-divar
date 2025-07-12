import AddPost from "../components/templates/AddPost";
import UsersPosts from "../components/templates/UsersPosts";

function DashboardPage() {
  return (
    <div className="flex flex-col w-full">
      <AddPost />
      <UsersPosts />
    </div>
  );
}

export default DashboardPage;
