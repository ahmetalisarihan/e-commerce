import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/categorySlice";
import { RootState } from "../../redux/store";

const Category: React.FC = () => {
  const dispatch = useDispatch<any>();
  const { categories } = useSelector((state: RootState) => state.categories);

  console.log(categories, "categories");

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch])
  return (
    <div className="w-1/6 bg-gray-100 p-4">
      <div className="border-b pb-1 px-2 text-xl font-bold">KATEGORİLER</div>
      {categories?.map((category, i) => (
        <div className="text-transform: uppercase text-sm font-bold cursor-pointer hover:bg-gray-200 p-2" key={i}>{category}</div>
      ))}
    </div>
  );
};

export default Category;
