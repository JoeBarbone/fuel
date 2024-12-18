import React from 'react'
import { useState, useEffect } from "react"
import { doc, updateDoc, deleteDoc, collection, getDocs, addDoc, orderBy, query } from "firebase/firestore";
import { db } from "../firebase-config"
import moment from 'moment/moment';
import deleteIcon from "../images/delete.png"

const Home = () => {
    const fuelCollRef = collection(db, "fuel");
    const [records, setRecords] = useState([]);
    let totalGallons = 0;
    let totalPaid = 0;
    let totalPrice = 0;
    let avgPerGallon = 0;

    useEffect(() => {

        const getRecords = async () => {
            const data = await getDocs(query(fuelCollRef, orderBy("date","desc")))
            setRecords(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        getRecords()

    }, [])


    const delRecord = async (id, ve, st) => {
        const recordDoc = doc(fuelCollRef, id);
        await deleteDoc( recordDoc )
        alert(id + " " + ve + " " + st + " " + " deleted successfully")
    }

    return (
        <div className='homeContainer tableContainer'>
            <h1>Fuel Tracker Receipts</h1>
            <table>
                <tr>
                    <th>DATE</th>
                    <th>VEHICLE</th>
                    <th>STATION</th>
                    <th>GALLONS</th>
                    <th>PRICE</th>
                    <th>TOTAL</th>
                    {/* <th>ACTIONS</th> */}
                </tr>
            </table>
            
            {records.map((record) => {
                totalGallons += Number(record.gallons);
                totalPrice = record.gallons * record.price;
                totalPaid += totalPrice;
                avgPerGallon = totalPaid / totalGallons;
                
                return(
                    <div className='tableContainer'>
                        <table>
                            <tr>
                                <td>{moment(record.date.toDate()).format("YYYY-MM-DD hh:mm:ssa")}</td>
                                <td>{record.vehicle}</td>
                                <td>{record.station}</td>
                                <td className='justify-right'>{record.gallons}</td>
                                <td className='justify-right'>${record.price}</td>
                                <td className='justify-right'>${parseFloat(totalPrice).toFixed(2)}</td>
                                {/* <td className='justify-center'><img className='deleteIcon' src={deleteIcon} onClick={() => {delRecord(record.id, record.vehicle, record.station)}} /></td> */}
                            </tr>
                        </table>
                    </div>        
                )
                
            })}
            <div className='summary'>
                <p>Total Gallons: {parseFloat(totalGallons).toFixed(3)}</p>
                <p>Avg Per Gallon: ${parseFloat(avgPerGallon).toFixed(3)}</p>
                <p>Total Paid: ${parseFloat(totalPaid).toFixed(2)}</p>
            </div>
        </div>
    )
}

export default Home