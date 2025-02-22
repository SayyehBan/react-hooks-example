import { useEffect, useLayoutEffect, useState } from "react";

const UseLayoutEffectExample = () => {
    const [count, setCount] = useState(0);

    // این هوک بعد از رندر شدن کامپوننت اجرا میشود
    useEffect(() => {
        console.log(`useEffect : ${count}`);
    }, [count]);

    // این هوک هم بعد از رندر شدن کامپوننت اجرا میشود
    useEffect(() => {
        console.log(`useEffect secound : ${count}`);
    }, [count]);

    // این هوک قبل از رندر شدن کامپوننت اجرا میشود
    useLayoutEffect(() => {
        console.log(`useLayoutEffect : ${count}`);
    }, [count]);

    return (
        <div className="mx-auto mt-5 d-grid gap-3 w-50">
            <h5 className="text-center alert alert-dark">
                استفاده از هوک useLayoutEffect
            </h5>
            <button className="btn btn-primary" onClick={() => setCount((pervCount) => pervCount + 1)}>
                فقط اضافه بنما
            </button>
            <p className="alert alert-light text-center">شمارش ات برابر میباشد با : {" "}
                <span className="badge rounded-pill bg-info">{count}</span>
            </p>
        </div>
    );
};

export default UseLayoutEffectExample;