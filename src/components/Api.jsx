import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Api() {
    const [users, setUsers] = useState([])
    // useEffect(() => {
    //     axios.post("https://discord.com/api/v9/channels/1169450479198150678/messages",
    //         {
    //             content: "Xin chao"
    //         }, {
    //         headers: {
    //             Authorization: "MTE3MjA5MDM2Njk3MTg3NTQzOA.Gogjf_.7pLxUwr5rYRRFI8viSvdJzC5cYjRaA8ldSEZGM"
    //         }
    //     })
    //     .then(res => {
    //         console.log("ok", res.data)
    //     })
    //     .catch(err => {
    //         console.log("err")
    //     })
    // }, [])
    return (
        <div>
            <h2>API</h2>
            <ul>
            </ul>
        </div>
    )
}
