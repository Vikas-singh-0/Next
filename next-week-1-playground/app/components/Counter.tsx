'use client';
import { JSX, useState } from "react";

export default function Counter(): JSX.Element {
    const [count, setCount]: [number, (value: number) => void] = useState(0);
    return <button onClick={(): void => setCount(count + 1)}>Counter Component {count}</button>;
}