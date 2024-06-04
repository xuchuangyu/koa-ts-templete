import { Model,Table,Column } from 'sequelize-typescript'

@Table({
  tableName:'user',
})
export default class User extends Model{
  @Column
  nickname!:string
  @Column
  account!:string
  @Column
  email!:string
}