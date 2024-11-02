import React, { useState } from "react";
import commentorIcon from ".././../../assets/avatar.png";
import { formatDate } from "../../../utils/formatDate";
import RatingStars from "../../../components/RatingStars";
import PostAReview from "./PostAReview";
function ReviewsCard({ productReviews }) {
  const review = productReviews || {};
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenReviewModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseReviewModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="my-6 bg-white">
      <div>
        {review.length > 0 ? (
          <div>
            <h3 className="text-lg font-medium">All comments...</h3>
            <div>
              {review.map((review, index) => (
                <div key={index} className="mt-4">
                  <div className="flex gap-4 space-y-1 items-center">
                    <img src={commentorIcon} alt="" className="size-14" />
                    <div>
                      <p className="text-lg font-medium underline capitalize underline-offset-4">
                        {review.userId?.username}
                      </p>
                      <p className="text-[12px] italic">
                        {formatDate(review?.updatedAt)}
                      </p>
                      <RatingStars rating={review?.rating}></RatingStars>
                    </div>
                  </div>
                  <div className="text-gray-600 mt-5 border p-8">
                    <p className="md:w-4/5">{review?.comment}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p>No reviews yet</p>
        )}
      </div>
      <div className="mt-12">
        <button
          onClick={handleOpenReviewModal}
          className="px-6 py-3 bg-primary text-white rounded-md"
        >
          Add A Review
        </button>
      </div>

      <div>
        <PostAReview
          isModalOpen={isModalOpen}
          handleClose={handleCloseReviewModal}
        ></PostAReview>
      </div>
    </div>
  );
}

export default ReviewsCard;
