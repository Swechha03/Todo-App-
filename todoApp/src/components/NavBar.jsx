import { } from './NavBar.css'

export function NavBar() {
    return (
        <div>
            <nav className="navBar">
                <span className="title">Todo App</span>
                <div>
                    <button onClick="">Completed Todo</button>
                    <button onClick="">Deleted Todo</button>
                    <button onClick="">Add Todo</button>
                </div>
            </nav>
        </div>
    )

}