import { useEffect, useMemo, useState } from "react";
import Eyes from "../components/Eyes";

/**
 * تابع بسیار کند که برای شبیه سازی عملیات سنگین استفاده می‌شود
 * @param {number} num - عدد ورودی
 * @returns {number} - عدد ضرب در ۲
 */
const superSlowFunction = (num) => {
    console.log("super Slow Function Is Running");
    let count = 0;
    while (count < 1000000000) {
        count++;
    }
    return num * 2;
};

/**
 * کامپوننت نمایش مثال استفاده از هوک useMemo
 * این کامپوننت نحوه بهینه سازی محاسبات با استفاده از useMemo را نشان می‌دهد
 * @returns {JSX.Element}
 */
const UseMemoExample = () => {
    // استیت برای نگهداری عدد ورودی
    const [number, setNumber] = useState(0);
    // استیت برای تغییر رنگ پس زمینه
    const [colorChange, setColorChange] = useState(false);

    // محاسبه عدد دو برابر شده با استفاده از useMemo برای جلوگیری از محاسبات اضافی
    const doubleNumber = useMemo(() => {
        return superSlowFunction(number);
    }, [number]);

    // تنظیم استایل با استفاده از useMemo
    const appStyle = useMemo(() => {
        return {
            backgroundColor: colorChange ? "tomato" : "white",
            color: colorChange ? "white" : "tomato",
        };
    }, [colorChange]);

    // نمایش پیام در کنسول هنگام تغییر رنگ پس زمینه
    useEffect(() => {
        console.log("Background Color Changed");
    }, [appStyle]);

    return (
        <div className="container mt-5 d-flex justify-content-center">
            <div className="w-50" style={appStyle}>
                <h5 className="alert alert-primary text-center">آشنایی با هوک UseMemo</h5>
                <input
                    type="number"
                    className="form-control"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    placeholder="عدد را وارد کنید"
                />
                <div className="d-flex justify-content-center">
                    <button onClick={() => setColorChange((pervColorChange) => !pervColorChange)} className="btn btn-primary btn-block mt-2 d-flex justify-content-center align-items-center gap-2">
                        رنگ تغییر بده <Eyes /> <Eyes />
                    </button>
                </div>
                <div style={appStyle} className="text-center">
                    <p className="alert alert-warning"> {`عدد دو برابر شده برابر است با ${doubleNumber}`}</p>
                </div>
            </div>
        </div>);
};

export default UseMemoExample;