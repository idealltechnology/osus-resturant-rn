import ColorSystem from '../../../configs/color/ColorSystem';

const Xml = {
  atSign(color: string) {
    return `
    <svg id="Group_1789" data-name="Group 1789" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <path id="Path_1570" data-name="Path 1570" d="M0,0H24V24H0Z" fill="none"/>
  <circle id="Ellipse_53" data-name="Ellipse 53" cx="4" cy="4" r="4" transform="translate(8.684 8)" fill="none" stroke="#c5c5c5" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
  <path id="Path_1571" data-name="Path 1571" d="M16,12v1.5a2.5,2.5,0,0,0,5,0V12a9,9,0,1,0-5.5,8.28" fill="none" stroke="#c5c5c5" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
</svg>
`;
  },

  dontShowPass() {
    return `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="128.000000pt" height="128.000000pt" viewBox="0 0 128.000000 128.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M1067 1142 l-138 -138 -66 32 c-224 109 -462 47 -687 -179 -45 -45
-103 -112 -130 -149 l-48 -68 48 -67 c26 -38 85 -106 131 -152 l84 -85 -131
-131 -130 -131 38 -37 38 -37 139 140 c137 137 140 139 163 124 13 -9 54 -27
90 -41 57 -22 83 -26 172 -27 117 0 186 20 297 85 72 43 247 215 302 297 l42
63 -47 67 c-27 37 -85 105 -131 152 l-83 85 130 130 130 131 -38 37 -38 37
-137 -138z m-271 -186 l58 -27 -39 -39 -38 -39 -31 17 c-44 23 -160 23 -207
-1 -48 -24 -96 -72 -122 -121 -27 -53 -29 -156 -3 -205 l18 -34 -49 -48 -48
-48 -51 44 c-28 25 -77 76 -109 115 l-57 70 58 71 c103 126 219 213 344 257
87 31 193 26 276 -12z m245 -173 c25 -26 63 -69 84 -96 l37 -47 -42 -55 c-55
-71 -159 -168 -226 -211 -124 -80 -243 -101 -360 -66 -38 12 -77 27 -87 34
-16 12 -15 16 21 51 38 37 39 37 69 22 44 -22 121 -29 170 -16 140 38 223 208
164 336 l-19 40 46 47 45 47 26 -19 c14 -10 47 -40 72 -67z m-354 -1 c9 -5
-19 -39 -87 -107 l-99 -98 -6 36 c-17 88 57 175 150 176 17 0 36 -3 42 -7z
m103 -133 c0 -105 -89 -179 -186 -155 -27 7 -26 9 71 106 54 54 102 97 107 94
4 -3 8 -23 8 -45z"/>
</g>
</svg>
`;
  },
  showPass() {
    return `
  <svg id="Group_1792" data-name="Group 1792" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <path id="Path_1572" data-name="Path 1572" d="M0,0H24V24H0Z" fill="none"/>
  <circle id="Ellipse_54" data-name="Ellipse 54" cx="2" cy="2" r="2" transform="translate(10.684 10)" fill="none" stroke="#c5c5c5" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
  <path id="Path_1573" data-name="Path 1573" d="M22,12q-4,7-10,7T2,12Q6,5,12,5t10,7" fill="none" stroke="#c5c5c5" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
</svg>
`;
  },
  lang() {
    return `
  <?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="980.000000pt" height="926.000000pt" viewBox="0 0 980.000000 926.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,926.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M3700 9244 c-19 -2 -84 -9 -145 -15 -452 -45 -949 -194 -1378 -411
-965 -489 -1665 -1314 -1991 -2348 -79 -249 -127 -476 -162 -770 -22 -177 -25
-655 -6 -825 67 -583 228 -1089 497 -1561 649 -1135 1774 -1862 3090 -1995
154 -16 566 -16 715 -1 490 51 902 161 1333 356 l161 73 70 -101 c86 -126 138
-194 228 -299 l71 -82 -6 -105 c-8 -129 -25 -230 -82 -475 -74 -321 -79 -379
-37 -462 29 -56 104 -125 189 -174 l76 -43 66 35 c36 19 161 85 277 146 352
186 619 303 894 391 121 38 231 66 615 152 220 50 298 76 443 145 633 303
1091 982 1172 1737 56 525 -123 1108 -469 1532 -143 175 -369 370 -565 488
-207 126 -460 221 -746 282 l-75 16 -1 343 c0 294 -3 365 -22 507 -105 784
-409 1475 -910 2075 -120 143 -395 411 -542 529 -585 467 -1238 743 -1990 842
-118 15 -675 29 -770 18z m623 -632 c70 -31 151 -97 267 -219 162 -169 265
-323 403 -599 91 -184 114 -241 100 -255 -14 -14 -238 -51 -473 -79 -232 -28
-760 -38 -1027 -21 -314 21 -680 72 -714 100 -20 16 -19 17 26 121 170 388
434 767 630 905 106 74 103 74 465 71 257 -2 278 -4 323 -24z m-1840 -409
c-31 -65 -96 -203 -145 -308 -49 -104 -93 -194 -98 -199 -20 -20 -415 117
-415 144 0 18 167 149 326 256 97 64 372 224 386 224 1 0 -23 -53 -54 -117z
m3030 61 c90 -45 348 -202 439 -267 132 -95 185 -143 172 -156 -15 -16 -178
-85 -290 -124 -69 -24 -98 -29 -110 -22 -9 6 -27 40 -41 75 -13 36 -73 166
-133 289 -61 123 -110 225 -110 227 0 10 25 2 73 -22z m1191 -1008 c271 -392
414 -707 526 -1156 43 -171 75 -336 85 -447 l8 -73 -607 0 -606 0 0 23 c0 51
-21 323 -36 467 -33 331 -113 815 -159 964 -8 28 -12 53 -8 57 5 3 69 28 143
54 178 63 364 138 474 192 49 23 91 43 92 43 2 0 41 -56 88 -124z m-5162 30
c95 -41 238 -97 317 -125 180 -65 204 -77 196 -100 -31 -98 -126 -629 -155
-861 -18 -152 -50 -526 -50 -594 l0 -28 -587 5 c-324 2 -598 8 -610 12 -30 9
-29 26 2 212 66 390 191 758 366 1077 132 241 297 476 335 476 6 0 90 -33 186
-74z m1371 -386 c572 -93 1059 -111 1642 -60 260 22 527 55 628 76 107 22 124
20 136 -18 29 -90 95 -476 130 -758 18 -146 26 -233 46 -492 l5 -68 -1520 0
-1521 0 6 73 c20 271 29 363 51 527 43 328 119 714 147 748 6 8 21 11 36 8 14
-3 111 -19 214 -36z m-1059 -2067 c18 -346 107 -950 186 -1253 17 -68 18 -76
3 -92 -8 -9 -81 -43 -162 -74 -80 -31 -234 -95 -341 -141 l-195 -85 -25 30
c-35 42 -193 293 -275 436 -201 350 -372 870 -411 1249 l-7 67 610 0 611 0 6
-137z m3642 80 c-3 -32 -11 -116 -17 -188 -27 -340 -129 -968 -171 -1060 -17
-38 -27 -38 -408 19 -286 42 -438 49 -1042 43 -593 -5 -698 -12 -993 -64 -206
-36 -196 -37 -217 19 -61 162 -178 944 -178 1186 l0 102 1515 0 1516 0 -5 -57z
m1815 40 c17 -17 -25 -34 -191 -78 -371 -99 -655 -265 -986 -577 -47 -44 -87
-78 -89 -76 -1 1 1 28 6 58 8 54 41 414 55 598 l7 93 593 -3 c452 -2 596 -6
605 -15z m638 -648 c466 -74 904 -422 1101 -875 141 -325 171 -619 95 -937
-91 -383 -361 -771 -687 -991 -144 -97 -219 -126 -535 -202 -326 -79 -450
-125 -971 -360 -101 -45 -185 -81 -187 -79 -2 2 1 24 6 49 6 25 13 137 16 250
8 305 -4 340 -186 539 -129 141 -164 184 -229 281 -103 155 -184 355 -218 535
-24 133 -15 544 14 661 60 236 204 498 372 677 208 222 455 363 792 453 88 23
104 24 303 20 124 -3 252 -11 314 -21z m-3532 -1201 c335 -24 625 -63 660 -89
14 -10 12 -21 -22 -95 -82 -181 -244 -468 -324 -575 -124 -165 -304 -355 -373
-392 -29 -16 -69 -18 -367 -21 l-334 -3 -71 47 c-177 117 -369 351 -539 658
-63 113 -177 355 -177 375 0 21 232 58 545 86 414 37 601 39 1002 9z m-2169
-236 c6 -7 46 -92 89 -188 44 -96 112 -235 151 -309 40 -74 71 -136 69 -137
-8 -9 -306 163 -452 261 -199 133 -288 202 -282 218 4 15 372 165 408 167 4 0
11 -6 17 -12z m3311 -463 c9 -60 8 -72 -6 -87 -17 -19 -142 -83 -148 -76 -2 2
27 58 63 125 37 67 70 119 74 115 3 -4 11 -38 17 -77z"/>
</g>
</svg>
`;
  },
  downArrow(color: string) {
    return `<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.12656 0.995625L6.00656 4.87563L9.88656 0.995625C10.2766 0.605625 10.9066 0.605625 11.2966 0.995625C11.6866 1.38563 11.6866 2.01562 11.2966 2.40562L6.70656 6.99563C6.31656 7.38562 5.68656 7.38562 5.29656 6.99563L0.706562 2.40562C0.316563 2.01562 0.316563 1.38563 0.706562 0.995625C1.09656 0.615625 1.73656 0.605625 2.12656 0.995625Z" fill=${colorer(
          color,
        )}/>
        </svg>
        `;
  },
  upOneArrow(color: string) {
    return `<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.12656 6.99563L6.00656 3.11562L9.88656 6.99563C10.2766 7.38562 10.9066 7.38562 11.2966 6.99563C11.6866 6.60563 11.6866 5.97563 11.2966 5.58563L6.70656 0.995625C6.31656 0.605625 5.68656 0.605625 5.29656 0.995625L0.706562 5.58563C0.316563 5.97563 0.316563 6.60563 0.706562 6.99563C1.09656 7.37563 1.73656 7.38562 2.12656 6.99563Z" fill=${colorer(
          color,
        )}/>
        </svg>
                `;
  },
  newOrder(color: string) {
    return `
        <svg id="Group_49975" data-name="Group 49975" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <path id="Path_119952" data-name="Path 119952" d="M0,0H24V24H0Z" fill="none"/>
  <circle id="Ellipse_233" data-name="Ellipse 233" cx="9" cy="9" r="9" transform="translate(3 3)" fill="none" stroke=${colorer(
    color,
  )} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
  <line id="Line_618" data-name="Line 618" x2="6" transform="translate(9 12)" fill="none" stroke=${colorer(
    color,
  )} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
  <line id="Line_619" data-name="Line 619" y2="6" transform="translate(12 9)" fill="none" stroke=${colorer(
    color,
  )} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
</svg>
`;
  },
  reservation(color: string) {
    return `<svg id="Group_49983" data-name="Group 49983" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <path id="Path_119953" data-name="Path 119953" d="M0,0H24V24H0Z" fill="none"/>
  <path id="Path_119954" data-name="Path 119954" d="M11.8,21H5a2,2,0,0,1-2-2V7A2,2,0,0,1,5,5H17a2,2,0,0,1,2,2v4" fill="none" stroke=${colorer(
    color,
  )} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
  <path id="Path_119955" data-name="Path 119955" d="M18,14v4h4" fill="none" stroke=${colorer(color)} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
  <circle id="Ellipse_234" data-name="Ellipse 234" cx="4" cy="4" r="4" transform="translate(14 14)" fill="none" stroke=${colorer(
    color,
  )} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
  <path id="Path_119956" data-name="Path 119956" d="M15,3V7" fill="none" stroke=${colorer(color)} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
  <path id="Path_119957" data-name="Path 119957" d="M7,3V7" fill="none" stroke=${colorer(color)} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
  <path id="Path_119958" data-name="Path 119958" d="M3,11H19" fill="none" stroke=${colorer(color)} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
</svg>
`;
  },
  orderList(color?: string) {
    return `<svg id="Group_49984" data-name="Group 49984" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <path id="Path_119959" data-name="Path 119959" d="M0,0H24V24H0Z" fill="none"/>
  <rect id="Rectangle_17772" data-name="Rectangle 17772" width="16" height="16" rx="2" transform="translate(4 4)" fill="none" stroke=${colorer(
    color,
  )} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
  <line id="Line_620" data-name="Line 620" x2="16" transform="translate(4 12)" fill="none" stroke=${colorer(
    color,
  )} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
  <line id="Line_621" data-name="Line 621" y2="16" transform="translate(12 4)" fill="none" stroke=${colorer(
    color,
  )} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
</svg>
`;
  },

  transaction(color: string) {
    return `<svg id="Group_49985" data-name="Group 49985" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <path id="Path_119960" data-name="Path 119960" d="M0,0H24V24H0Z" fill="none"/>
  <path id="Path_119961" data-name="Path 119961" d="M6.141,4.163l12,1.714a1,1,0,0,1,.859.99V17.133a1,1,0,0,1-.859.99l-12,1.714A1,1,0,0,1,5,18.847V5.153a1,1,0,0,1,1.141-.99Z" fill="none" stroke=${colorer(
    color,
  )} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
</svg>
`;
  },
  products(color: string) {
    return `<svg id="Group_49986" data-name="Group 49986" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <path id="Path_119962" data-name="Path 119962" d="M0,0H24V24H0Z" fill="none"/>
  <line id="Line_622" data-name="Line 622" x2="18" transform="translate(3 21)" fill="none" stroke=${colorer(
    color,
  )} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
  <path id="Path_119963" data-name="Path 119963" d="M3,7V8A3,3,0,0,0,9,8V7M9,8a3,3,0,0,0,6,0V7m0,1a3,3,0,0,0,6,0V7H3L5,3H19l2,4" fill="none" stroke=${colorer(
    color,
  )} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
  <line id="Line_623" data-name="Line 623" y1="10.15" transform="translate(5 10.85)" fill="none" stroke=${colorer(
    color,
  )} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
  <line id="Line_624" data-name="Line 624" y1="10.15" transform="translate(19 10.85)" fill="none" stroke=${colorer(
    color,
  )} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
  <path id="Path_119964" data-name="Path 119964" d="M9,21V17a2,2,0,0,1,2-2h2a2,2,0,0,1,2,2v4" fill="none" stroke=${colorer(
    color,
  )} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
</svg>
`;
  },

  magnifier(color: string) {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="17.023" height="17.023" viewBox="0 0 17.023 17.023">
  <path id="Path_57" data-name="Path 57" d="M17.609,17.609l-4.87-4.87m1.623-4.058A5.681,5.681,0,1,1,8.681,3,5.681,5.681,0,0,1,14.363,8.681Z" transform="translate(-2 -2)" fill="none" stroke="#d9d9d9" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
</svg>
`;
  },
  clearInputText() {
    return `
       <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M7.00001 0.333252C3.31334 0.333252 0.333344 3.31325 0.333344 6.99992C0.333344 10.6866 3.31334 13.6666 7.00001 13.6666C10.6867 13.6666 13.6667 10.6866 13.6667 6.99992C13.6667 3.31325 10.6867 0.333252 7.00001 0.333252ZM9.86668 9.86658C9.60668 10.1266 9.18668 10.1266 8.92668 9.86658L7.00001 7.93992L5.07334 9.86658C4.81334 10.1266 4.39334 10.1266 4.13334 9.86658C3.87334 9.60659 3.87334 9.18659 4.13334 8.92659L6.06001 6.99992L4.13334 5.07325C3.87334 4.81325 3.87334 4.39325 4.13334 4.13325C4.39334 3.87325 4.81334 3.87325 5.07334 4.13325L7.00001 6.05992L8.92668 4.13325C9.18668 3.87325 9.60668 3.87325 9.86668 4.13325C10.1267 4.39325 10.1267 4.81325 9.86668 5.07325L7.94001 6.99992L9.86668 8.92659C10.12 9.17992 10.12 9.60659 9.86668 9.86658Z" fill="#db1818"/>
       </svg>
       
    `;
  },

  lineArrowLeft(color: string) {
    return `<svg id="Group_49706" data-name="Group 49706" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <path id="Path_119943" data-name="Path 119943" d="M0,0H24V24H0Z" fill="none"/>
  <line id="Line_598" data-name="Line 598" x2="14" transform="translate(5 12)" fill="none" stroke="#25282b" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
  <line id="Line_599" data-name="Line 599" x2="6" y2="6" transform="translate(5 12)" fill="none" stroke="#25282b" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
  <line id="Line_600" data-name="Line 600" y1="6" x2="6" transform="translate(5 6)" fill="none" stroke="#25282b" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
</svg>
`;
  },
  hello() {
    return `<svg id="hi" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <g id="Group_44963" data-name="Group 44963" transform="translate(0 9.998)">
    <path id="Path_174" data-name="Path 174" d="M441.1,235.438l-.772-.225a9.72,9.72,0,0,0,0-5.416l.772-.226a10.524,10.524,0,0,1,0,5.866Z" transform="translate(-419.121 -228.765)" fill="#2460a3"/>
    <path id="Path_175" data-name="Path 175" d="M48.418,235.631a10.524,10.524,0,0,1,0-5.866l.772.225a9.719,9.719,0,0,0,0,5.415Z" transform="translate(-46.391 -228.948)" fill="#2460a3"/>
    <path id="Path_176" data-name="Path 176" d="M469.9,220.6l-.773-.221a11.334,11.334,0,0,0-.119-6.6l.765-.249A12.138,12.138,0,0,1,469.9,220.6Z" transform="translate(-446.362 -213.522)" fill="#2460a3"/>
    <path id="Path_177" data-name="Path 177" d="M16.465,220.594a12.138,12.138,0,0,1,.127-7.074l.765.249a11.334,11.334,0,0,0-.119,6.6Z" transform="translate(-16 -213.52)" fill="#2460a3"/>
  </g>
  <path id="Path_178" data-name="Path 178" d="M119.516,169.7l-.349-.352V164.32a1.4,1.4,0,1,0-2.791,0v3.017l-5.582-5.632a1.121,1.121,0,0,0-1.595,0,1.145,1.145,0,0,0,0,1.609l-.8-.8a1.121,1.121,0,0,0-1.595,0,1.145,1.145,0,0,0,0,1.609l.8.8a1.121,1.121,0,0,0-1.595,0,1.145,1.145,0,0,0,0,1.609l1.2,1.21a1.125,1.125,0,0,0-1.6,0,1.15,1.15,0,0,0-.007,1.609l7.136,7.2a2.884,2.884,0,0,0,4.09-.013l2.712-2.733a2.848,2.848,0,0,0,.824-2.006v-.03A2.931,2.931,0,0,0,119.516,169.7Z" transform="translate(-100.788 -153.394)" fill="#faca26"/>
  <path id="Path_179" data-name="Path 179" d="M119.551,300.993l-2.712,2.733a2.884,2.884,0,0,1-4.089.013l-7.136-7.2a1.138,1.138,0,0,1-.252-.4,1.149,1.149,0,0,0,.252,1.2l7.136,7.2a2.884,2.884,0,0,0,4.09-.013l2.712-2.733a2.848,2.848,0,0,0,.824-2.006v-.03a2.975,2.975,0,0,0-.026-.391A2.844,2.844,0,0,1,119.551,300.993Z" transform="translate(-100.799 -281.387)" fill="#b28a00"/>
  <path id="Path_180" data-name="Path 180" d="M236.749,35.517,237.983,35l1.121.725L239,34.4l1.036-.842-1.3-.31L238.254,32l-.7,1.14-1.334.072.869,1.015Z" transform="translate(-225.224 -32)" fill="#a4acb5"/>
  <path id="Path_181" data-name="Path 181" d="M0,0H.8V2.051H0Z" transform="matrix(0.981, -0.196, 0.196, 0.981, 12.009, 5.254)" fill="#2460a3"/>
  <path id="Path_182" data-name="Path 182" d="M0,0H2.447V.8H0Z" transform="translate(13.592 8.392) rotate(-80.557)" fill="#2460a3"/>
  <path id="Path_183" data-name="Path 183" d="M111.933,177.706c-.023.023-.044.048-.065.072a1.134,1.134,0,0,1,.87.33l4.827,4.827-1.006,1.006-3.821-3.821a1.138,1.138,0,0,0-1.609,0c-.023.023-.044.048-.065.072a1.134,1.134,0,0,1,.87.33l4.023,4.023-1.006,1.006-2.611-2.611a1.143,1.143,0,0,0-1.616,0c-.023.023-.044.047-.064.071a1.138,1.138,0,0,1,.875.331l3.416,3.416,3.821-3.821-5.229-5.229A1.138,1.138,0,0,0,111.933,177.706Z" transform="translate(-105.94 -169.243)" fill="#f6e597"/>
  <path id="Path_184" data-name="Path 184" d="M190.8,168.946V164.32a1.408,1.408,0,0,1,1.012-1.351,1.408,1.408,0,0,0-1.8,1.351v3.017l-5.632-5.632a1.138,1.138,0,0,0-1.609,0c-.023.023-.044.048-.065.072a1.134,1.134,0,0,1,.87.33l6.436,6.436v.4l-1.017,1.017a1.975,1.975,0,0,0,0,2.793l1.828,1.814.4-.4-1.433-1.419a1.975,1.975,0,0,1,0-2.793Z" transform="translate(-174.393 -153.394)" fill="#f6e597"/>
</svg>
`;
  },
};
export default Xml;
function colorer(color?: string) {
  if (color) {
    return color;
  } else {
    return ColorSystem.BrandColor;
  }
}
