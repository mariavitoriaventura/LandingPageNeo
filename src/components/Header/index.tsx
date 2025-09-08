
import React from 'react'
import * as S from './styles'
import { useScrollSpy } from '../../hooks/useScrollSpy';

export const Header: React.FC = () => {
  const activeId = useScrollSpy([
    '#hero',
    '#services',
    '#steps',
    '#why',
    '#footer'
  ]);
  return (
    <S.Wrapper>
      <div className="container">
        <S.Bar>
          <S.Logo><span>Search</span>Team</S.Logo>
          <S.Nav>
            <a href="#services" className={activeId === 'services' ? 'active' : ''}>Services</a> 
            <a href="#steps" className={activeId === 'steps' ? 'active' : ''}>Our Process</a>
            <a href="#why" className={activeId === 'why' ? 'active' : ''}>Why Us</a>
          </S.Nav>
          <S.Contact>Contact</S.Contact>
        </S.Bar>
      </div>
    </S.Wrapper>
  )
}
