import React, { FC } from "react"

interface Props {
    label: string;
    count: number;
    className: string;
}

/**
 * Элемент отображения состояния.
 *
 * @param label текст элемента.
 * @param count текущее состояние элемента.
 * @param className имя класса элемента.
 */

const ClickCounterDisplayer: FC<Props> = ({ label, count, className }) => {
    return (
        <div className={className}>{`${label} ${count} раз`}</div>
    )
}

export default ClickCounterDisplayer