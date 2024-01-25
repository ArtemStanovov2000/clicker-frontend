import './App.css';
import React from 'react';
import Button from './models/button';
import { FC } from 'react';

/**
 * Элемент кнопки.
 *
 * @param className имя класса элемента.
 * @param state текущее состояние элемента.
 * @param setState функция изменения состояния элемента.
 */

const ButtonElement: FC<Button> = ({ className, state, setState }) => {
    return (
        <button onClick={() => setState(state + 1)} className={className}>{"Кликнуть"}</button>
    )
}

export default ButtonElement