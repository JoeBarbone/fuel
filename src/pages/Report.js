import React from 'react'
import { useState, useEffect } from "react"
import { doc, updateDoc, deleteDoc, collection, getDocs, Timestamp, addDoc, orderBy, query, where } from "firebase/firestore";
import { db } from "../firebase-config"
import moment from 'moment/moment';
import { getDefaultAppConfig } from '@firebase/util';

const Report = () => {
    const fuelCollRef = collection(db, "fuel");
    const [records, setRecords] = useState([]);
    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()    
    const [vehicle, setVehicle] = useState()    

    let totalGallons = 0;
    let totalPaid = 0;
    let totalPrice = 0;

    const getRecords = async (event, sd, ed) => {
        event.preventDefault()
        const startDate = new Date(sd)
        const endDate =  new Date(ed)
        let data = ""

        if (!vehicle) {
            data = await getDocs(query(fuelCollRef, orderBy("date"), where('date', '>=', startDate), where('date', '<=', endDate)))
        } else {
            data = await getDocs(query(fuelCollRef, orderBy("date"), where('date', '>=', startDate), where('date', '<=', endDate), where('vehicle', '==', vehicle)))
        }
        
        setRecords(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    

    return (
        <div className='homeContainer tableContainer'>
            <h1>Fuel Tracker Reports</h1>
            <form onSubmit={(event) => getRecords(event, startDate, endDate)}>
                <input placeholder="Date 01/01/2000" required onChange={(event) => {moment(setStartDate(event.target.value)).toDate()}} />
                <input placeholder="Date 01/01/2000" required onChange={(event) => {moment(setEndDate(event.target.value)).toDate()}} />
                <input placeholder="Enter Jeep, Tiger, etc or leave blank for all records" onChange={(event) => {setVehicle(event.target.value)}} />
                <button type='submit'>Search</button>
            </form>

            
            {records.map((record) => {
                totalGallons += Number(record.gallons);
                totalPrice = record.gallons * record.price;
                totalPaid += totalPrice;
                return(
                    <div className='reportContainer'>
                        <table>
                            <tr>
                                <td>{moment(record.date.toDate()).format("YYYY-MM-DD hh:mm:ssa")}</td>
                                <td>{record.vehicle}</td>
                                <td>{record.station}</td>
                                <td className='justify-right'>{record.gallons}</td>
                                <td className='justify-right'>${record.price}</td>
                                <td className='justify-right'>${parseFloat(totalPrice).toFixed(2)}</td>
                            </tr>
                        </table>

                        {/* {moment(record.date.toDate()).format("YYYY-MM-DD hh:mm:ssa")} {record.vehicle} {record.station} {record.gallons} {record.price} ${parseFloat(totalPrice).toFixed(2)} */}
                    </div>
    
    
                    
                )
                
            })}
            <div className='summary'>
                <p>Total Gallons: {parseFloat(totalGallons).toFixed(3)}</p>
                <p>Total Paid: ${parseFloat(totalPaid).toFixed(2)}</p>
            </div>
        </div>
    )
}

export default Report