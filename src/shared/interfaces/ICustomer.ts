import {IModel} from '@/shared/interfaces/IModel';
import {ITimestamp} from '@/shared/interfaces/IProject';

export interface ICustomer extends IModel{
  name: string;
  duration: string;
  startDate: ITimestamp;
  endDate: ITimestamp;
}
