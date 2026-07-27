import React from 'react'
import { useState, useEffect } from "react"
import { doc, updateDoc, deleteDoc, collection, getDocs, Timestamp, addDoc, orderBy, query, where } from "firebase/firestore";
import { db } from "../firebase-config"
import moment from 'moment/moment';
import { getDefaultAppConfig } from '@firebase/util';

const Report = () => {
    const fuelCollRef = collection(db, "fuel");
    const [janRecords, setJanRecords] = useState([]);
    const [febRecords, setFebRecords] = useState([]);
    const [marRecords, setMarRecords] = useState([]);

    const [aprRecords, setAprRecords] = useState([]);
    const [mayRecords, setMayRecords] = useState([]);
    const [junRecords, setJunRecords] = useState([]);

    const [julRecords, setJulRecords] = useState([]);
    const [augRecords, setAugRecords] = useState([]);
    const [sepRecords, setSepRecords] = useState([]);

    const [octRecords, setOctRecords] = useState([]);
    const [novRecords, setNovRecords] = useState([]);
    const [decRecords, setDecRecords] = useState([]);

    // const [startDate, setStartDate] = useState()
    // const [endDate, setEndDate] = useState()    
    // const [vehicle, setVehicle] = useState()
     
    const JanSD = "2024-01-01 00:00:00";
    const JanED = "2024-01-31 11:59:59"; 

    const FebSD = "2024-02-01 00:00:00";
    const FebED = "2024-02-29 11:59:59";

    const MarSD = "2024-03-01 00:00:00";
    const MarED = "2024-03-30 11:59:59";

    const AprSD = "2024-04-01 00:00:00";
    const AprED = "2024-04-30 11:59:59";

    const MaySD = "2024-05-01 00:00:00";
    const MayED = "2024-05-31 11:59:59";

    const JunSD = "2024-06-01 00:00:00";
    const JunED = "2024-06-30 11:59:59";

    const JulSD = "2024-07-01 00:00:00";
    const JulED = "2024-07-31 11:59:59";

    const AugSD = "2024-08-01 00:00:00";
    const AugED = "2024-08-31 11:59:59";

    const SepSD = "2024-09-01 00:00:00";
    const SepED = "2024-09-30 11:59:59";

    const OctSD = "2024-10-01 00:00:00";
    const OctED = "2024-10-31 11:59:59";

    const NovSD = "2024-11-01 00:00:00";
    const NovED = "2024-11-30 11:59:59";

    const DecSD = "2024-12-01 00:00:00";
    const DecED = "2024-12-31 11:59:59";

    let janTotalGallons = 0;
    let janTotalPaid = 0;
    let janTotalPrice = 0;
    let janAvgPerGallon = 0;

    let febTotalGallons = 0;
    let febTotalPaid = 0;
    let febTotalPrice = 0;
    let febAvgPerGallon = 0;

    let marTotalGallons = 0;
    let marTotalPaid = 0;
    let marTotalPrice = 0;
    let marAvgPerGallon = 0;

    let aprTotalGallons = 0;
    let aprTotalPaid = 0;
    let aprTotalPrice = 0;
    let aprAvgPerGallon = 0;

    let mayTotalGallons = 0;
    let mayTotalPaid = 0;
    let mayTotalPrice = 0;
    let mayAvgPerGallon = 0;

    let junTotalGallons = 0;
    let junTotalPaid = 0;
    let junTotalPrice = 0;
    let junAvgPerGallon = 0;

    let julTotalGallons = 0;
    let julTotalPaid = 0;
    let julTotalPrice = 0;
    let julAvgPerGallon = 0;

    let augTotalGallons = 0;
    let augTotalPaid = 0;
    let augTotalPrice = 0;
    let augAvgPerGallon = 0;

    let sepTotalGallons = 0;
    let sepTotalPaid = 0;
    let sepTotalPrice = 0;
    let sepAvgPerGallon = 0;

    let octTotalGallons = 0;
    let octTotalPaid = 0;
    let octTotalPrice = 0;
    let octAvgPerGallon = 0;

    let novTotalGallons = 0;
    let novTotalPaid = 0;
    let novTotalPrice = 0;
    let novAvgPerGallon = 0;

    let decTotalGallons = 0;
    let decTotalPaid = 0;
    let decTotalPrice = 0;
    let decAvgPerGallon = 0;

    useEffect(() => {
         

        const getRecords = async () => {
             
            // const data = await getDocs(query(fuelCollRef, orderBy("date","desc")))
            const jan = await getDocs(query(fuelCollRef, orderBy("date"), where('date', '>=', moment(JanSD).toDate()), where('date', '<=', moment(JanED).toDate())));
            const feb = await getDocs(query(fuelCollRef, orderBy("date"), where('date', '>=', moment(FebSD).toDate()), where('date', '<=', moment(FebED).toDate())));
            const mar = await getDocs(query(fuelCollRef, orderBy("date"), where('date', '>=', moment(MarSD).toDate()), where('date', '<=', moment(MarED).toDate())));

            const apr = await getDocs(query(fuelCollRef, orderBy("date"), where('date', '>=', moment(AprSD).toDate()), where('date', '<=', moment(AprED).toDate())));
            const may = await getDocs(query(fuelCollRef, orderBy("date"), where('date', '>=', moment(MaySD).toDate()), where('date', '<=', moment(MayED).toDate())));
            const jun = await getDocs(query(fuelCollRef, orderBy("date"), where('date', '>=', moment(JunSD).toDate()), where('date', '<=', moment(JunED).toDate())));

            const jul = await getDocs(query(fuelCollRef, orderBy("date"), where('date', '>=', moment(JulSD).toDate()), where('date', '<=', moment(JulED).toDate())));
            const aug = await getDocs(query(fuelCollRef, orderBy("date"), where('date', '>=', moment(AugSD).toDate()), where('date', '<=', moment(AugED).toDate())));
            const sep = await getDocs(query(fuelCollRef, orderBy("date"), where('date', '>=', moment(SepSD).toDate()), where('date', '<=', moment(SepED).toDate())));
            
            const oct = await getDocs(query(fuelCollRef, orderBy("date"), where('date', '>=', moment(OctSD).toDate()), where('date', '<=', moment(OctED).toDate())));
            const nov = await getDocs(query(fuelCollRef, orderBy("date"), where('date', '>=', moment(NovSD).toDate()), where('date', '<=', moment(NovED).toDate())));
            const dec = await getDocs(query(fuelCollRef, orderBy("date"), where('date', '>=', moment(DecSD).toDate()), where('date', '<=', moment(DecED).toDate())));
            
            setJanRecords(jan.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            setFebRecords(feb.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            setMarRecords(mar.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

            setAprRecords(apr.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            setMayRecords(may.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            setJunRecords(jun.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

            setJulRecords(jul.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            setAugRecords(aug.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            setSepRecords(sep.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

            setOctRecords(oct.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            setNovRecords(nov.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            setDecRecords(dec.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        getRecords()

    }, [])

    // const getRecords = async (event, sd, ed) => {
    //     event.preventDefault()
    //     const startDate = new Date(sd)
    //     const endDate =  new Date(ed)
    //     let data = ""

    //     if (!vehicle) {
    //         data = await getDocs(query(fuelCollRef, orderBy("date"), where('date', '>=', startDate), where('date', '<=', endDate)))
    //     } else {
    //         data = await getDocs(query(fuelCollRef, orderBy("date"), where('date', '>=', startDate), where('date', '<=', endDate), where('vehicle', '==', vehicle)))
    //     }
        
    //     data = await getDocs(query(fuelCollRef, orderBy("date"), where('date', '>=', "2024-01-01"), where('date', '<=', "2024-01-31")))
    //     setRecords(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    // }
    
    

    return (
        <div className='homeContainer tableContainer'>
            <h1>Fuel Tracker Reports - Usage by Month</h1>

            {/* <form onSubmit={(event) => getRecords(event, startDate, endDate)}>
                <input placeholder="Date 01/01/2000" required onChange={(event) => {moment(setStartDate(event.target.value)).toDate()}} />
                <input placeholder="Date 01/01/2000" required onChange={(event) => {moment(setEndDate(event.target.value)).toDate()}} />
                <input placeholder="Enter Jeep, Tiger, etc or leave blank for all records" onChange={(event) => {setVehicle(event.target.value)}} />
                <button type='submit'>Search</button>
            </form> */}

            
            <h1>January 2024</h1>
            {janRecords.map((record) => {
                
                janTotalGallons += Number(record.gallons);
                janTotalPrice = record.gallons * record.price;
                janTotalPaid += janTotalPrice;
                janAvgPerGallon = janTotalPaid / janTotalGallons;


                return(
                    
                    <div className='reportContainer'>
                        
                        <table>
                            <tr>
                                <td>{moment(record.date.toDate()).format("YYYY-MM-DD hh:mm:ssa")}</td>
                                <td>{record.vehicle}</td>
                                <td>{record.station}</td>
                                <td className='justify-right'>{record.gallons}</td>
                                <td className='justify-right'>${record.price}</td>
                                <td className='justify-right'>${parseFloat(janTotalPrice).toFixed(2)}</td>
                            </tr>
                        </table>

                        {/* {moment(record.date.toDate()).format("YYYY-MM-DD hh:mm:ssa")} {record.vehicle} {record.station} {record.gallons} {record.price} ${parseFloat(totalPrice).toFixed(2)} */}
                    </div>
                    
                )
                
            })}
            <div className='summary'>
                <p>January Total Gallons: {parseFloat(janTotalGallons).toFixed(3)}</p>
                <p>January Avg Per Gallon: ${parseFloat(janAvgPerGallon).toFixed(3)}</p>
                <p>January Total Paid: ${parseFloat(janTotalPaid).toFixed(2)}</p>
            </div>
            
            
            
            
            
            
            
            <h1>February 2024</h1>
            {febRecords.map((record) => {
                febTotalGallons += Number(record.gallons);
                febTotalPrice = record.gallons * record.price;
                febTotalPaid += febTotalPrice;
                febAvgPerGallon = febTotalPaid / febTotalGallons;


                return(
                        
                    <div className='reportContainer'>
                        
                        <table>
                            <tr>
                                <td>{moment(record.date.toDate()).format("YYYY-MM-DD hh:mm:ssa")}</td>
                                <td>{record.vehicle}</td>
                                <td>{record.station}</td>
                                <td className='justify-right'>{record.gallons}</td>
                                <td className='justify-right'>${record.price}</td>
                                <td className='justify-right'>${parseFloat(febTotalPrice).toFixed(2)}</td>
                            </tr>
                        </table>

                        {/* {moment(record.date.toDate()).format("YYYY-MM-DD hh:mm:ssa")} {record.vehicle} {record.station} {record.gallons} {record.price} ${parseFloat(totalPrice).toFixed(2)} */}
                    </div>
                    
                )
                
            })}
            <div className='summary'>
                <p>February Total Gallons: {parseFloat(febTotalGallons).toFixed(3)}</p>
                <p>February Avg Per Gallon: ${parseFloat(febAvgPerGallon).toFixed(3)}</p>
                <p>February Total Paid: ${parseFloat(febTotalPaid).toFixed(2)}</p>
            </div>






            <h1>March 2024</h1>
            {marRecords.map((record) => {
                marTotalGallons += Number(record.gallons);
                marTotalPrice = record.gallons * record.price;
                marTotalPaid += marTotalPrice;
                marAvgPerGallon = marTotalPaid / marTotalGallons;


                return(
                     
                    <div className='reportContainer'>
                        
                        <table>
                            <tr>
                                <td>{moment(record.date.toDate()).format("YYYY-MM-DD hh:mm:ssa")}</td>
                                <td>{record.vehicle}</td>
                                <td>{record.station}</td>
                                <td className='justify-right'>{record.gallons}</td>
                                <td className='justify-right'>${record.price}</td>
                                <td className='justify-right'>${parseFloat(marTotalPrice).toFixed(2)}</td>
                            </tr>
                        </table>

                        {/* {moment(record.date.toDate()).format("YYYY-MM-DD hh:mm:ssa")} {record.vehicle} {record.station} {record.gallons} {record.price} ${parseFloat(totalPrice).toFixed(2)} */}
                    </div>
                    
                )
                
            })}
            <div className='summary'>
                <p>March Total Gallons: {parseFloat(marTotalGallons).toFixed(3)}</p>
                <p>March Avg Per Gallon: ${parseFloat(marAvgPerGallon).toFixed(3)}</p>
                <p>March Total Paid: ${parseFloat(marTotalPaid).toFixed(2)}</p>
            </div>








            <h1>April 2024</h1>
            {aprRecords.map((record) => {
                aprTotalGallons += Number(record.gallons);
                aprTotalPrice = record.gallons * record.price;
                aprTotalPaid += aprTotalPrice;
                aprAvgPerGallon = aprTotalPaid / aprTotalGallons;


                return(
                     
                    <div className='reportContainer'>
                        
                        <table>
                            <tr>
                                <td>{moment(record.date.toDate()).format("YYYY-MM-DD hh:mm:ssa")}</td>
                                <td>{record.vehicle}</td>
                                <td>{record.station}</td>
                                <td className='justify-right'>{record.gallons}</td>
                                <td className='justify-right'>${record.price}</td>
                                <td className='justify-right'>${parseFloat(aprTotalPrice).toFixed(2)}</td>
                            </tr>
                        </table>

                        {/* {moment(record.date.toDate()).format("YYYY-MM-DD hh:mm:ssa")} {record.vehicle} {record.station} {record.gallons} {record.price} ${parseFloat(totalPrice).toFixed(2)} */}
                    </div>
                    
                )
                
            })}
            <div className='summary'>
                <p>April Total Gallons: {parseFloat(aprTotalGallons).toFixed(3)}</p>
                <p>April Avg Per Gallon: ${parseFloat(aprAvgPerGallon).toFixed(3)}</p>
                <p>April Total Paid: ${parseFloat(aprTotalPaid).toFixed(2)}</p>
            </div>










            <h1>May 2024</h1>
            {mayRecords.map((record) => {
                mayTotalGallons += Number(record.gallons);
                mayTotalPrice = record.gallons * record.price;
                mayTotalPaid += mayTotalPrice;
                mayAvgPerGallon = mayTotalPaid / mayTotalGallons;


                return(
                     
                    <div className='reportContainer'>
                        
                        <table>
                            <tr>
                                <td>{moment(record.date.toDate()).format("YYYY-MM-DD hh:mm:ssa")}</td>
                                <td>{record.vehicle}</td>
                                <td>{record.station}</td>
                                <td className='justify-right'>{record.gallons}</td>
                                <td className='justify-right'>${record.price}</td>
                                <td className='justify-right'>${parseFloat(mayTotalPrice).toFixed(2)}</td>
                            </tr>
                        </table>

                        {/* {moment(record.date.toDate()).format("YYYY-MM-DD hh:mm:ssa")} {record.vehicle} {record.station} {record.gallons} {record.price} ${parseFloat(totalPrice).toFixed(2)} */}
                    </div>
                    
                )
                
            })}
            <div className='summary'>
                <p>May Total Gallons: {parseFloat(mayTotalGallons).toFixed(3)}</p>
                <p>May Avg Per Gallon: ${parseFloat(mayAvgPerGallon).toFixed(3)}</p>
                <p>May Total Paid: ${parseFloat(mayTotalPaid).toFixed(2)}</p>
            </div>














            <h1>June 2024</h1>
            {junRecords.map((record) => {
                junTotalGallons += Number(record.gallons);
                junTotalPrice = record.gallons * record.price;
                junTotalPaid += junTotalPrice;
                junAvgPerGallon = junTotalPaid / junTotalGallons;


                return(
                     
                    <div className='reportContainer'>
                        
                        <table>
                            <tr>
                                <td>{moment(record.date.toDate()).format("YYYY-MM-DD hh:mm:ssa")}</td>
                                <td>{record.vehicle}</td>
                                <td>{record.station}</td>
                                <td className='justify-right'>{record.gallons}</td>
                                <td className='justify-right'>${record.price}</td>
                                <td className='justify-right'>${parseFloat(junTotalPrice).toFixed(2)}</td>
                            </tr>
                        </table>

                        {/* {moment(record.date.toDate()).format("YYYY-MM-DD hh:mm:ssa")} {record.vehicle} {record.station} {record.gallons} {record.price} ${parseFloat(totalPrice).toFixed(2)} */}
                    </div>
                    
                )
                
            })}
            <div className='summary'>
                <p>June Total Gallons: {parseFloat(junTotalGallons).toFixed(3)}</p>
                <p>June Avg Per Gallon: ${parseFloat(junAvgPerGallon).toFixed(3)}</p>
                <p>June Total Paid: ${parseFloat(junTotalPaid).toFixed(2)}</p>
            </div>






            <h1>July 2024</h1>
            {julRecords.map((record) => {
                julTotalGallons += Number(record.gallons);
                julTotalPrice = record.gallons * record.price;
                julTotalPaid += julTotalPrice;
                julAvgPerGallon = julTotalPaid / julTotalGallons;


                return(
                     
                    <div className='reportContainer'>
                        
                        <table>
                            <tr>
                                <td>{moment(record.date.toDate()).format("YYYY-MM-DD hh:mm:ssa")}</td>
                                <td>{record.vehicle}</td>
                                <td>{record.station}</td>
                                <td className='justify-right'>{record.gallons}</td>
                                <td className='justify-right'>${record.price}</td>
                                <td className='justify-right'>${parseFloat(julTotalPrice).toFixed(2)}</td>
                            </tr>
                        </table>

                        {/* {moment(record.date.toDate()).format("YYYY-MM-DD hh:mm:ssa")} {record.vehicle} {record.station} {record.gallons} {record.price} ${parseFloat(totalPrice).toFixed(2)} */}
                    </div>
                    
                )
                
            })}
            <div className='summary'>
                <p>July Total Gallons: {parseFloat(julTotalGallons).toFixed(3)}</p>
                <p>July Avg Per Gallon: ${parseFloat(julAvgPerGallon).toFixed(3)}</p>
                <p>July Total Paid: ${parseFloat(julTotalPaid).toFixed(2)}</p>
            </div>






            <h1>August 2024</h1>
            {augRecords.map((record) => {
                augTotalGallons += Number(record.gallons);
                augTotalPrice = record.gallons * record.price;
                augTotalPaid += augTotalPrice;
                augAvgPerGallon = augTotalPaid / augTotalGallons;


                return(
                     
                    <div className='reportContainer'>
                        
                        <table>
                            <tr>
                                <td>{moment(record.date.toDate()).format("YYYY-MM-DD hh:mm:ssa")}</td>
                                <td>{record.vehicle}</td>
                                <td>{record.station}</td>
                                <td className='justify-right'>{record.gallons}</td>
                                <td className='justify-right'>${record.price}</td>
                                <td className='justify-right'>${parseFloat(augTotalPrice).toFixed(2)}</td>
                            </tr>
                        </table>

                        {/* {moment(record.date.toDate()).format("YYYY-MM-DD hh:mm:ssa")} {record.vehicle} {record.station} {record.gallons} {record.price} ${parseFloat(totalPrice).toFixed(2)} */}
                    </div>
                    
                )
                
            })}
            <div className='summary'>
                <p>August Total Gallons: {parseFloat(augTotalGallons).toFixed(3)}</p>
                <p>August Avg Per Gallon: ${parseFloat(augAvgPerGallon).toFixed(3)}</p>
                <p>August Total Paid: ${parseFloat(augTotalPaid).toFixed(2)}</p>
            </div>












            <h1>September 2024</h1>
            {sepRecords.map((record) => {
                sepTotalGallons += Number(record.gallons);
                sepTotalPrice = record.gallons * record.price;
                sepTotalPaid += sepTotalPrice;
                sepAvgPerGallon = sepTotalPaid / sepTotalGallons;


                return(
                     
                    <div className='reportContainer'>
                        
                        <table>
                            <tr>
                                <td>{moment(record.date.toDate()).format("YYYY-MM-DD hh:mm:ssa")}</td>
                                <td>{record.vehicle}</td>
                                <td>{record.station}</td>
                                <td className='justify-right'>{record.gallons}</td>
                                <td className='justify-right'>${record.price}</td>
                                <td className='justify-right'>${parseFloat(sepTotalPrice).toFixed(2)}</td>
                            </tr>
                        </table>

                        {/* {moment(record.date.toDate()).format("YYYY-MM-DD hh:mm:ssa")} {record.vehicle} {record.station} {record.gallons} {record.price} ${parseFloat(totalPrice).toFixed(2)} */}
                    </div>
                    
                )
                
            })}
            <div className='summary'>
                <p>September Total Gallons: {parseFloat(sepTotalGallons).toFixed(3)}</p>
                <p>September Avg Per Gallon: ${parseFloat(sepAvgPerGallon).toFixed(3)}</p>
                <p>September Total Paid: ${parseFloat(sepTotalPaid).toFixed(2)}</p>
            </div>













            <h1>October 2024</h1>
            {octRecords.map((record) => {
                octTotalGallons += Number(record.gallons);
                octTotalPrice = record.gallons * record.price;
                octTotalPaid += octTotalPrice;
                octAvgPerGallon = octTotalPaid / octTotalGallons;


                return(
                     
                    <div className='reportContainer'>
                        
                        <table>
                            <tr>
                                <td>{moment(record.date.toDate()).format("YYYY-MM-DD hh:mm:ssa")}</td>
                                <td>{record.vehicle}</td>
                                <td>{record.station}</td>
                                <td className='justify-right'>{record.gallons}</td>
                                <td className='justify-right'>${record.price}</td>
                                <td className='justify-right'>${parseFloat(octTotalPrice).toFixed(2)}</td>
                            </tr>
                        </table>

                        {/* {moment(record.date.toDate()).format("YYYY-MM-DD hh:mm:ssa")} {record.vehicle} {record.station} {record.gallons} {record.price} ${parseFloat(totalPrice).toFixed(2)} */}
                    </div>
                    
                )
                
            })}
            <div className='summary'>
                <p>October Total Gallons: {parseFloat(octTotalGallons).toFixed(3)}</p>
                <p>October Avg Per Gallon: ${parseFloat(octAvgPerGallon).toFixed(3)}</p>
                <p>October Total Paid: ${parseFloat(octTotalPaid).toFixed(2)}</p>
            </div>















            <h1>November 2024</h1>
            {novRecords.map((record) => {
                novTotalGallons += Number(record.gallons);
                novTotalPrice = record.gallons * record.price;
                novTotalPaid += novTotalPrice;
                novAvgPerGallon = novTotalPaid / novTotalGallons;


                return(
                     
                    <div className='reportContainer'>
                        
                        <table>
                            <tr>
                                <td>{moment(record.date.toDate()).format("YYYY-MM-DD hh:mm:ssa")}</td>
                                <td>{record.vehicle}</td>
                                <td>{record.station}</td>
                                <td className='justify-right'>{record.gallons}</td>
                                <td className='justify-right'>${record.price}</td>
                                <td className='justify-right'>${parseFloat(novTotalPrice).toFixed(2)}</td>
                            </tr>
                        </table>

                        {/* {moment(record.date.toDate()).format("YYYY-MM-DD hh:mm:ssa")} {record.vehicle} {record.station} {record.gallons} {record.price} ${parseFloat(totalPrice).toFixed(2)} */}
                    </div>
                    
                )
                
            })}
            <div className='summary'>
                <p>November Total Gallons: {parseFloat(novTotalGallons).toFixed(3)}</p>
                <p>November Avg Per Gallon: ${parseFloat(novAvgPerGallon).toFixed(3)}</p>
                <p>November Total Paid: ${parseFloat(novTotalPaid).toFixed(2)}</p>
            </div>















            <h1>December 2024</h1>
            {decRecords.map((record) => {
                decTotalGallons += Number(record.gallons);
                decTotalPrice = record.gallons * record.price;
                decTotalPaid += decTotalPrice;
                decAvgPerGallon = decTotalPaid / decTotalGallons;


                return(
                     
                    <div className='reportContainer'>
                        
                        <table>
                            <tr>
                                <td>{moment(record.date.toDate()).format("YYYY-MM-DD hh:mm:ssa")}</td>
                                <td>{record.vehicle}</td>
                                <td>{record.station}</td>
                                <td className='justify-right'>{record.gallons}</td>
                                <td className='justify-right'>${record.price}</td>
                                <td className='justify-right'>${parseFloat(decTotalPrice).toFixed(2)}</td>
                            </tr>
                        </table>

                        {/* {moment(record.date.toDate()).format("YYYY-MM-DD hh:mm:ssa")} {record.vehicle} {record.station} {record.gallons} {record.price} ${parseFloat(totalPrice).toFixed(2)} */}
                    </div>
                    
                )
                
            })}
            <div className='summary'>
                <p>December Total Gallons: {parseFloat(decTotalGallons).toFixed(3)}</p>
                <p>December Avg Per Gallon: ${parseFloat(decAvgPerGallon).toFixed(3)}</p>
                <p>December Total Paid: ${parseFloat(decTotalPaid).toFixed(2)}</p>
            </div>














































        </div>
    )
}

export default Report