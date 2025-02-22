import { useCallback, useEffect, useState } from "react";

/**
 * کامپوننت لیست برای نمایش آیتم‌ها
 * @param {Function} getItems - تابع دریافت آیتم‌ها
 * @returns {JSX.Element} - المان‌های لیست
 */
const List = ({ getItems }) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        setItems(getItems());
        console.log("updating items");
    }, [getItems]);
    return items.map((item, index) => <div key={index}>{item}</div>);
};

/**
 * کامپوننت اصلی برای نمایش مثال استفاده از هوک useCallback
 * @returns {JSX.Element} - المان اصلی
 */
const UseCallBackExample = () => {
    // استیت برای نگهداری عدد ورودی
    const [number, setNumber] = useState(1);
    // استیت برای تغییر رنگ پس زمینه
    const [colorChange, setColorChange] = useState(false);

    /**
     * تابع محاسبه آیتم‌ها با استفاده از useCallback
     * @returns {Array} - آرایه‌ای از اعداد
     */
    const getItems = useCallback(() => {
        return [number, number + 1, number + 2];
    }, [number]);

    // استایل برای تغییر رنگ پس زمینه
    const appStyle = {
        backgroundColor: colorChange ? "tomato" : "white",
    };

    return (
        <div className="mx-auto mt-5 d-grid gap-3 w-50" style={appStyle}>
            <h5 className="text-center alert alert-danger">
                استفاده از هوک useCallback
            </h5>
            <input
                type="number"
                className="form-control"
                value={number}
                onChange={(e) => setNumber(parseInt(e.target.value))}
                placeholder="عدد وارد کنید"
            />
            <button
                type="button"
                className="btn btn-success btn-block"
                onClick={() => setColorChange((pervColorChange) => !pervColorChange)}
            >
                تغیر رنگ پس زمینه
            </button>
            <div style={appStyle} className="text-center mx-auto">
                <List getItems={getItems} />
            </div>
        </div>
    );
};

export default UseCallBackExample;