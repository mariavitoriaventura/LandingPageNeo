
import React from 'react'
import * as S from './styles'
import { FaInstagram, FaTwitter, FaDribbble } from 'react-icons/fa'

type Props = React.ComponentPropsWithoutRef<'footer'>

export const Footer: React.FC<Props> = (props) => {
  return (
    <S.Wrapper {...props}>
      <div className="container">
        <S.Row>
          <S.Logo><span>Search</span>Team</S.Logo>
          <S.Copy>© 2025 ABN Agency. All rights reserved.</S.Copy>
          <S.Social>
            <a href="#"><FaInstagram/></a>
            <a href="#"><FaTwitter/></a>
            <a href="#"><FaDribbble/></a>
          </S.Social>
        </S.Row>
      </div>
    </S.Wrapper>
  )
}
