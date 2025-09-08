import React from 'react'
import * as S from './styles'
import mediaImg from '../../assets/media.png'

type Props = React.ComponentPropsWithoutRef<'section'>

export const Why: React.FC<Props> = (props) => {
  return (
    <S.Section {...props}>
      <div className="container">
        <S.Grid>
          <S.ImageWrapper>
            <img src={mediaImg} alt="UX/UI Media" />
          </S.ImageWrapper>

          <div>
            <h3>Why ABN <b>Agency</b></h3>
            <p>
              Take your business to the next level by working with seasoned digital marketing specialists,
              to create, implement and optimize your digital marketing strategy.
            </p>
            <p>
              Because we truly want to provide results we are selective in the clients we take on.
              If we decide to work together we will use our superstar team of developers, data analysts,
              conversion optimization specialists and media buyers to GROW your business to new heights.
            </p>
            <S.More className="pill">Learn More About US</S.More>
          </div>
        </S.Grid>
      </div>
    </S.Section>
  )
}
