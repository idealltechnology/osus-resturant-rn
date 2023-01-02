import { createContext } from 'react';
import { GlobalContentType } from './GlobalContentType';

const MyGlobalContext = createContext<GlobalContentType>({
  inRest: true,
  setInRest: () => {},
});
export default MyGlobalContext;
