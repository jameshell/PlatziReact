﻿import React from 'react';
// lols
function TodoList(props) {
    return (
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    );
}

export { TodoList }