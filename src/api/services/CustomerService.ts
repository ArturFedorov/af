import {db} from '@/api/db';
import {Collections} from '@/api/Collections';

export class CustomerService {
  static getAllCustomers() {
    return db.collection(Collections.CUSTOMERS).orderBy('startDate', 'desc');
  }
}
