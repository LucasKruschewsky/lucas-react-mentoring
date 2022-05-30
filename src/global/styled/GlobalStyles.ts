import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   /* ---------- RESET CSS ---------- */
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

button {
  background-color: transparent;
  padding: 0;
  border: none;
  border-color: transparent;
}

input,
textarea,
select,
option {
  border: none;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
}
/* ---------- END OF RESET CSS ---------- */

/* ---------- CSS VARIABLES ------------- */

:root {
  /* Colors */
  --primary: 246, 82, 97;
  --secondary-light: 66, 66, 66;
  --secondary: 85, 85, 85;
  --secondary-dark: 35, 35, 35;
  --white: 255, 255, 255;

  /* Breakpoints */
  --xs: 420px;
  --sm: 600px;
  --md: 720px;
  --lg: 1024px;
  --xl: 1280px;

  /* Font Sizes */
  --title-1: 40px;
  --body-1: 20px;

  /* Offset Header */
  --offset-header: 4.5rem;
}

body {
  min-height: 100vh;
  background-color: rgb(var(--secondary-dark));
}

body,
textarea {
  font-family: Montserrat, Arial, Sans Serif;
}
/* ---------- END OF CSS VARIABLES ------ */
 `;
