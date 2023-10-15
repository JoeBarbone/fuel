import React from 'react'
import { useState, useEffect } from 'react'
import { doc, updateDoc, deleteDoc, collection, getDocs, addDoc, orderBy, query, Timestamp } from "firebase/firestore";
import moment from 'moment';
import { db } from "../firebase-config"
import { useNavigate } from "react-router-dom"

const Add = () => {
    const [newDate, setNewDate] = useState()
    const [newGallons, setNewGallons] = useState("")
    const [newPrice, setNewPrice] = useState("")
    const [newStation, setNewStation] = useState("")
    const [newVehicle, setNewVehicle] = useState("")
    const navigate = useNavigate();
    const fuelCollRef = collection(db, "fuel");
    
    
    const addRecord = async (event) => {
        event.preventDefault()

        const newRecord = {
            date: Timestamp.fromDate(new Date(newDate)),
            gallons: newGallons,
            price: newPrice,
            station: newStation,
            vehicle: newVehicle
        }

        await addDoc(fuelCollRef, newRecord)

        navigate('/');

    }

    return (
    <div>
        <h1>Add new record</h1>
        <form>
          <input placeholder="Date 01/01/2000" required onChange={(event) => {moment(setNewDate(event.target.value)).toDate()}} />
          <input placeholder="Gallons" required onChange={(event) => {setNewGallons(event.target.value)}} />
          <input placeholder="Price" required onChange={(event) => {setNewPrice(event.target.value)}} />
          <input placeholder="Station" required onChange={(event) => {setNewStation(event.target.value)}} />
          <input placeholder="Vehicle" required onChange={(event) => {setNewVehicle(event.target.value)}} />
          <button onClick={addRecord}>Add new record</button> 
        </form>
    </div>
  )
}

export default Add