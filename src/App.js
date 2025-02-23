import AccordionItem from "./components/Accordion";
import {
  UseRefExample,
  UseMemoExample,
  UseCallBackExample,
  UseReducerExample,
  UseLayoutEffectExample,
  UseImperativeHandleExample,
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
          collapsed={true}
        />
        <AccordionItem
          id={"Memo"}
          title=" استفاده از هوک Memo"
          children={<UseMemoExample />}
          collapsed={true}
        />
        <AccordionItem
          id={"useCallback"}
          title="استفاده از هوک useCallback"
          children={<UseCallBackExample />}
          collapsed={true}
        />
        <AccordionItem
          id={"useReducer"}
          title="استفاده از هوک useReducer"
          children={<UseReducerExample />}
          collapsed={true}
        />
        <AccordionItem
          id={"useLayoutEffect"}
          title="استفاده از هوک useLayoutEffect"
          children={<UseLayoutEffectExample />}
          collapsed={true}
        />
        <AccordionItem
          id={"useImperrativeHandle"}
          title="استفاده از هوک useImperativeHandle"
          children={<UseImperativeHandleExample />}
          collapsed={true}
        />
      </div>    </div>
  );
}

export default App;
