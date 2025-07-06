import { } from './NavBar.css'


export function NavBar({setActiveTab}) {

   
    return (
        <div>
            <nav className="navBar">
                <span className="title">Todo App</span>
                <div>
                    <button onClick={()=>{
                        setActiveTab('Completed');
                    }}>Completed Todo</button>
                    <button onClick={()=>{
                        setActiveTab('Deleted');
                    }}>Deleted Todo</button>
                    <button onClick={()=>{
                        setActiveTab('Add');
                    }}>Add Todo</button>
                </div>
            </nav>
        </div>
    )

}