import { useReducer } from "react";
const Actions = {
    INCCREMENT: "INCCREMENT", // افزایش مقدار شمارنده
    DECREMENT: "DECREMENT", // کاهش مقدار شمارنده
}
// تابع کاهنده برای مدیریت تغییر وضعیت
const reducer = (state, action) => {
    switch (action.type) {
        case Actions.INCCREMENT:
            return { counter: state.counter + action.payload }; // افزایش مقدار به اندازه payload
        case Actions.DECREMENT:
            return { counter: state.counter - action.payload }; // کاهش مقدار به اندازه payload
        default:
            return state;
    }
};

// کامپوننت اصلی برای نمایش مثال useReducer
const UseReducerExample = () => {
    //  const [counter, setCounter] = useState(0);
    // استفاده از هوک useReducer با مقدار اولیه صفر
    const [state, disPatch] = useReducer(reducer, { counter: 0 })

    // تابع برای افزایش مقدار شمارنده
    const inccrement = () => {
        disPatch({ type: Actions.INCCREMENT, payload: 1 });
    };

    // تابع برای کاهش مقدار شمارنده
    const decrement = () => {
        disPatch({ type: Actions.DECREMENT, payload: 1 });
    };

    return (
        <div className="mx-auto mt-5 d-grid gap-3 w-50">
            <h5 className="alert alert-info text-center">آشنایی با هوک UseReducer</h5>
            <button className="btn btn-primary"
                onClick={inccrement} >
                اضافه کردن
            </button>
            <p className="alert alert-warning text-center">
                شمارش شما دوست عزیز برابر است با : {" "}
                <span className="badge rounded-pill bg-success">{state.counter}</span>
            </p>
            <button className="btn btn-danger"
                onClick={decrement} >
                کم بنما
            </button>
        </div>
    )
}
export default UseReducerExample;