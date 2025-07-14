import { counterAtom } from "./counterAtom";
import { useAtom } from 'jotai';
import { Button } from 'react-bootstrap';

export const ComponentB = () => {

    const [count,setCount] = useAtom(counterAtom);

    const resetCount = () => {
        setCount(0);
    }

return(
        <div className="my-5">
            <h1>{count}</h1>
            <br />
            <Button variant="danger" onClick={resetCount}>Reset</Button>
        </div>
    )
}