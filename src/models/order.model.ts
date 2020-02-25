import { Entity, model, property } from '@loopback/repository';

@model({
  settings: {
    foreignKeys: {
      fk_order_customer: {
        name: 'fk_order_customer',
        entity: 'Customer',
        entityKey: 'id_customer',
        foreignKey: 'id_customer',
      }
    }
  },
})
export class Order extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id_order?: number;

  @property({
    type: 'number',
    required: true,
  })
  id_customer: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;


  constructor(data?: Partial<Order>) {
    super(data);
  }
}

export interface OrderRelations {
  // describe navigational properties here
}

export type OrderWithRelations = Order & OrderRelations;
