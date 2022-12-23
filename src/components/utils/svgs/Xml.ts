import ColorSystem from '../../../configs/color/ColorSystem';

const Xml = {
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
};
export default Xml;
function colorer(color?: string) {
  if (color) {
    return color;
  } else {
    return ColorSystem.BrandColor;
  }
}
