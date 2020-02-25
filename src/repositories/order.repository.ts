import {DefaultCrudRepository} from '@loopback/repository';
import {Order, OrderRelations} from '../models';
import {PostsqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class OrderRepository extends DefaultCrudRepository<
  Order,
  typeof Order.prototype.id_order,
  OrderRelations
> {
  constructor(
    @inject('datasources.postsql') dataSource: PostsqlDataSource,
  ) {
    super(Order, dataSource);
  }
}
