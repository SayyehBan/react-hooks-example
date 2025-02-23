import { useRef, forwardRef, useImperativeHandle } from "react";

/**
 * کامپوننت ورودی سفارشی با استفاده از forwardRef
 * این کامپوننت یک ورودی ساده را با قابلیت فوکوس از بیرون ارائه می‌دهد
 * @param {object} props - پراپ‌های کامپوننت
 * @param {React.Ref} ref - رفرنس ارسالی از کامپوننت والد
 */
let BootStrapInput = (props, ref) => {
    const inputRef = useRef(null);
    // استفاده از useImperativeHandle برای در دسترس قرار دادن متد focus
    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus();
        }
    }));
    return <input ref={inputRef} {...props} />
}
BootStrapInput = forwardRef(BootStrapInput);

/**
 * کامپوننت اصلی برای نمایش مثال استفاده از هوک useImperativeHandle
 * این کامپوننت نحوه استفاده از useImperativeHandle را نشان می‌دهد
 */
const UseImperativeHandleExample = () => {
    // ایجاد یک رفرنس برای دسترسی به کامپوننت BootStrapInput
    const inputRef = useRef(null);

    // تابع برای فعال کردن فوکوس روی فیلد ورودی
    const handleFocus = () => {
        inputRef.current.focus();
    }

    return (
        <div className="mx-auto mt-5 d-grid gap-3 w-50">
            <h5 className="text-center alert alert-success">
                استفاده از هوک useImperativeHandle
            </h5>
            <hr className="bg-danger" />
            <BootStrapInput ref={inputRef} type="text" className="form-control" />
            <button className="btn btn-primary" onClick={handleFocus}>
                فعال کردن فیلد ورودی
            </button>
        </div>
    );
};

export default UseImperativeHandleExample;