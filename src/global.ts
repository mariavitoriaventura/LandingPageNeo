
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root{
    --bg:#0b0b10;
    --surface:#0f1018;
    --ink:#e6f7ff;
    --muted:#b0baca;
    --primary:#a855f7;
    --primary-2:#06b6d4;
    --accent:#ff2d93;
  }
  *{box-sizing:border-box}
  html, body, #root {height:100%}
  body{
    margin:0;
    background: radial-gradient(1000px 400px at 80% 25%, rgba(168,85,247,.20), transparent 60%),
                radial-gradient(800px 300px at 20% 70%, rgba(6,182,212,.18), transparent 60%),
                var(--bg);
    color:var(--ink);
    font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji";
    letter-spacing:.2px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a { color: inherit; text-decoration: none}
  button { font: inherit; }
  .container{ max-width: 1120px; margin: 0 auto; padding: 0 24px; }
  .pill{
    display:inline-flex; align-items:center; gap:8px;
    height:40px; padding:0 18px; border-radius:999px; border:0;
    background: linear-gradient(90deg, var(--primary), var(--primary-2));
    color:white; box-shadow: 0 10px 30px rgba(168,85,247,.25);
    cursor:pointer;
  }
`
