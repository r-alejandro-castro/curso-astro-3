import {useState} from 'preact/hooks'

export function Counter () {
    const [counter, setCounter] = useState(0)

    return (
        <>
            <span class="text-yellow-600 px-4 text-xl mr-4">{counter}</span>
            <button class="border px-4 py-2 tex-xl mr-4" onClick={() => setCounter(counter => counter + 1)}>+</button>
            <button class="border px-4 py-2 tex-xl mr-4" onClick={() => setCounter(counter => counter - 1)}>-</button>

        </>
    )
}