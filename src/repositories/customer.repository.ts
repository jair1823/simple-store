import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {Customer, CustomerRelations, Order} from '../models';
import {PostsqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {OrderRepository} from './order.repository';

export class CustomerRepository extends DefaultCrudRepository<
  Customer,
  typeof Customer.prototype.id_customer,
  CustomerRelations
> {

  public readonly orders: HasManyRepositoryFactory<Order, typeof Customer.prototype.id_customer>;

  constructor(
    @inject('datasources.postsql') dataSource: PostsqlDataSource, @repository.getter('OrderRepository') protected orderRepositoryGetter: Getter<OrderRepository>,
  ) {
    super(Customer, dataSource);
    this.orders = this.createHasManyRepositoryFactoryFor('orders', orderRepositoryGetter,);
    this.registerInclusionResolver('orders', this.orders.inclusionResolver);
  }
}
