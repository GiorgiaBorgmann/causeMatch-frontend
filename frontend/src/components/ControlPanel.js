import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addDonor } from '../actions'
import '../style/controlPanel.css'

export default function ControlPanel() {
    const [donor, setDonor] = useState({ id: new Date(), name: 'Baruch Cohen', amount: '100', donationThrough: '' })
    const dispatch = useDispatch()
    const handleAddDonor = () => {
        setDonor({ ...donor, id: new Date() })
        dispatch(addDonor(donor))
    }
    return (
        <div className='container-control-panel'>
            <h1>Add new donor</h1>
            <div className='container-input'>
                <label>Full Name</label>
                <input type='text' value={donor.name} required onChange={(e) => setDonor({ ...donor, name: e.target.value })} />
            </div>
            <div className='container-input'>
                <label>Amount</label>
                <input type='number' value={donor.amount} required onChange={(e) => setDonor({ ...donor, amount: e.target.value })} />
            </div>
            <div className='container-input'>
                <label>Donation through</label>
                <input type='text' value={donor.donationThrough} onChange={(e) => setDonor({ ...donor, donationThrough: e.target.value })} />
            </div>
            <button onClick={handleAddDonor}>Add Donor</button>
        </div>
    )
}
