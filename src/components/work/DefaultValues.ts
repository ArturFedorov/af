import {IProject, ITimestamp} from '@/shared/interfaces/IProject';
import {IRole} from '@/shared/interfaces/IRole';
import {ICustomer} from '@/shared/interfaces/ICustomer';
import {ITechnology} from '@/shared/interfaces/ITechnology';

export class DefaultValues {
  static roles = [
    { name: 'Team lead' },
    { name: 'Front–End developer' },
    { name: 'Designer' }
  ] as IRole[]

  static projects = [{
    name: 'Ice 9',
    roles: [DefaultValues.roles[1], DefaultValues.roles[2]] as IRole[],
    description: 'Blockchain based anomaly detection system.',
    startDate: {seconds: 1534021200} as ITimestamp
  },{
    name: 'Iot Solutions',
    roles: [DefaultValues.roles[0], DefaultValues.roles[1]] as IRole[],
    description: 'Blockchain based anomaly detection system.',
    startDate: {seconds: 1522962000} as ITimestamp
  }
  ] as IProject[];

  static customers = [{
    name: 'Dainmler AG',
    startDate: {seconds: 1534021200} as ITimestamp
  }, {
    name: 'BMW AG',
    startDate: {seconds: 1522962000} as ITimestamp
  }] as ICustomer[]

  static technologies = [{
    id: '1',
    name: 'Javascript',
    rating: 5
  }, {
    id: '2',
    name: 'Typescript',
    rating: 5
  },{
    id: '3',
    name: 'Nodejs',
    rating: 3
  },{
    id: '4',
    name: 'Design',
    rating: 4
  }, {
      id: '5',
      name: 'Vue js',
      rating: 5
    }] as ITechnology[]
}
