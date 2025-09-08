
import styled, { keyframes } from 'styled-components'

const floaty = keyframes` from{transform:translateY(0)} to{transform:translateY(-12px)} `

export const Section = styled.section`
  padding: 72px 0 48px;
  background:
    radial-gradient(600px 180px at 60% 18%, rgba(6,182,212,.30), transparent 60%),
    radial-gradient(400px 150px at 30% 28%, rgba(168,85,247,.35), transparent 60%);
`

export const Hgroup = styled.div`
  margin-top: 56px;
  h1{
    font-size: clamp(36px, 7vw, 64px);
    line-height: 1.05;
    letter-spacing: .6px;
    margin: 0 0 12px;
    font-weight: 900;
    display:flex; flex-direction:column; gap:6px;
    text-shadow: 0 6px 40px rgba(0,0,0,.45);
  }
  h1 span:nth-child(3){
    background: linear-gradient(90deg, var(--primary-2), #8dd3ff);
    -webkit-background-clip: text; background-clip: text;
    color: transparent;
    filter: drop-shadow(0 0 20px rgba(13,148,136,.25));
  }
  p{ color:var(--muted); font-size:18px; margin:0 0 32px}
`

export const CTA = styled.div`
  background: linear-gradient(
    135deg,
    rgba(236, 72, 154, 0.59),
    rgba(59, 131, 246, 0.47)
  );

  border-radius: 18px;
  padding: 18px;
  backdrop-filter: blur(12px);
  box-shadow: 0 8px 30px rgba(0,0,0,0.4),
              0 0 25px rgba(236, 72, 153, 0.3),
              0 0 35px rgba(59, 130, 246, 0.25);
  display:flex; flex-direction:column; gap:14px;

  small{ color:#f3f4f6 }
`


export const Form = styled.form`
  display:grid; grid-template-columns: 1fr 1fr auto; gap:12px;
  input{
    height:40px; border-radius:999px; border:1px solid rgba(255,255,255,.08);
    background:#0e0f16; color:white; padding:0 14px; outline:none;
  }
  @media (max-width:720px){
    grid-template-columns: 1fr; button{ width:100% }
  }
`
