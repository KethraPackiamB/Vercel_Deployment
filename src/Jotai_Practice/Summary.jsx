import { sampleData } from "./sampleData";
import { useAtom } from "jotai";

export const Summary = () => {

    const [userData] = useAtom(sampleData);
    return(
        <div>
            <div className="container m-4">

            <h2>The Summary of the user {userData.name}</h2>
            <p>Department : {userData.department}</p>
            <p>Age : {userData.age}</p>
            <p>Email : {userData.email}</p>
            <p>Location : {userData.location}</p>
        </div>
        </div>
    )
}