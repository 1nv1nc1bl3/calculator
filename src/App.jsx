import { useState } from 'react';

export default function App() {
    // State
    const [input, setInput] = useState('0');

    // Button Styles
    const baseBtn = 'cursor-pointer text-2xl p-2 rounded-lg btn';

    const buttonStyles = {
        number: 'bg-slate-800 hover:bg-slate-700',
        operator: 'bg-sky-950 hover:bg-sky-900',
        control: 'bg-stone-900 hover:bg-stone-800',
        equals: 'bg-gray-900 hover:bg-gray-800',
    };

    // Functions
    const handleClick = (num) => {
        setInput((prev) => (prev === '0' ? num : prev + num));
    };

    const handleClear = () => {
        setInput('');
    };

    const handleDelete = () => {
        setInput((prev) => prev.slice(0, -1));
    };

    const handleCalculate = () => {
        try {
            const result = eval(input);
            setInput(result.toString());
        } catch {
            setInput('Error');
        }
    };

    return (
        <div className='calculator-container font-display min-h-screen flex flex-col  justify-center items-center text-white bg-slate-900 gap-10'>
            <h1 className='text-4xl mb-6 text-slate-300'>Calculator</h1>
            <div className='calculator min-w-max flex flex-col justify-center items-center bg-slate-950 rounded-2xl p-8 shadow-xl shadow-slate-800/50 gap-4'>
                <div
                    className='display w-full rounded-lg text-right bg-slate-700 text-4xl text-slate-300 px-2 py-4 overflow-x-auto
'
                >
                    {input || 0}
                </div>

                <div className='buttons grid grid-cols-4 gap-4'>
                    <button
                        className={`${buttonStyles.control} ${baseBtn}`}
                        onClick={handleClear}
                    >
                        C
                    </button>
                    <button
                        className={`${buttonStyles.control} ${baseBtn}`}
                        onClick={handleDelete}
                    >
                        DEL
                    </button>
                    <button
                        className={`${buttonStyles.operator} ${baseBtn}`}
                        onClick={() => handleClick('%')}
                    >
                        %
                    </button>
                    <button
                        className={`${buttonStyles.operator} ${baseBtn}`}
                        onClick={() => handleClick('/')}
                    >
                        /
                    </button>

                    <button
                        className={`${baseBtn} ${buttonStyles.number}`}
                        onClick={() => handleClick('7')}
                    >
                        7
                    </button>
                    <button
                        className={`${baseBtn} ${buttonStyles.number}`}
                        onClick={() => handleClick('8')}
                    >
                        8
                    </button>
                    <button
                        className={`${baseBtn} ${buttonStyles.number}`}
                        onClick={() => handleClick('9')}
                    >
                        9
                    </button>
                    <button
                        className={`${buttonStyles.operator} ${baseBtn}`}
                        onClick={() => handleClick('*')}
                    >
                        x
                    </button>

                    <button
                        className={`${baseBtn} ${buttonStyles.number}`}
                        onClick={() => handleClick('4')}
                    >
                        4
                    </button>
                    <button
                        className={`${baseBtn} ${buttonStyles.number}`}
                        onClick={() => handleClick('5')}
                    >
                        5
                    </button>
                    <button
                        className={`${baseBtn} ${buttonStyles.number}`}
                        onClick={() => handleClick('6')}
                    >
                        6
                    </button>
                    <button
                        className={`${buttonStyles.operator} ${baseBtn}`}
                        onClick={() => handleClick('-')}
                    >
                        -
                    </button>

                    <button
                        className={`${baseBtn} ${buttonStyles.number}`}
                        onClick={() => handleClick('1')}
                    >
                        1
                    </button>
                    <button
                        className={`${baseBtn} ${buttonStyles.number}`}
                        onClick={() => handleClick('2')}
                    >
                        2
                    </button>
                    <button
                        className={`${baseBtn} ${buttonStyles.number}`}
                        onClick={() => handleClick('3')}
                    >
                        3
                    </button>
                    <button
                        className={`${buttonStyles.operator} ${baseBtn}`}
                        onClick={() => handleClick('+')}
                    >
                        +
                    </button>

                    <button
                        className={`${baseBtn} ${buttonStyles.number} zero col-span-2`}
                        onClick={() => handleClick('0')}
                    >
                        0
                    </button>
                    <button
                        className={`${baseBtn} ${buttonStyles.number}`}
                        onClick={() => handleClick('.')}
                    >
                        .
                    </button>
                    <button
                        className={`${buttonStyles.equals} ${baseBtn}`}
                        onClick={handleCalculate}
                    >
                        =
                    </button>
                </div>
            </div>
        </div>
    );
}
