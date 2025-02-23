import { useEffect, useState } from "react";

/**
 * هوک سفارشی برای دریافت داده از API
 * @param {string} url - آدرس API برای دریافت داده
 * @returns {Array} - آرایه حاوی داده دریافت شده
 */
const useFetch = (url) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('خطا در دریافت اطلاعات از سرور');
                }
                return res.json();
            })
            .then(data => setData(data))
            .catch(error => {
                console.error('خطا در دریافت اطلاعات:', error);
                setData(null);
            });
    }, [url]);
    return [data];
}

/**
 * هوک سفارشی برای نمایش لاگ تغییرات
 * @param {any} value - مقداری که باید تغییرات آن لاگ شود
 */
const useUpdateLogger = (value) => {
    useEffect(() => {
        console.log('مقدار بروزرسانی شده:', value);
    }, [value]);
};

/**
 * کامپوننت اصلی برای نمایش نحوه استفاده از هوک‌های سفارشی
 * @returns {JSX.Element} - المان JSX برای رندر
 */
const UseCustomHook = () => {
    const [showUsers, setShowUsers] = useState(false);
    const [users] = useFetch("https://jsonplaceholder.ir/users");

    useUpdateLogger(showUsers);
    return (
        <div className="mx-auto mt-5 d-grid gap-3 w-50">
            <h5 className="text-center alert alert-danger">
                آشنایی با هوک شخصی سازی شده
            </h5>
            <hr className="bg-dark" />
            <button className="btn btn-block btn-success"
                onClick={() => setShowUsers(!showUsers)}
            >
                نمایش کاربر
            </button>
            {showUsers && (
                <ul className="list-group">
                    {users &&
                        users.map((user) => (
                            <li className="list-group-item" key={user.name}>
                                {user.name}
                            </li>
                        ))}
                </ul>
            )}
        </div>
    );
};

export default UseCustomHook;