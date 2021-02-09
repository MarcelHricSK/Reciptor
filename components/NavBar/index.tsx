import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, useMotionValue, MotionValue } from 'framer-motion';

interface Props {
    inValue?: string;
}
const Navbar: React.FC<Props> = (props) => {
    const router = useRouter();
    
    const [ searchString, setSearchString ] = useState<string>("");

    const opacity: MotionValue = useMotionValue(0.5) ;
    const inputAnimationHandler = (val: string ) => {
        val ? opacity.set(1) : opacity.set(0.5);
    }

    useEffect(() => {
        props.inValue && setSearchString(props.inValue);
    }, [router]);

    return (
        <header>
            <nav>
                <Link href="/">  
                    <img src="/static/img/ico/logo.svg" className="logo"/>
                </Link>
                <div className="menuSearch">
                    <motion.img style={{opacity, transition: "0.5s"}} src="/static/img/ico/search.svg" alt=""/>
                    <motion.input type="text" name="query" id="menuSearchBar" placeholder="Search" onChange={(e) => {setSearchString(e.target.value); inputAnimationHandler(e.target.value)}} value={searchString} />
                    <Link href={"/search?query=" + searchString}><button className="menuSearchButton"><img src="/static/img/ico/arrowRight.svg" alt=""/></button></Link>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
