import Link from "next/link"
function Navbar(){

    return(
        <nav className="flex justify-between px-5 py-10 border-p">
            <div>
                <Link href="/">Memora</Link>
            </div>

            <div className="hidden md:flex gap-6 items-center">
                <Link href="/">Home</Link>
                <Link href="/collections">Order Now</Link>
                <Link href="/customised">Customised Order</Link>
                <Link href="/track">Track Order</Link>
                <Link href="/about">About Us</Link>
                <Link href="/contact">Contact Us</Link>
            </div>
        </nav>
        
    )
}

export default Navbar