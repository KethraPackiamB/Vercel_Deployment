import { BrowserRouter,Routes,Route } from "react-router-dom";
import { UserWelcomePage } from "./UserWelcomePage";
import { UserLoginPage } from "./UserLoginPage";

export const Navigation = () => {
    return(

        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<UserLoginPage/>}></Route>
                <Route path="/userwelcomepage" element={<UserWelcomePage/>}></Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}