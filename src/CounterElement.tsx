import React, { FC } from "react"
import Counter from "./models/counter"

/**
 * Элемент отображения состояния.
 * 
 * Отображает состояние
 *
 * @param description текст элемента.
 * @param stateCounter текущее состояние элемента.
 * @param className имя класса элемента.
 */

const CounterElement: FC<Counter> = ({ description, stateCounter, className }) => {
    return (
        <div className={className}>{`${description} ${stateCounter} раз`}</div>
    )
}

export default CounterElement