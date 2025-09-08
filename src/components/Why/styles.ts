
import styled from 'styled-components'

export const Section = styled.section`
  padding: 72px 0 100px;
`

export const Grid = styled.div`
  display:grid; gap:28px; grid-template-columns: 1fr;
  @media (min-width: 960px){ grid-template-columns: .9fr 1.1fr; align-items:center }
  h3{ font-size: clamp(28px, 5vw, 42px); margin:0 0 12px; font-weight:900 }
  h3 b{
    background: linear-gradient(90deg, var(--primary-2), var(--primary));
    -webkit-background-clip: text; color: transparent;
  }
  p{ color: var(--muted) }
`

export const More = styled.button``

export const CardCluster = styled.div`
  display:grid; gap:18px;
  grid-template-columns: repeat(3, 1fr);
  .tile{
    aspect-ratio: 1.2/1;
    display:flex; flex-direction:column; align-items:center; justify-content:center;
    border-radius: 16px;
    background: linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.02));
    border: 1px solid rgba(255,255,255,.06);
    box-shadow: 0 20px 60px rgba(168,85,247,.08);
  }
  span{ font-weight:900; font-size: 28px }
  small{ color: var(--muted)}
`
export const ImageWrapper = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;

  img {
    max-width: 100%;
    height: auto;
    display:block;
    border-radius: 12px;
  }
`
