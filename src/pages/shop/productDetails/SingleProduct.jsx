import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import RatingStars from "../../../components/RatingStars";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useFetchProductByIdQuery } from "../../../redux/feature/products/productsApi";
import { addToCart } from "../../../redux/feature/cart/cartSlice";
import ReviewsCard from "../Reviews/ReviewsCard";
function SingleProduct() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, error, isLoading } = useFetchProductByIdQuery(id);
  const singleProduct = data?.product || {};
  const productReviews = data?.reviews || [];
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading</p>;

  return (
    <>
      <section className="section__container bg-primary-light">
        <h2 className="section__header capitalize">Single Product Page</h2>
        <div className="section__subheader space-x-2">
          <span className="hover:text-primary">
            <Link to="/">home</Link>
          </span>
          <i className="ri-arrow-right-s-line"></i>
          <span className="hover:text-primary">
            <Link to="/shop">shop</Link>
          </span>
          <i className="ri-arrow-right-s-line"></i>
          <span className="hover:text-primary">{singleProduct?.name}</span>
        </div>
      </section>
      <section className="section__container mt-8">
        <div className="flex flex-col items-center md:flex-row gap-8">
          <div className="md:w-1/2 w-full">
            <img
              src={singleProduct?.image}
              alt={singleProduct?.name}
              className="rounded-md w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 w-full">
            <h3 className="text-2xl font-semibold mb-4">
              {singleProduct?.name}
            </h3>
            <p className="text-2xl text-primary mb-4 space-x-1">
              ${singleProduct?.price}
              {singleProduct?.oldPrice && (
                <s className="ml-2">${singleProduct.oldPrice}</s>
              )}
            </p>
            <p className="text-gray-400 mb-4">{singleProduct.description}</p>
            <div>
              <p>
                <strong>Category:</strong> {singleProduct?.category}
              </p>
              <p>
                <strong>Color:</strong> {singleProduct?.color}
              </p>
              <div className="flex gap-1 items-center">
                <strong>Rating:</strong>
                <RatingStars rating={singleProduct?.rating} />
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation;
                  handleAddToCart(singleProduct);
                }}
                className="mt-6 px-6 py-3 text-white bg-primary rounded"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section__container mt-8">
        <ReviewsCard productReviews={productReviews} />
      </section>
    </>
  );
}

export default SingleProduct;