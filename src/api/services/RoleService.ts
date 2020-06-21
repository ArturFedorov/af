import {db} from '@/api/db';
import {Collections} from '@/api/Collections';

export class RoleService {
  static getAllRoles() {
    return db.collection(Collections.ROLES).orderBy('startDate', 'desc');
  }
}
