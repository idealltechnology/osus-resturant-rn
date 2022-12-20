import { Dark } from './colorThemes/Dark';
import { Light } from './colorThemes/Light';
import { IColors } from './interfaceColor/IColors';

let TypeTheme = false;

const ColorSystem: IColors = TypeTheme ? Light : Dark;

ColorSystem.White = '#ffffff';
ColorSystem.Black = '#000000';
ColorSystem.F_Gray = (x: number) => String(`rgba(0,0,0,${x / 100})`);

export default ColorSystem;
