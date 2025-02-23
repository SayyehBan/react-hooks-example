import { useState, useTransition } from "react";

const UseTransitionExample = () => {
    const [isPanding, startTransition] = useTransition();
    const [value, setValue] = useState(0);
    const [list, setList] = useState([]);
    const handleChange = (e) => {
        setValue(e.target.value);
        startTransition(() => {
            const numbersList = [];
            let count = 0;
            while (count < 20000) {
                numbersList.push(e.target.value);
                count++;
            }
            setList(numbersList);
        });
    };
    return (
        <div className="mx-auto mt-5 d-grid gap-3 w-50">
            <h5 className="alert alert-primary text-center">
                {/* هوک useTransition برای مدیریت انتقال‌های حالت با اولویت پایین استفاده می‌شود */}
                {/* این هوک به ما اجازه می‌دهد تا عملیات‌های سنگین را به تعویق بیندازیم */}
                {/* و UI را همچنان پاسخگو نگه داریم */}
                آشنایی با هوک UseTransition
            </h5>
            <input
                type="number"
                className="form-control"
                value={value}
                onChange={handleChange}
            />
            {isPanding ? (
                // نمایش پیام بارگذاری هنگامی که عملیات در حال انجام است
                <div className="alert alert-info">در حال بارگذاری</div>
            ) : (
                // نمایش لیست اعداد پس از اتمام عملیات
                list.map((item, index) => (
                    <div key={index}>{`عدد برابر است با : ${item}`}</div>
                ))
            )}
        </div>
    );
};
export default UseTransitionExample;