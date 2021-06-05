import React from 'react'

export default function MovieReviews(props){

    return(
        <div className="review-list">
            <ul>
                {props.reviews.map(r => {
                    return (
                        <li key={r.link.url} className="review">
                            <h3>{r.headline} | Opens: {r.opening_date}</h3>
                            <p>"{r.summary_short}"</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )

}
