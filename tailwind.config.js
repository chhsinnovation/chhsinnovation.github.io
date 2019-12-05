const _ = require('lodash');

module.exports = {
  theme: {
    extend: {
      spacing: {
        '72': '18rem',
        '80': '20rem',
        '84': '21rem',
        '96': '24rem',
        '128': '32rem',
        '192': '48rem',
      },
      maxWidth: {
        '7xl': '80rem',
        '8xl': '88rem',
        '9xl': '96rem'
      },
      zIndex: {
        '-10': '-10'
      },
      colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        blue: {
          100: "#E0F2FF",
          200: "#CFE8FC",
          300: "#AFD3F0",
          400: "#72AEDF",
          500: "#2A80C6",
          600: "#1E65A4",
          700: "#175692",
          800: "#114476",
          900: "#0C335F"
        },
        gold: {
          100: "#FFFBEA",
          200: "#FEF0BE",
          300: "#FAD66B",
          400: "#FCC54F",
          500: "#FBAD22",
          600: "#DD901D",
          700: "#CA6D16",
          800: "#B54E12",
          900: "#8D2B0B"
        },
        /*
        gray: {
          100: "#F5F7FA",
          200: "#E4E8EC",
          300: "#C9D1D9",
          400: "#98A5B3",
          500: "#6B7785",
          600: "#515F6C",
          700: "#3F4D5A",
          800: "#33404D",
          900: "#1F2933"
        },
        */
        red: {
          100: "#FFEEEE",
          200: "#FACDCD",
          300: "#F29B9B",
          400: "#E66A6A",
          500: "#CE2C2C",
          600: "#A61B1B",
          700: "#911111",
          800: "#760A0A",
          900: "#610404"
        },
        cyan: {
          100: "#E0FCFF",
          200: "#BEF8FD",
          300: "#87EAF2",
          400: "#54D1DB",
          500: "#31B8C4",
          600: "#14919B",
          700: "#0E7C86",
          800: "#0A6C74",
          900: "#044E54"
        },
        orange: {
          100: "#FFEFE6",
          200: "#FFD3BA",
          300: "#FAB389",
          400: "#EF8E58",
          500: "#DF6620",
          600: "#AB4E19",
          700: "#8C3D10",
          800: "#77340D",
          900: "#572508"
        },
        magenta: {
          100: "#F5E1F7",
          200: "#ECBDF2",
          300: "#CE80D9",
          400: "#BB61C7",
          500: "#AF45BA",
          600: "#90279C",
          700: "#7C1A87",
          800: "#671270",
          900: "#4E0754"
        },
        pink: {
          100: "#FFE0F0",
          200: "#FAB8D9",
          300: "#F191C1",
          400: "#E668A7",
          500: "#D63D89",
          600: "#AD2167",
          700: "#9B1B5A",
          800: "#781244",
          900: "#5C0B33"
        }
      },
    }
  },
  variants: {},
  plugins: [
    function({ addComponents }) {
      // Sticky note generator
      const colors = {
        yellow: {
          base: 'hsl(48, 100%, 59%)',
          glueStripe: 'hsl(48, 97%, 57%)',
          cornerFade: 'hsl(48, 100%, 74%)'
        },
        green: {
          base: 'hsl(120, 60%, 64%)',
          glueStripe: 'hsl(120, 58%, 62%)',
          cornerFade: 'hsl(120, 60%, 79%)'
        },
        orange: {
          base: 'hsl(31, 100%, 58%)',
          glueStripe: 'hsl(31, 97%, 56%)',
          cornerFade: 'hsl(31, 100%, 73%)'
        },
        pink: {
          base: 'hsl(328, 100%, 70%)',
          glueStripe: 'hsl(328, 97%, 68%)',
          cornerFade: 'hsl(328, 100%, 85%)'
        },
        blue: {
          base: 'hsl(210, 99%, 60%)',
          glueStripe: 'hsl(210, 96%, 58%)',
          cornerFade: 'hsl(210, 99%, 75%)'
        },
        purple: {
          base: 'hsl(301, 29%, 67%)',
          glueStripe: 'hsl(301, 26%, 65%)',
          cornerFade: 'hsl(328, 100%, 82%)'
        }
      };
      const peelAngles = [
        '135',
        '145',
        '155',
        '165',
        '175'
      ];
      const baseClass = {
        '.post-it': {
          'width': '16rem',
          'height': '16rem',
          'position': 'relative',
          'display': 'inline-block',
          'border': '1px solid #E8E8E8'
        }
      };
      let selectors = _.reduce(colors, function(accumulator, value, key) {
        // base color class
        accumulator[`.post-it-${key}`] = {
          'background': `linear-gradient(${value.glueStripe} 25%, ${value.base} 25%)`
        };
        accumulator[`.post-it-${key}-peel-r`] = {
          'border-bottom-right-radius': '3.75rem 0.3125rem',
          'background': `
            linear-gradient(135deg, rgba(0, 0, 0, 0) 81%, ${value.base} 81%, ${value.cornerFade} 100%),
            linear-gradient(${value.glueStripe} 25%, ${value.base} 25%)`
        };
        accumulator[`.post-it-${key}-peel-r:after, .post-it-${key}-peel-both:after`] = {
          'position': 'absolute',
          'display': 'inline-block',
          'width': '12rem',
          'height': '1.5rem',
          'z-index': '-10',   
          'content': '""',
          'right': '0',
          'bottom': '1.25rem',
          'background': 'rgba(0, 0, 0, 0.2)',
          'box-shadow': '0.125rem 0.9375rem 0.3125rem rgba(0, 0, 0, 0.40)',
          'transform': 'matrix(-1, -0.1, 0, 1, 0, 0)'
        };
        accumulator[`.post-it-${key}-peel-l`] = {
          'border-bottom-left-radius': '3.75rem 0.3125rem',
          'background': `
            linear-gradient(-135deg, rgba(0, 0, 0, 0) 81%, ${value.base} 81%, ${value.cornerFade} 100%),
            linear-gradient(${value.glueStripe} 25%, ${value.base} 25%)`
        };
        accumulator[`.post-it-${key}-peel-l:before, .post-it-${key}-peel-both:before`] = {
          'position': 'absolute',
          'display': 'inline-block',
          'width': '12rem',
          'height': '1.5rem',
          'z-index': '-10',   
          'content': '""',
          'left': '0',
          'bottom': '1.25rem',
          'background': 'rgba(0, 0, 0, 0.2)',
          'box-shadow': '-0.125rem 0.9375rem 0.3125rem rgba(0, 0, 0, 0.40)',
          'transform': 'matrix(-1, 0.1, 0, 1, 0, 0)'
        };
        accumulator[`.post-it-${key}-peel-both`] = {
          'border-bottom-left-radius': '3.75rem 0.3125rem',
          'border-bottom-right-radius': '3.75rem 0.3125rem',
          'background': `
            linear-gradient(135deg, rgba(0, 0, 0, 0) 81%, ${value.base} 81%, ${value.cornerFade} 100%),
            linear-gradient(-135deg, rgba(0, 0, 0, 0) 81%, ${value.base} 81%, ${value.cornerFade} 100%),
            linear-gradient(${value.glueStripe} 25%, ${value.base} 25%)`
        };
        
        return accumulator;
      }, baseClass);

      addComponents(selectors);
    },
    function({ addUtilities }) {
      let selectors = _.reduce(_.range(1, 11), function(accumulator, value){
        accumulator[`.rotate-${value}`] = {
          'transform': `rotate(${value}deg)`
        };
        accumulator[`.-rotate-${value}`] = {
          'transform': `rotate(-${value}deg)`
        };

        return accumulator;
      }, {});

      addUtilities(selectors, ['responsive', 'hover']);
    }
  ]
}