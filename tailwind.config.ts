import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
  			base: {  
  				'0': '#FFFFFF',
  				'50': '#F5F7FA',
  				'100': '#F3F5F8',
  				'200': '#E0E4EA',
  				'300': '#CACFD8',
  				'400': '#99A0AE',
  				'500': '#717784',
  				'600': '#525866',
  				'700': '#28303B',
  				'800': '#232530',
  				'900': '#191B25',
  				'950': '#0E121B'
  			},
  			blue: {
  				'50': '#EBF1FF',
  				'500': '#335CFF',
  				'700': '#2547D0'
  			},
  			green: {
  				'100': '#D1FBE9',
  				'500': '#21C16B'
  			},
  			red: {
  				'100': '#FFDD58',
  				'500': '#FB3748'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		boxShadow: {
  			'neutral-400': '0px 0px 0px 4px var(--colors-neutral-400)',
  			'base-white': '0px 0px 0px 2px var(--colors-base-white)',
  			'sm-light': '0px 1px 2px 0px #0A0D1408',
  			card: '0px 8px 12px 0px #F0F0F099'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

