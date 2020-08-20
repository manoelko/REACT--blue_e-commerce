import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';
import styled from 'styled-components';

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark">
                <Link to='/' className="c-darkblue">
                    <i className="fas fa-palette"></i>
                </Link>
                <Link to='./cart' className="ml-auto">
                    <ButtonContainer>
                        <i className="fas fa-shopping-cart"></i>
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
    background: var(--steelBlue);
`