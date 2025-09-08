
import styled from 'styled-components'

export const Wrapper = styled.header`
 position: fixed;       /* ← em vez de sticky */
  top: 0; left: 0; right: 0;
  z-index: 9999;         /* bem acima de tudo */
  isolation: isolate;    /* novo stacking context p/ evitar ser coberto */
  background: linear-gradient(180deg, rgba(11,11,16,.75), rgba(11,11,16,.2) 90%, transparent);
  backdrop-filter: blur(8px);
`

export const Bar = styled.div`
  height:72px; display:flex; align-items:center; justify-content:space-between;
`

export const Logo = styled.div`
  font-weight: 900; letter-spacing:.5px; font-size:20px;
  span{ color: var(--primary-2)}
`
export const Nav = styled.nav`
  display: none; gap: 24px; color: var(--muted);

  a {
    transition: .2s color;
    &.active {
      color: #ec4899; /* rosa neon */
      font-weight: 600;
    }
  }
  a:hover { color: white }
  @media (min-width: 880px){ display:flex }
`


export const Contact = styled.button.attrs({ className:'pill'})``
