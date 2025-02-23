# راهنمای React Hooks
![2025-02-23_20-01-54](https://github.com/user-attachments/assets/c45f5785-f750-4580-8083-725d9d925991)

## مقدمه‌ای بر React Hooks

React Hooks توابعی هستند که به شما امکان استفاده از state و سایر ویژگی‌های React را در کامپوننت‌های تابعی می‌دهند. آنها در React 16.8 معرفی شدند تا بتوانید بدون نوشتن کامپوننت‌های کلاسی از state و سایر ویژگی‌های React استفاده کنید.

## هوک‌های پایه

### useState

const [state, setState] = useState(initialState);

- مدیریت state در کامپوننت‌های تابعی
- مقدار فعلی state و تابعی برای به‌روزرسانی آن را برمی‌گرداند
- می‌تواند چندین بار در یک کامپوننت استفاده شود

### useEffect

useEffect(() => {
// کد side effects
}, [dependencies]);

- مدیریت side effects در کامپوننت‌های تابعی
- جایگزینی برای متدهای چرخه حیات مانند componentDidMount و componentDidUpdate
- آرایه وابستگی‌ها کنترل می‌کند که effect چه زمانی اجرا شود

### useContext

const value = useContext(MyContext);

- اشتراک در React context
- امکان استفاده از context در کامپوننت‌های تابعی

## هوک‌های اضافی

### useReducer

const [state, dispatch] = useReducer(reducer, initialState);

- جایگزینی برای useState برای منطق state پیچیده
- مشابه الگوی Redux

### useCallback

const memoizedCallback = useCallback(
() => {
doSomething(a, b);
},
[a, b],
);

- حافظه‌سازی توابع برای جلوگیری از رندر مجدد غیرضروری
- مفید برای بهینه‌سازی عملکرد

### useMemo

const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

- حافظه‌سازی مقادیر برای جلوگیری از محاسبات پرهزینه
- کمک به بهینه‌سازی عملکرد

### useRef

const refContainer = useRef(initialValue);

- حفظ مقادیر بین رندرها
- معمولاً برای دسترسی به عناصر DOM استفاده می‌شود

## هوک‌های سفارشی

شما می‌توانید هوک‌های خود را برای استفاده مجدد از منطق stateful بین کامپوننت‌ها ایجاد کنید:

function useCustomHook() {
const [state, setState] = useState(initialState);
// منطق خود را اینجا اضافه کنید
return state;
}

## قوانین هوک‌ها

1. فقط هوک‌ها را در سطح بالا فراخوانی کنید
2. فقط هوک‌ها را از کامپوننت‌های تابعی React فراخوانی کنید
3. هوک‌ها را داخل حلقه‌ها، شرط‌ها یا توابع تودرتو فراخوانی نکنید

## اسکریپت‌های موجود

در دایرکتوری پروژه، می‌توانید موارد زیر را اجرا کنید:

### `npm start`

برنامه را در حالت توسعه اجرا می‌کند.

### `npm test`

اجرای تست‌ها را شروع می‌کند.

### `npm run build`

برنامه را برای محیط تولید می‌سازد.

## اطلاعات بیشتر

- [مستندات React Hooks](https://reactjs.org/docs/hooks-intro.html)
- [مرجع API هوک‌ها](https://reactjs.org/docs/hooks-reference.html)
- [قوانین هوک‌ها](https://reactjs.org/docs/hooks-rules.html)
