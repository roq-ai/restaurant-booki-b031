import { RestaurantInterface } from 'interfaces/restaurant';
import { GetQueryInterface } from 'interfaces';

export interface StaffInterface {
  id?: string;
  name: string;
  position: string;
  working_hours: string;
  restaurant_id: string;
  created_at?: any;
  updated_at?: any;

  restaurant?: RestaurantInterface;
  _count?: {};
}

export interface StaffGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  position?: string;
  working_hours?: string;
  restaurant_id?: string;
}
