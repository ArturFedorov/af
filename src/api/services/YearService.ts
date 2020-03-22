import {db} from '@/api/db';
import {Collections} from '@/api/Collections';

export class YearService {
  static getAllYears(){
    return db.collection(Collections.YEARS).orderBy('year', 'desc');
  }

  static getYearById(id: string) {
    return db.collection(Collections.YEARS).doc(id).get();
  }
}
