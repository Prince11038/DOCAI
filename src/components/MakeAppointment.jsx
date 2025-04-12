import {Link} from "react-router-dom";

function getAvailableAppointments() {
    // Get appointment schedules of doctors from the database 
    // and return it as a JSON object back to the component


    // const schedulesData = fetch(...);
    // Better to shape schedulesData as an Array

    // Handle the returned promises here after
    // (in case of error and successful responses)

    // return schedulesData;
}

function MakeAppointment() {

    // This component uses the schedules data directly from the getAvailableAppointments()
    // function. For the time being, inserting dummy data here.

    return (
        <>
            <section className="card card-bordered w-2/3 text-zinc-600">
                <div className="card-body">
                    <h2 className="text-xl font-semibold">RECENT HISTORY</h2>

                    <table className="table table-lg">
                        <thead>
                            <tr className="text-zinc-900">
                                <th>ID</th>
                                <th>SPECIALITY</th>
                                <th>DOCTOR</th>
                                <th>SCHEDULE</th>
                                <th>ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Loop through the records here as each row */}
                            <tr>
                                <td>{1}</td>
                                <td>{"Brain Surgery"}</td>
                                <td>{"2024-03-09T14:45:43"}</td>
                                <td>{"Dr. Deepika"}</td>
                                <td>
                                    <a href="#">
                                    <button className="btn btn-primary">
                                        Make Appointment
                                        </button>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>{2}</td>
                                <td>{"Psychotic Therapy"}</td>
                                <td>{"2024-03-09T14:46:43"}</td>
                                <td>{"Dr. Karishma"}</td>
                                <td>
                                    <a href="#">
                                    <button className="btn btn-primary">
                                        Make Appointment
                                        </button>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>{3}</td>
                                <td>{"Heart & Circulatory System"}</td>
                                <td>{"2024-03-09T14:47:43"}</td>
                                <td>{"Dr. Ashutosh"}</td>
                                <td>
                                    <a href="#">
                                    <button className="btn btn-primary">
                                        Make Appointment
                                        </button>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
}

export default MakeAppointment;