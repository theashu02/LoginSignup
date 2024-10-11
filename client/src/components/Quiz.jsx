import Question from "./Question";


export default function Quiz() {
    function onPrev(){
       console.log('on next click')
    }
    function onNext(){
       console.log('on next click');
    }
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            {/* display questions */}
            <Question />
            {/* button section */}
            <div className="flex flex-row justify-between  w-[90%]">
                <button className="btn btn-neutral" onClick={onPrev}>Prev</button>
                <button className="btn btn-neutral" onClick={onNext}>Next</button>
            </div>
        </div>
    )
}
