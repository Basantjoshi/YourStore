import React, { useEffect, useState } from "react";
import ProductCards from "./ProductCards";
import ShopFiltering from "./ShopFiltering";
import { useFetchAllProductsQuery } from "../../redux/features/products/productsApi";

const filters = {
  categories: ["all", "Living Room", "Bedroom", "Dining Room", "Office Furniture"],
  priceRanges: [
    { label: "Under Rs.1000", min: 0, max: 1000 },
    { label: "Rs.1000 - Rs.5000", min: 1000, max: 5000 },
    { label: "Rs.5000 - Rs.10000", min: 5000, max: 10000 },
    { label: "Rs.10000 and above", min: 10000, max: Infinity },
  ],
};

const ShopPage = () => {
  const [filtersState, setFiltersState] = useState({
    category: "all",
    priceRange: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [ProductsPerPage] = useState(6);

  const { category, priceRange } = filtersState;
  const [minPrice, maxPrice] = priceRange.split("-").map(Number);
  const {
    data: { products = [], totalPages, totalProducts } = {},
    error,
    isLoading,
  } = useFetchAllProductsQuery({
    category: category !== "all" ? category.replace(/-/g, ' ').toLowerCase() : "",
    minPrice: isNaN(minPrice) ? "" : minPrice,
    maxPrice: isNaN(maxPrice) ? "" : maxPrice,
    page: currentPage,
    limit: ProductsPerPage,
  });

  //clear filters
  const clearFilters = () => {
    setFiltersState({
      category: "all",
      priceRange: "",
    });
  };
  //handle page change
  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  if (isLoading) return <div>Loading......</div>;
  if (error) return <div>Error loading products</div>;

  const startProduct = (currentPage - 1) * ProductsPerPage + 1;
  const endProduct = startProduct + products.length - 1;
  return (
    <>
      <section className="section__container bg-primary-light">
        <h2 className="section__header capitalize">Shop Page</h2>
        <p className="section__subheader">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis enim
          praesentium dignissimos officiis iusto reprehenderit, quae aliquid
          similique distinctio minus tempore rem animi excepturi vel sit veniam
          quibusdam voluptatibus tenetur?
        </p>
      </section>
      <section className="section__container">
        <div className="flex flex-col md:flex-row md:gap-12 gap-8">
          {/* left side */}
          <div>
            <ShopFiltering
              filters={filters}
              setFiltersState={setFiltersState}
              filtersState={filtersState}
              clearFilters={clearFilters}
            />
          </div>
          {/* right side */}
          <div>
            <h3 className="text-xl font-medium">
              Showing {startProduct} to {endProduct} of {totalProducts} products
            </h3>
            <ProductCards products={products} />

            {/* pagination controls */}
            <div className="mt-6 flex justify-center"></div>
            <button
            disabled= {currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md mr-2"
            >
              Previous
            </button>
            {[...Array(totalPages)].map((_, index) => (
              <button
                onClick={() => handlePageChange(index + 1)}
                key={index}
                className={`px-4 py-2 ${
                  currentPage === index + 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-gray-700"
                } rounded-md mx-1`}
              >
                {index + 1}
              </button>
            ))}
            <button
            disabled= {currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md mr-2"
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopPage;
