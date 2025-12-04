import React from 'react'

const GlobalStyles = () => (
  <style>
    {`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap');
      
      body {
        font-family: 'Inter', sans-serif;
        background-color: #f8fafc;
      }
      h1, h2, h3, h4, .serif-font {
        font-family: 'Playfair Display', serif;
      }
      .glass-panel {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
      }
      .glass-card-dark {
        background: rgba(15, 23, 42, 0.6);
        backdrop-filter: blur(12px);
        border: 1px solid rgba(255, 255, 255, 0.05);
      }
      /* Custom scrollbar */
      ::-webkit-scrollbar {
        width: 8px;
      }
      ::-webkit-scrollbar-track {
        background: #0B1120;
      }
      ::-webkit-scrollbar-thumb {
        background: #334155;
        border-radius: 4px;
      }
    `}
  </style>
)

export default GlobalStyles
