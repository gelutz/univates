
import { Routes } from 'react-router'
import { BrowserRouter, Route } from "react-router-dom";

import { Todo } from "./components/Todo";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Todo />} />
            </Routes>
        </BrowserRouter>
    );
}
