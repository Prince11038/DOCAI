

function getUserData(userID) {
    // Get user data based on the ID of user from the database 
    // and return it as a JSON object back to the component


    // const userData = fetch(...);

    // Handle the returned promises here after
    // (in case of error and successful responses)

    // return userData
}

function ProfileDetails() {

    // This component uses the user data directly from the getUserData()
    // function. For the time being, inserting dummy data here.

    return (
        <>
            <section className="w-2/3 card card-bordered border-2">
                <div className="card-body">
                    <h2 className="card-title text-lg">USER DETAILS:</h2>
                    <table className="table table-lg">
                        <tbody>
                            <tr>
                                <td className="text-lg font-bold">ID:</td>
                                <td>{19}</td>
                            </tr>
                            <tr>
                                <td className="text-lg font-bold">NAME:</td>
                                <td>{"Dummy Name"}</td>
                            </tr>
                            <tr>
                                <td className="text-lg font-bold">EMAIL:</td>
                                <td>{"dummy.name@dum.org"}</td>
                            </tr>
                            <tr>
                                <td className="text-lg font-bold">CONTACT:</td>
                                <td>{"9876543210"}</td>
                            </tr>
                            <tr>
                                <td className="text-lg font-bold">ABOUT:</td>
                                <td>
                                    {"About this particular User"}
                                </td>
                            </tr>
                            <tr>
                                <td className="text-lg font-bold">ADDRESS:</td>
                                <td>{"Nil Batti, Zero Bata, Sannata, New Delhi"}</td>
                            </tr>
                            <tr>
                                <td className="text-lg font-bold">PIN CODE:</td>
                                <td>{ "110011" }</td>
                            </tr>
                            <tr>
                                <td className="text-lg font-bold">JOINED:</td>
                                <td>{ "2024-09-13 / 13 September 2024" }</td>
                            </tr>
                        </tbody>
                    </table>

                    {/* User Actions; Like Editing Profile Button */}
                    <div className="">
                        <button className="btn btn-primary">EDIT</button>
                    </div>

                    <p className="text-center pt-2">
                        {/* Link to back to home */}
                        Go back to <a href="#" className="btn btn-link">Home</a>
                    </p>
                </div>
            </section>
        </>
    );
}

export default ProfileDetails;