import AccordionItem from "./components/Accordion";
import {
  UseRefExample,
  UseMemoExample,
  UseCallBackExample,
  UseReducerExample,
  UseLayoutEffectExample,
} from "./hooks";
function App() {
  return (
    <div className="container">
      <div classname="text-center mt-2">
        <h2>یادگیری و استفاده از هوک های ری اکت</h2>
      </div>
      <hr className="text-danger" />
      <div className="accordion" id="accordionExample">
        <AccordionItem
          id={"ref"}
          title="استفاده از هوک useRef"
          children={<UseRefExample />}
        />
        <AccordionItem
          id={"Memo"}
          title=" استفاده از هوک Memo"
          children={<UseMemoExample />}
        />
        <AccordionItem
          id={"useCallback"}
          title="استفاده از هوک useCallback"
          children={<UseCallBackExample />}
        />
        <AccordionItem
          id={"useReducer"}
          title="استفاده از هوک useReducer"
          children={<UseReducerExample />}
        />
        <AccordionItem
          id={"useLayoutEffect"}
          title="استفاده از هوک useLayoutEffect"
          children={<UseLayoutEffectExample />}
        />
      </div>
    </div>
  );
}

export default App;
