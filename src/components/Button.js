import styled from 'styled-components';

export const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1.4rem;
    background: transparent;
    color: ${props => props.cart ? 'var(--blue)' : 'var(--darkBlue)'};
    border: 0.05rem solid var(--darkBlue);
    border-color: ${props => props.cart ? 'var(--blue)' : 'var(--darkBlue)'};
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;
    &:hover{
        background: ${props => props.cart ? 'var(--blue)' : 'var(--darkBlue)'};
        color: var(--white);
    }
    &:focus{
        outline: none;
    }
`