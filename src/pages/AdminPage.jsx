import AddCategoryForm from "../components/templates/AddCategoryForm";
import CategoryList from "../components/templates/CategoryList";

function AdminPage() {
  return (
    <div className="flex flex-col w-full">
      <CategoryList />
      <AddCategoryForm />
    </div>
  );
}

export default AdminPage;
