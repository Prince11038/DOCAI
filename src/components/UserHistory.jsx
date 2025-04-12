

function getUserHistory(userID) {
    // Get user history based on the ID of user from the database 
    // and return it as a JSON object back to the component


    // const userHistory = fetch(...);
    // Better to shape userHistory as an Array

    // Handle the returned promises here after
    // (in case of error and successful responses)

    // return userHistory;
}

function UserHistory() {

    // This component uses the user history data directly from the getUserHistory()
    // function. For the time being, inserting dummy data here.

    return (
        <>
            <section className="card card-bordered w-2/3">
                <div className="card-body">
                    <h2 className="text-xl font-semibold">RECENT HISTORY</h2>

                    <table className="table table-lg">
                        <thead>
                            <tr className="text-zinc-900">
                                <th>ID</th>
                                <th>REPORT</th>
                                <th>DOCTOR</th>
                                <th>DATE & TIME</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Loop through the records here as each row */}
                            <tr>
                                <td>{1}</td>
                                <td>{"Basic Checkup"}</td>
                                <td>{"Dr. Deepika"}</td>
                                <td>{"2024-03-09T14:45:43"}</td>
                            </tr>
                            <tr>
                                <td>{2}</td>
                                <td>{"Psychiatry Diagnosis"}</td>
                                <td>{"Dr. Karishma"}</td>
                                <td>{"2024-03-09T14:46:43"}</td>
                            </tr>
                            <tr>
                                <td>{3}</td>
                                <td>{"Osteopathic Procedure"}</td>
                                <td>{"Dr. Ashutosh"}</td>
                                <td>{"2024-03-09T14:47:43"}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
}

export default UserHistory;