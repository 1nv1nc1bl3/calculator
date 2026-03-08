import { useState } from 'react';

export default function App() {
    const [display, setDisplay] = useState('0');

    const handleNumber = (num) => {
        setDisplay((prev) => (prev === '0' ? num : prev + num));
    };

    const handleOperator = (op) => {
        setDisplay((prev) => prev + ' ' + op + ' ');
    };

    const handleClear = () => {
        setDisplay('0');
    };

    const handleDelete = () => {
        setDisplay((prev) => (prev.length === 1 ? '0' : prev.slice(0, -1)));
    };

    const handleEquals = () => {
        try {
            const result = eval(display.replace(/×/g, '*').replace(/÷/g, '/'));
            setDisplay(String(result));
        } catch {
            setDisplay('Error');
        }
    };

    return (
        <div className='calculator-container font-display min-h-screen flex flex-col  justify-center items-center text-white bg-slate-900 gap-10'>
            <h1 class='text-4xl mb-6 text-slate-300'>Calculator</h1>
            <div className='calculator min-w-max flex flex-col justify-center items-center bg-slate-950 rounded-2xl p-8 shadow-xl shadow-slate-800/50 gap-4'>
                <div
                    className='display w-full rounded-lg text-right bg-slate-700 text-4xl text-slate-300 px-2 py-4 overflow-x-auto
'
                >
                    {display}
                </div>

                <div className='buttons grid grid-cols-4 gap-4'>
                    <button className='cursor-pointer text-2xl p-2 rounded-lg bg-stone-900 hover:bg-stone-800 btn control'>
                        C
                    </button>
                    <button className='cursor-pointer text-2xl p-2 rounded-lg bg-stone-900 hover:bg-stone-800 btn control'>
                        DEL
                    </button>
                    <button className='cursor-pointer text-2xl p-2 rounded-lg bg-sky-950 hover:bg-sky-900 btn operator'>
                        %
                    </button>
                    <button className='cursor-pointer text-2xl p-2 rounded-lg bg-sky-950 hover:bg-sky-900 btn operator'>
                        /
                    </button>

                    <button className='cursor-pointer text-2xl p-2 rounded-lg bg-slate-800 hover:bg-slate-700 btn'>
                        7
                    </button>
                    <button className='bcursor-pointer text-2xl p-2 rounded-lg bg-slate-800 hover:bg-slate-700 btn'>
                        8
                    </button>
                    <button className='cursor-pointer text-2xl p-2 rounded-lg bg-slate-800 hover:bg-slate-700 btn'>
                        9
                    </button>
                    <button className='cursor-pointer text-2xl p-2 rounded-lg bg-sky-950 hover:bg-sky-900 btn operator'>
                        x
                    </button>

                    <button className='cursor-pointer text-2xl p-2 rounded-lg bg-slate-800 hover:bg-slate-700 btn'>
                        4
                    </button>
                    <button className='cursor-pointer text-2xl p-2 rounded-lg bg-slate-800 hover:bg-slate-700 btn'>
                        5
                    </button>
                    <button className='cursor-pointer text-2xl p-2 rounded-lg bg-slate-800 hover:bg-slate-700 btn'>
                        6
                    </button>
                    <button className='cursor-pointer text-2xl p-2 rounded-lg bg-sky-950 hover:bg-sky-900 btn operator'>
                        -
                    </button>

                    <button className='cursor-pointer text-2xl p-2 rounded-lg bg-slate-800 hover:bg-slate-700 btn'>
                        1
                    </button>
                    <button className='cursor-pointer text-2xl p-2 rounded-lg bg-slate-800 hover:bg-slate-700 btn'>
                        2
                    </button>
                    <button className='cursor-pointer text-2xl p-2 rounded-lg bg-slate-800 hover:bg-slate-700 btn'>
                        3
                    </button>
                    <button className='cursor-pointer text-2xl p-2 rounded-lg bg-sky-950 hover:bg-sky-900 btn operator'>
                        +
                    </button>

                    <button className='cursor-pointer text-2xl p-2 rounded-lg bg-slate-800 hover:bg-slate-700 btn zero col-span-2'>
                        0
                    </button>
                    <button className='cursor-pointer text-2xl p-2 rounded-lg bg-slate-800 hover:bg-slate-700 btn'>
                        .
                    </button>
                    <button className='cursor-pointer text-2xl p-2 rounded-lg bg-gray-900 hover:bg-gray-800 btn equals'>
                        =
                    </button>
                </div>
            </div>
        </div>
    );
}
