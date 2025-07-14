import { useAtom } from "jotai";
import { definingState } from "./definingState";
import { Button } from "react-bootstrap";

export const DarkLightTheme = () => {

    const [isDark, setIsDark] = useAtom(definingState);

    const toggleDark = () => {
        setIsDark(true);
    }

    const toggleLight = () => {
        setIsDark(false);
    }

    const style = {
        background : isDark? '#000000' : '#ffffff',
        height : '100vh',
        color : isDark? '#ffffff' : '#000000'

    }

return(
        <div style={style}>
            <div className="container">
                <div className="d-flex justify-content-center py-5 gap-3 ">
            <Button variant="dark" onClick={toggleDark}>Dark Theme</Button>
             <Button variant="light" onClick={toggleLight}>Light Theme</Button>
        </div>
              <h1 className="d-flex justify-content-center py-5">{isDark? "Dark Mode" : "Light Mode"}</h1>
            </div>
        </div>
    )
}