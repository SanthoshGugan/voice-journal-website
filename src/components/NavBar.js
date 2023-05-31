import React, { useEffect } from "react"
import { useSelector } from "react-redux";
export const NavBar = () => {
    const { isNavVisible } = useSelector(state => state.app);
    
    useEffect(() => {

    }, [isNavVisible]);
    return (
        <div style={{
            flex: '15% 0 0',
            height: '100%',
            borderRight: '0.15rem solid #A396FF',
            backgroundColor: '#BFB6FF',
            display: isNavVisible ? 'flex' : 'none',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '10px'
        }}>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
        </div>
    );
}