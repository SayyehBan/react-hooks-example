import { useState, useMemo, useEffect, useDeferredValue } from "react";

/**
 * کامپوننت لیست که مقادیر را نمایش می دهد
 * @param {number} value - مقدار ورودی برای نمایش در لیست
 */
const List = ({ value }) => {
    // استفاده از useDeferredValue برای بهینه سازی رندر
    const deferredValue = useDeferredValue(value);

    // ایجاد لیست با استفاده از useMemo برای جلوگیری از محاسبات مجدد
    const list = useMemo(() => {
        const numbersList = [];
        let count = 0;

        while (count <= 20000) {
            numbersList.push(
                <div key={count}>{`عدد برابر است با : ${deferredValue} 🏎 `}</div>
            );
            count++;
        }
        return numbersList;
    }, [deferredValue]);

    // نمایش مقادیر در کنسول برای مقایسه
    useEffect(() => {
        console.log(`مقدار : ${value}`);
        console.log(`مقدار تاخیری : ${deferredValue}`);
    }, [value, deferredValue]);

    return list;
};

/**
 * کامپوننت اصلی برای نمایش مثال استفاده از useDeferredValue
 */
const UseDeferredValueExample = () => {
    // مدیریت state برای مقدار ورودی
    const [value, setValue] = useState(0);

    return (
        <div className="mx-auto mt-5 d-grid gap-3 w-50">
            <h5 className="alert alert-warning text-center">
                آشنایی با هوک useDeferredValue
            </h5>

            <input
                type="number"
                value={value}
                className="form-control"
                onChange={(e) => setValue(e.target.value)}
            />
            {value !== 0 ? <List value={value} /> : null}
        </div>
    );
};

export default UseDeferredValueExample;