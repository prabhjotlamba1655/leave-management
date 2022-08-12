import React from 'react' ;
import { useState } from 'react';
import './createLeave.scss' ;

export const CreateLeave = () => {

    const [code, setcode] = useState('') ;
    const [name, setname] = useState('') ;
    const [leaveType, setleaveType] = useState('Paid') ;
    const [leaveCarryForMonth, setleaveCarryForMonth] = useState('yes') ;
    const [leaveCarryForYear, setleaveCarryForYear] = useState('yes') ;
    const [DefautLeave, setDefautLeave] = useState('') ;
    const [maxMonthLeave, setmaxMonthLeave] = useState('') ;
    const [minWorkingDays, setminWorkingDays] = useState('') ;



    const handleSubmit = (e) =>{
        e.preventDefault();
        const details = {
            code , name , leaveType, leaveCarryForMonth , leaveCarryForYear , DefautLeave , maxMonthLeave , minWorkingDays
        };
        console.log(details) ; 
    }



  return (
    <div className='createLeave'>

        <form action="" method="post" onSubmit={handleSubmit}  >

            <label>
                Leave Code
                <input type='text' placeholder='Leave Code' value = {code} onChange = { (e) => setcode(e.target.value) }   /> 
            </label>

            <label>
                Leave Name
                <input type='text' placeholder='Leave Name' value = {name} onChange = { (e) => setname(e.target.value) }   /> 
            </label>

            <label>
                Leave Type
                <select 
                value={leaveType} 
                    onChange = { (e) => setleaveType(e.target.value) } 
                >
                    <option value = "Paid"  > Paid </option>
                    <option value = "Unpiad" > unpaid </option>
                </select>
            </label>

            <label>
                Is monthly carry forward
                <select 
                value={leaveCarryForMonth} 
                    onChange = { (e) => setleaveCarryForMonth(e.target.value) } 
                >
                    <option value = "yes"> Yes </option>
                    <option value = "no"> No </option>
                </select>
            </label>

            <label>
                Is yearly carry forward
                <select 
                value={leaveCarryForYear} 
                    onChange = { (e) => setleaveCarryForYear(e.target.value) } 
                >
                    <option value = "yes"> Yes </option>
                    <option value = "no"> No </option>
                </select>
            </label>

            <label>
                Defaut leave allotment 
                <input type='text' placeholder='Defaut leave' value = {DefautLeave} onChange = { (e) => setDefautLeave(e.target.value) }   /> 
            </label>

            <label>
                Max monthly leave allotment 
                <input type='text' placeholder='Max monthly leave allotment ' value = {maxMonthLeave} onChange = { (e) => setmaxMonthLeave(e.target.value) }   /> 
            </label>

            <label>
                Min working days required  
                <input type='text' placeholder='Min working days required  ' value = {minWorkingDays} onChange = { (e) => setminWorkingDays(e.target.value) }   /> 
            </label>

            <button> Create Leave</button>

        </form>

        {/* <p>{code}</p>
        <p>{name}</p>
        <p>{leaveType}</p>
        <p>{leaveCarryForMonth}</p>
        <p>{leaveCarryForYear}</p>
        <p>{DefautLeave}</p>
        <p>{maxMonthLeave}</p>
        <p>{minWorkingDays}</p> */}


    </div>
  )
}
