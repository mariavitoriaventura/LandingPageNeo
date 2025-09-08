
import React from 'react'
import * as S from './styles'

const steps = [
  { n: '01', t: 'Schedule your complimentary Marketing Strategy Session'},
  { n: '02', t: 'Get your Free marketing Strategy plan'},
  { n: '03', t: 'Work with us to grow your business and get more customers'},
]
type Props = React.ComponentPropsWithoutRef<'section'>

export const Steps: React.FC<Props> = (props) => {
  return (
    <S.Section {...props}>
      <div className="container">
        <S.Layout>
          <S.List>
            {steps.map(s => (
              <li key={s.n}>
                <span>{s.n}</span>
                <p>{s.t}</p>
              </li>
            ))}
          </S.List>
          <S.Copy>
            <h3>3 Easy steps</h3>
            <p>to grow your business with <strong>ABN Strategies</strong></p>
          </S.Copy>
        </S.Layout>
      </div>
    </S.Section>
  )
}
