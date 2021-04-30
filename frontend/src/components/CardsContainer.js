import React from 'react'
import { useSelector } from 'react-redux'
import DonorCard from './DonorCard'
import '../style/cardsContainer.css'

function CardsContainer() {

    const stateDonor = useSelector(state => state)
    let listDonors = []
    for(let i = stateDonor.length-1; i >= 0; i--) {
        listDonors.push(stateDonor[i]);
    }
    return (
        <div>
            <select>
                <option value="recent">Recent</option>
                <option value="amount">Amount</option>
            </select>
            <div className='container-cards'>
                {listDonors.map((donor) => {
                    return <DonorCard key={donor.id} donor={donor} />
                })
                }

            </div>
        </div>

    )
}
export default CardsContainer