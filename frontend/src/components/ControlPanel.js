import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addDonor } from '../actions'
import '../style/controlPanel.css'

export default function ControlPanel() {
    const [donor, setDonor] = useState({ id: new Date(), name: 'Baruch Cohen', amount: '100', comment: '' })
    const dispatch = useDispatch()
    const handleAddDonor = () => {
        setDonor({ ...donor, id: new Date() })
        dispatch(addDonor(donor))
    }
    return (
        <div className='container-control-panel'>
            <h1>Add new doner</h1>
            <div className='container-input'>
                <label>Full Name</label>
                <input type='text' value={donor.name} required onChange={(e) => setDonor({ ...donor, name: e.target.value })} />
            </div>
            <div className='container-input'>
                <label>Amount</label>
                <input type='number' value={donor.amount} required onChange={(e) => setDonor({ ...donor, amount: e.target.value })} />
            </div>
            <div className='container-input'>
                <label>Comment</label>
                <input type='text' value={donor.comment} onChange={(e) => setDonor({ ...donor, comment: e.target.value })} />
            </div>
            <button onClick={handleAddDonor}>Add Donor</button>
        </div>
    )
}
