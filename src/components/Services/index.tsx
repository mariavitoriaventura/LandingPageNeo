
import React from 'react'
import * as S from './styles'

const items = [
  { title: 'Creative', lines: ['Branding/logo design', 'Conversion optimization', 'Marketing video creation']},
  { title: 'Marketing & Advertising', lines: ['Google / YouTube Ads', 'Facebook Ads', 'LinkedIn & automation']},
  { title: 'Development', lines: ['Web & mobile dev', 'CRM / funnel setup', 'UX/UI Design']},
]
type Props = React.ComponentPropsWithoutRef<'section'>

export const Services: React.FC<Props> = (props) => {
  return (
    <S.Section id="services" {...props}>
      <div className="container">
        <S.Title>
          <h2>Services <b>include</b></h2>
        </S.Title>
        <S.Grid>
          {items.map((it)=> (
            <S.Card key={it.title}>
              <h3>{it.title}</h3>
              <ul>{it.lines.map(l=> <li key={l}>{l}</li>)}</ul>
            </S.Card>
          ))}
        </S.Grid>
      </div>
    </S.Section>
  )
}
