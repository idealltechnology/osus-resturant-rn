import { useGlobalContext } from '../../context';
import Invoicer from './Invoicer';
import TableSelector from './TableSelector';

export default () => {
  const { inRest } = useGlobalContext();

  return inRest ? <TableSelector /> : <Invoicer />;
};
