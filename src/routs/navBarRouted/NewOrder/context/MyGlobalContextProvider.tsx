import { FC, useState } from 'react';
import { GlobalContentType } from './GlobalContentType';
import MyGlobalContext from './MyGlobalContext';

const MyGlobalContextProvider: FC<{ children: JSX.Element }> = ({ children }) => {
  const [inRest, setInRest] = useState<boolean>(true);

  function inRestHandler(value: boolean) {
    setInRest(value);
  }
  const contextValue: GlobalContentType = {
    inRest,
    setInRest: inRestHandler,
  };
  return <MyGlobalContext.Provider value={contextValue}>{children}</MyGlobalContext.Provider>;
};

export default MyGlobalContextProvider;
