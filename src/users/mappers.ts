import get from 'lodash/get';
import type { IEntity } from './types';

export const User = (item?: any): IEntity.User => ({
  id: get(item, 'id') || '',
  name: get(item, 'name') || '',
  username: get(item, 'username'),
  email: get(item, 'email'),
  city: get(item, 'address.city'),
  zipcode: get(item, 'address.zipcode'),
  website: get(item, 'website'),
  company: get(item, 'company.name')
});
