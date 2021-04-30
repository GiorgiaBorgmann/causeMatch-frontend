import React from 'react'
import '../style/donorCard.css'

export default function DonorCard({ donor }) {
    return (
        <div className='card-container'>
            <div className='container-blue'>
                <div className='amount'>${donor.amount}</div>
                <div className='name'>{donor.name}</div>
            </div>
            <div className='container-white'>
                <span>Donation through</span>
                <div>{donor.donationThrough}</div>
            </div>
        </div>
    )
}