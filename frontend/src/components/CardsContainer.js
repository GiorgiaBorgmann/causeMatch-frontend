import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import DonorCard from './DonorCard'
import '../style/cardsContainer.css'

function CardsContainer() {

    const stateDonor = useSelector(state => state)
    const [order, setOrder] = useState('recent')
    let listDonors = []

    const handleRecent = () => {
        for (let i = stateDonor.length - 1; i >= 0; i--) {
            listDonors.push(stateDonor[i]);
        }
        return listDonors
    }

    const sortByBiggerAmount = () => {
        listDonors = stateDonor.sort((a, b) => (a.last_nom > b.last_nom) ? -1 : ((b.last_nom > a.last_nom) ? 1 : 0))
        return listDonors
    }

    const handleSelected = (e) => {
        if (e.target.value === "amount") {
            setOrder('amount')
        }
        else {
            setOrder('recent')
        }
    }
    
    order === 'recent' ? handleRecent() : sortByBiggerAmount()
    return (
        <div>
            <div className='container-select'>
                <select onChange={(e) => handleSelected(e)}>
                    <option value="recent">Recent</option>
                    <option value="amount">Amount</option>
                </select>
            </div>
            <div className='container-cards'>
                {listDonors.map((donor, index) => {
                    return <DonorCard key={index} donor={donor} />
                })
                }
            </div>
        </div>
    )
}
export default CardsContainer