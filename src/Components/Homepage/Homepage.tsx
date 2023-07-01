import React, { useEffect, useState } from 'react';
import { fetchSingleRandomRecipe } from "../../apiCalls";

const Homepage = () => {

useEffect(() => {
    const fetchData = async() => {
        try {
            const data = await fetchSingleRandomRecipe()
            console.log('10', data)
        } catch (error) {
            console.log(error)
        }
    }
    fetchData()
}, [])

    return (
        <div>
            HI!
        </div>
    )
}

export default Homepage;