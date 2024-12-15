import { createHashRouter } from "react-router";
import App from '../view/App';
import Delete from '../view/Delete';
import UpdateName from "../view/Update";
import AddUser from "../view/Add";
export const router = createHashRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/add",
        element: <AddUser />
    },
    {
        path: "/delete",
        element: <Delete />
    },
    {
        path: "/update",
        element: <UpdateName />
    },
])