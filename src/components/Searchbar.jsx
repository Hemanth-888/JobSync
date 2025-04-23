import React from 'react'
import { Card, CardContent, Button } from '@mui/material';
import './searchbar.css';

function Searchbar({ isDark }) {
  return (
    <div>
     <section className={`w-screen py-6 px-4 flex justify-center ${isDark ? 'bg-gray-800' : 'bg-blue-50'}`}>
     <div className={`shadow-lg rounded-xl flex flex-col md:flex-row items-center gap-4 px-6 py-4 max-w-5xl justify-between w-500 ${isDark ? 'bg-gray-700 text-white' : 'bg-white'}`}>
          
{/* <div className="inputbox">
    <input required="required" type="text"/>
    <span>Enter Skills/Designation</span>
    <i></i>
</div>
<div className="inputbox">
    <input required="required" type="text"/>
    <span>Enter Location</span>
    <i></i>
</div> */}

<div className="form__group field">
    <input type="input" class="form__field" placeholder="Name" required=""/>
    <label for="name" class="form__label">Enter Skills / Designation</label>
</div>

<div className="form__group field">
    <input type="input" class="form__field" placeholder="Name" required=""/>
    <label for="name" class="form__label">Enter Location</label>
</div>
          <Button className="bg-blue-600 text-white px-6 py-2 hover:bg-blue-700">
            Find Jobs
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Searchbar
