
import { Link} from 'react-router-dom'
const Navbar = () => {
    return (
        <>

            <section className="bg-primary">
                <div className="container">
                    <ul className="nav p-3">
                        <li className="nav-item">
                            <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link text-white" to="/addstudent"><i class="bi bi-plus-square-fill"></i></Link>
                        </li>
                    
                    </ul>
                </div>
            </section>



        </>
    )
}
export default Navbar;