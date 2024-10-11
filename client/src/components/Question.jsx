import { useEffect, useState } from 'react'
import data from './data'

export default function Question() {
    // data set for testing
    const question = data[0];
    useEffect(() => {
        console.log(question);
    })

    // const [checked, setChecked] = useState(undefined);

    function onSelect() {
        console.log("button pushed button changed")
    }
    return (
        <div className="flex flex-col space-y-10 justify-center items-start w-[60%] h-[70%]">
            <h2 className="ml-[50px] text-3xl font-semibold font-mono">{question.question}</h2>
            <ul className="space-y-14 ml-[50px]" key={question.id}>
                {
                    question.options.map((q, i) => (
                        <li key={i} className='flex flex-row space-x-4'>
                            <input type='radio' value={false} name="option" id={`q${i}-option`}
                                onChange={onSelect()}
                                className="radio radio-secondary"
                            />
                            <label htmlFor='{`q${i}-option`}' className='text-lg font-medium font-mono'>
                                {q}
                            </label>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
