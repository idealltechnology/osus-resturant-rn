import { IButton } from '../../../../../../components/molecules/CButton/IButton';

export interface Model {
  selected: number;
  id: number;
  btn: Partial<IButton>;
}
