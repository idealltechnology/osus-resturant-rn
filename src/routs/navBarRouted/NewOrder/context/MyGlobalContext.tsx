import { createContext } from 'react';
import { GlobalContentType } from './GlobalContentType';

const MyGlobalContext = createContext<GlobalContentType>({
  inRest: false,
  setInRest: () => {},
});
export default MyGlobalContext;
