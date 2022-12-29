import { Node } from '@babel/core';
import { ReactNode } from 'react';
import { ViewProps, ViewStyle } from 'react-native';
import { IEvent } from './IEvent';
import { IForm } from './IForm';
import { IHeader } from '../../organisms/CHeaader/IHeader';
import { IStyle } from './IStyle';

export interface IModal extends IStyle<ViewStyle> {
  form?: IForm;
  children?: Node | ReactNode;
  events?: IEvent;
  screenMode?: 'fullScreen' | 'bottom';
  backDropDontClose?: boolean;
  _iHeader?: IHeader;
}
