import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { getAllCategories } from "../api/category";

function Home() {
  const [categories, setCategories] = useState();

  const init = async () => {
    const result = await getAllCategories();
    setCategories(result.data);
    console.log(result.data);
  };
  console.log(categories);

  useEffect(() => {
    init();
  }, []);

  return (
    <div>
      <Header />
      <div className="display-5 text-center">All Products</div>
      <Link to="/product">
        <button className="btn btn-info">Show all products</button>
      </Link>

      <div className="row">
        {categories?.map((category) => (
          <div className="col">
            {console.log(category.id)}
            <div className="card bg-dark text-white" key={category.id}>
              <Link to="/product">
                <div className="p-5 text-decoration-none">{category.name}</div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
