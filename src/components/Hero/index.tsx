
import React from 'react'
import * as S from './styles'

type Props = React.ComponentPropsWithoutRef<'section'>

export const Hero: React.FC<Props> = (props) => {
  return (
    <S.Section {...props}>
      <div className="container">
        <S.Hgroup>
          <h1>
            <span>Design,</span>
            <span>Development &</span>
            <span>Digital Marketing</span>
          </h1>
          <p>We will help you get more business</p>
        </S.Hgroup>

        <S.CTA>
          <small>We are going to create a result driven optimal marketing strategy for your business</small>
          <S.Form onSubmit={(e)=>e.preventDefault()}>
            <input placeholder="First Name"/>
            <input placeholder="Email" type="email"/>
            <button className="pill" type="submit">Request a Quote</button>
          </S.Form>
        </S.CTA>
      </div>
    </S.Section>
  )
}
