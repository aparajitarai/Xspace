import React from 'react'

const IconBase = ({ size = 24, className = '', children }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {children}
  </svg>
)

export const Search = (props) => (
  <IconBase {...props}>
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </IconBase>
)

export const ChevronDown = (props) => (
  <IconBase {...props}>
    <polyline points="6 9 12 15 18 9" />
  </IconBase>
)

export const MapPin = (props) => (
  <IconBase {...props}>
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0Z" />
    <circle cx="12" cy="10" r="3" />
  </IconBase>
)

export const Phone = (props) => (
  <IconBase {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.22 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.38a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
  </IconBase>
)

export const Mail = (props) => (
  <IconBase {...props}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </IconBase>
)

export const ChevronLeft = (props) => (
  <IconBase {...props}>
    <polyline points="15 18 9 12 15 6" />
  </IconBase>
)

export const ChevronRight = (props) => (
  <IconBase {...props}>
    <polyline points="9 18 15 12 9 6" />
  </IconBase>
)

export const Star = (props) => (
  <IconBase {...props}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </IconBase>
)

export const Twitter = (props) => (
  <IconBase {...props}>
    <path d="M23 3s-2 .94-3.5 1.2c-.5-.5-1.5-1.2-2.5-1.2-2.2 0-4 1.8-4 4 0 .3 0 .5.1.8-3.3-.2-6.4-1.7-8.4-4-.4.7-.6 1.4-.6 2.2 0 1.4.7 2.7 1.9 3.4-.6 0-1.2-.2-1.7-.5v.1c0 2 1.4 3.7 3.3 4.1-.3.1-.7.1-1 .1-.2 0-.5 0-.7-.1.5 1.6 2 2.8 3.8 2.8-1.4 1.1-3.1 1.8-5 1.8H2c1.8 1.2 4 2 6.3 2 7.5 0 11.7-6.2 11.7-11.7V7c.8-.6 1.5-1.3 2-2.1Z" />
  </IconBase>
)

export const Linkedin = (props) => (
  <IconBase {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </IconBase>
)

export const Instagram = (props) => (
  <IconBase {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
    <circle cx="17.5" cy="6.5" r="0.5" />
  </IconBase>
)

export const Menu = (props) => (
  <IconBase {...props}>
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="18" x2="20" y2="18" />
  </IconBase>
)

export const X = (props) => (
  <IconBase {...props}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </IconBase>
)

export const Sun = (props) => (
  <IconBase {...props}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" />
    <path d="m19.07 4.93-1.41 1.41" />
  </IconBase>
)

export default {
  Search,
  ChevronDown,
  MapPin,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
  Star,
  Twitter,
  Linkedin,
  Instagram,
  Menu,
  X,
  Sun,
}
