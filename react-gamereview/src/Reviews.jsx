import React, { useState } from "react";
import Login from "./Login";

export default function Reviews(props) {
    let accounts = props.accounts || [];
    const [reviews, setReviews] = useState([]);


    function AddReview() {
        let newReview = {
            date:
                new Date().getFullYear() +
                "-" +
                (new Date().getMonth() + 1) +
                "-" +
                new Date().getDate(),
            title: document.getElementById("title").value,
            content: document.getElementById("content").value
        };
        setReviews((prevReviews) => [...prevReviews, newReview]);
        document.getElementById("title").value = "";
        document.getElementById("content").value = "";
    }

    const renderAccounts = () => {
        return accounts.map((account) => (
            <div key={account.username}>
                <h2>{account.username}</h2>
                <p>{account.role}</p>
            </div>
        ));
    };

    const renderReviewsHistory = () => {
        return reviews.map((review, index) => (
            <div key={index}>
                <h2>{review.title}</h2>
                <p>{review.date}</p>
                <p>{review.content}</p>
            </div>
        ));
    };


    if (props.isLoggedIn === false) {
        return <Login />;
    } else {
        return (
            <div>
                <h1>Wormmmy's Reviews!</h1>
                <h4>Game Review</h4>
                Game Title:{" "}
                <input type="text" name="title" id="title" />
                <br />
                <hr />
                Content:
                <br />
                <textarea
                    name="content"
                    id="content"
                    cols="50"
                    rows="10"
                ></textarea>
                <br />
                <button type="submit" onClick={AddReview}>
                    Submit
                </button>
                <h4>Game Review History:</h4>
                {reviews.length > 0 ? (
                    renderReviewsHistory()
                ) : (
                    <p>No reviews yet!</p>
                )}
            </div>
        );
    }
}