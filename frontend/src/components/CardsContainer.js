import React from 'react'
import { useSelector } from 'react-redux'
import DonorCard from './DonorCard'
import '../style/cardsContainer.css'

function CardsContainer(){

   const donorsList = useSelector(state => state)
    console.log(donorsList)
    return(
        <div className='container-cards'>
            {donorsList.map((donor)=>{
                return <DonorCard key={donor.id} donor={donor}/>
            })
            }
            
        </div>
    )
}
export default CardsContainer