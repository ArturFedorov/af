import {IModel} from '@/shared/interfaces/IModel';
import {ITimestamp} from '@/shared/interfaces/IProject';

export interface IRole extends IModel {
  name: string;
  duration: string;
  startDate: ITimestamp;
  endDate: ITimestamp;
}
