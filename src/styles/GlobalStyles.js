import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --color-background: #121212;
    --color-primary: #8A2BE2;
    --color-accent: #00FFFF;
    --color-text-primary: #FFFFFF;
    --color-text-secondary: #AAAAAA;
    --color-card-background: #1E1E1E;
    --color-border: #333333;
    --transition-speed: 0.3s;
    --font-weight-normal: 300;
    --font-weight-medium: 400;
    --font-weight-bold: 500;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: var(--color-background);
    color: var(--color-text-primary);
    line-height: 1.6;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 1rem;
    font-weight: var(--font-weight-bold);
  }

  h1 {
    font-size: 2.8rem;
    color: var(--color-text-primary);
  }

  h2 {
    font-size: 2.5rem;
    color: var(--color-text-primary);
    position: relative;
    display: inline-block;
    margin-bottom: 2rem;
    
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -10px;
      width: 60px;
      height: 4px;
      background: var(--color-primary);
    }
  }

  p {
    margin-bottom: 1rem;
    color: var(--color-text-secondary);
  }

  a {
    color: var(--color-accent);
    text-decoration: none;
    transition: color var(--transition-speed);
    
    &:hover {
      color: var(--color-primary);
    }
  }

  button {
    cursor: pointer;
    background: var(--color-primary);
    color: var(--color-text-primary);
    border: none;
    padding: 0.8rem 1.5rem;
    border-radius: 4px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    transition: all var(--transition-speed);
    
    &:hover {
      background: var(--color-accent);
      color: #000;
      transform: translateY(-2px);
    }
  }

  section {
    padding: 5rem 0;
  }

  .container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  code {
    font-family: 'Fira Code', monospace;
    background: var(--color-card-background);
    padding: 0.2rem 0.4rem;
    border-radius: 3px;
  }

  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--color-background);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--color-primary);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-accent);
  }

  /* Animations */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .fade-in {
    animation: fadeIn 0.6s ease-out forwards;
  }
`;

export default GlobalStyles;
