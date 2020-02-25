import {DefaultCrudRepository} from '@loopback/repository';
import {Customer, CustomerRelations} from '../models';
import {PostsqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CustomerRepository extends DefaultCrudRepository<
  Customer,
  typeof Customer.prototype.id_customer,
  CustomerRelations
> {
  constructor(
    @inject('datasources.postsql') dataSource: PostsqlDataSource,
  ) {
    super(Customer, dataSource);
  }
}
