import styles from './Navbar.module.css'
function Navbar(){
    return(
        <div>
               <nav className={styles.navbar}>
                <div className={styles.navdiv}>
                {/* This is logo of navbar */}
                    <div className={styles.logo}>
                        <a href='#'>
                       <img src='https://www.masaischool.com/img/navbar/logo.svg' alt='Masai-logo'/>

                        </a>
                    </div>
                    <div className={styles.search}>
                        <input placeholder='Serach-Items'/>
                    </div>
                    <ul>
                        <li><a href='#'>Home</a></li>
                        
                        <li><a href='#'>About</a></li>
                        
                        <li><a href='#'>Contact</a></li>
                        
                        <button><a href='#'>Login</a></button>

                        <button><a href='#'>SignUp</a></button>
                    </ul>
                </div>
               </nav>    
        </div>
    )
}
export default Navbar;