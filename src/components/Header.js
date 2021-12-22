import Navbar from './NavBar'
import Button from './Button';

const Header = ({ title }) => {
    //destructured prop^
    return (
        <header>
            <Navbar />
            <h1>THE BLACK BOOK</h1> 
            <h2>{title}</h2> 
            <Button color="green" text='Add' />
            <Button color="red" text='Add' />
            <Button color="blue" text='Add' />
            <Button  text='Add' />
        </header>
    )
}

export default Header
