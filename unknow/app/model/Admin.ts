import { Model,Table,Column } from 'sequelize-typescript'


@Table({

})
export default class Admin extends Model{
  @Column
  name!:string
  @Column({
    comment:'手机号码',
  })
  mobile!:string
  @Column
  email!:string
}