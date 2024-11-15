import { Link } from "react-router-dom";

export function NotFoundPage () {
    return (
        <div>This page isn't found, let's go to <Link to="/">home</Link></div>
    )
}