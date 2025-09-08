
import styled from 'styled-components'

export const Section = styled.section`
  padding: 64px 0;
`
export const Title = styled.div`
  h2{
    font-size: clamp(28px, 5vw, 42px); margin:0 0 22px; font-weight:900;
  }
  h2 b{
    background: linear-gradient(90deg, var(--primary-2), var(--primary));
    -webkit-background-clip: text; color: transparent;
  }
`

export const Grid = styled.div`
  display:grid; gap:18px; grid-template-columns: 1fr;
  @media (min-width: 840px){ grid-template-columns: repeat(3, 1fr) }
`
export const Card = styled.article`
  border-radius: 16px;
  padding: 20px;
  color: white;
  border: none;
  box-shadow: 0 20px 40px rgba(0,0,0,.5);

  h3{ margin: 0 0 12px; font-size:18px }
  ul{ margin:0; padding-left: 18px; color:#f3f4f6 }
  li{ margin: 6px 0 }

  &:nth-child(1) {
    background: radial-gradient(circle at top left, #ec4899 0%, #9333ea 60%);
  }
  &:nth-child(2) {
    background: radial-gradient(circle at top right, #3b82f6 0%, #9333ea 60%);
  }
  &:nth-child(3) {
    background: radial-gradient(circle at bottom left, #f59e0b 0%, #9333ea 65%);
  }
`
