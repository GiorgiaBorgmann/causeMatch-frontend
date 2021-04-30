import React from 'react'
import { useSelector } from 'react-redux'
import DonorCard from './DonorCard'

function CardsContainer(){

   const donorsList = useSelector(state => state)
    console.log(donorsList)
    return(
        <div>
            {donorsList.map((donor)=>{
                return <DonorCard key={donor.id} donor={donor}/>
            })
            }
            
        </div>
    )
}
export default CardsContainer