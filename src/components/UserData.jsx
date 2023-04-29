const UserData = ({users}) => {
    return (
        <>
            {
                users.map((curUser) => {
                    const {IncidentNo, Date, Time, Level, Location_name} = curUser;
                    // const {street, city, zipcode} = curUser.address;

                    return (
                        <tr key={IncidentNo}>
                            <td>{IncidentNo}</td>
                            <td>{Date}</td>
                            <td>{Time}</td>
                            <td>{Level}</td>
                            <td>{Location_name}</td>
                            {/* <td>{street}, {city}, {" "}, {zipcode}</td> */}
                        </tr>
                    )
                })

            }
        </>
    )
}
export default UserData;