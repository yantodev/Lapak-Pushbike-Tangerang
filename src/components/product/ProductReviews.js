import React from 'react';
import { IoMdStar } from 'react-icons/io';

const ProductReviews = (props) => {

    const { name, date, review, rateCount } = props;

    return (
        <>
            <li>
                <div className="user_info">
                    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="user-img" />
                    <div>
                        <h4>{name}</h4>
                        <div className="user_ratings">
                            <span className="rating_star">
                                {
                                    [...Array(rateCount)].map((_, i) => <IoMdStar key={i} />)
                                }
                            </span>
                            <span>|</span>
                            <span className="date">{date}</span>
                        </div>
                    </div>
                </div>
                <p className="user_review">{review}</p>
            </li>
        </>
    );
};

export default ProductReviews;
