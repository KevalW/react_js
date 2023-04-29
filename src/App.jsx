import {useEffect, useState} from "react";
import UserData from "./components/UserData.jsx";
import dataValue from "./dataset/cfs_current_incidents.json"

const API = dataValue;

const App = () => {
    const [users, setUsers] = useState([]);

    async function fetchUsers(dataValue) {
        try {
            const res = await fetch(dataValue);
            const data = await res.json();
            if (data.length > 0) {
                setUsers(data);
            }
            console.log(data);
        } catch (e) {
            console.error(e);
        }
    }


    useEffect(() => {
        fetchUsers(API);
    }, [])
    return <>
        <table>
            <thead>
            <tr>
                <th>IncidentNo</th>
                <th>Date</th>
                <th>Time</th>
                <th>Level</th>
                <th>Location_name</th>
            </tr>
            </thead>
            <tbody>
            <UserData users={users}/>
            </tbody>
        </table>
    </>
}

export default App;

