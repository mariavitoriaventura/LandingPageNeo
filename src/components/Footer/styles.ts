
import styled from 'styled-components'

export const Wrapper = styled.footer`
  padding: 28px 0 48px;
  background: radial-gradient(600px 130px at 14% 20%, rgba(168,85,247,.15), transparent 60%);
`
export const Row = styled.div`
  display:grid; grid-template-columns: 1fr; gap:14px; align-items:center;
  @media (min-width: 860px){ grid-template-columns: 1fr auto auto }
`
export const Logo = styled.div`
  font-weight: 900; letter-spacing:.5px;
  span{ color: var(--primary-2)}
`
export const Copy = styled.div`
  color: var(--muted);
  text-align:left;
`
export const Social = styled.div`
  display:flex; gap:12px;
  a{ width:36px; height:36px; display:grid; place-items:center; border-radius:999px;
     background:#0e0f16; border:1px solid rgba(255,255,255,.06); color:white }
`
