import React from 'react';
import Menu from './Menu';
import { HeaderInner, HeaderWrapper } from './style';

const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderInner>
                <Menu/>
            </HeaderInner>
        </HeaderWrapper>
    );
};

export default Header;