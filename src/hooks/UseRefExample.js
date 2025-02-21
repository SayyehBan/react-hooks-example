import { useEffect, useRef, useState } from "react";
import Eyes from "./Eyes";

/**
 * کامپوننت UseRefExample
 * این کامپوننت نمونه ای از استفاده از هوک useRef در ری‌اکت است
 * @returns {JSX.Element}
 */
const UseRefExample = () => {
    // استیت برای نگهداری نام کاربر
    const [name, setName] = useState("");

    // رفرنس برای شمارش رندر کامپوننت
    const renderCount = useRef(1);
    // رفرنس برای دسترسی به المان input
    const inputRef = useRef(null);
    // رفرنس برای نگهداری مقدار قبلی نام
    const prevState = useRef("");

    // افزایش شمارنده رندر در هر بار رندر کامپوننت
    useEffect(() => {
        renderCount.current = renderCount.current + 1;
    })

    // نمایش رفرنس input در کنسول هنگام مانت کامپوننت
    useEffect(() => {
        console.log(inputRef.current);
    }, []);

    // بروزرسانی مقدار قبلی نام هنگام تغییر نام
    useEffect(() => {
        prevState.current = name;
    }, [name]);

    /**
     * تابع برای فوکوس کردن روی input و تغییر استایل آن
     */
    const focusInput = () => {
        inputRef.current.focus();
        inputRef.current.placeholder = "درود بر شما ";
        inputRef.current.className = "bg-danger";
        inputRef.current.style.color = "white";
    }

    return (
        <>
            <div className="w-50 d-grid gap-2 mx-auto">
                <h5 className="alert alert-success text-center">
                    آشنایی با هوک UseRef
                </h5>
                <p>{`نام شما برابر است با : ${name}`}</p>
                <p>{`نام قبلی شما برابر است با : ${prevState.current}`}</p>
                <p>{`تعداد تکرار کامپوننت برابر است با : ${renderCount.current}`}</p>
                <input
                    ref={inputRef}
                    type="text"
                    className="form-control"
                    placeholder="اسم بده "
                    onChange={(e) => setName(e.target.value)}
                    style={{ '::placeholder': { color: 'black' } }}
                />
                <button onClick={focusInput} className="btn btn-primary btn-block mt-2 d-flex justify-content-center align-items-center gap-2">
                    تمرکز بنما <Eyes /> <Eyes />
                </button>
            </div>
        </>
    );
};

export default UseRefExample;