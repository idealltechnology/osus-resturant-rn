import { useGlobalContext } from '../../context';
import Invoicer from './Invoicer';
import TableSelector from './TableSelector';

export default ({ select }: { select?: (item: number) => void }) => {
  const { inRest } = useGlobalContext();

  return inRest ? (
    <TableSelector
      select={(i) => {
        select && select(i);
      }}
    />
  ) : (
    <Invoicer />
  );
};
