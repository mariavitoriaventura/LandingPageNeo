
import styled from 'styled-components'

export const Section = styled.section`
  padding: 64px 0;
`

export const Layout = styled.div`
  display:grid; gap:28px; grid-template-columns: 1fr;
  @media (min-width: 960px){ grid-template-columns: 1.1fr .9fr; align-items:center }
`

export const List = styled.ul`
  list-style:none; margin:0; padding:0; display:flex; flex-direction:column; gap:14px;
  li{
    display:grid; grid-template-columns: 64px 1fr; gap:14px; align-items:center;
    background: linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.02));
    border: 1px solid rgba(255,255,255,.06);
    border-radius: 16px; padding: 16px;
  }
  span{
    width:48px; height:48px; display:grid; place-items:center; border-radius:12px;
     background: radial-gradient(circle at top left, #ec4899 0%, #9333ea 60%);
  }
  p{ color:var(--muted); margin:0 }
`

export const Copy = styled.div`
  h3{ font-size: clamp(28px, 5vw, 48px); margin:0 0 8px; font-weight:900 }
  p{ font-size: 20px; margin:0; color:var(--muted) }
  strong{ color:white }
`
