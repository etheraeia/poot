export default {
  theme: {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./index.html"
    ],
    extend: {
      fontFamily: {
        aktiv: ['aktiv-grotesk', 'sans-serif'],
        plex: ['IBM Plex Mono', 'monospace'],
        ivypresto: ['ivyprestoW-display', 'serif'],
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
    },
  },
};