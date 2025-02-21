import Eyes from "./Eyes";

const UseRefExample = () => {
    return (
        <>
            <div className="w-50 d-grid gap-2 mx-auto">
                <h5 className="alert alert-success text-center">
                    آشنایی با هوک UseRef
                </h5>
                <input
                    type="text"
                    className="form-control"
                    palaceholder="اسم بده جیگیرم"
                />
                <button className="btn btn-primary btn-block mt-2 d-flex justify-content-center align-items-center">
                    تمرکز بنما{" "}
                    <Eyes />
                    <Eyes />
                </button>
            </div>
        </>
    );
};
export default UseRefExample;
