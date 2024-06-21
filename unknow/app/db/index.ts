import path from 'path'
import { Sequelize } from 'sequelize-typescript'
import config from '../config'
import { sqlLogger } from '../logger/index'

const sequelize = new Sequelize({
  database:config.db.db_name,
  host:config.db.db_host,
  password:config.db.db_password,
  username:config.db.db_user,
  port:Number(config.db.db_port) as number,
  dialect:'mysql',
  models:[path.join(__dirname,'..','model/**/*.ts'),path.join(__dirname,'..','model/**/*.js')],
  pool:{ // 连接池设置
    max:5, // 最大连接数
    idle:30000,
    acquire:60000
  },
  logging:msg=>sqlLogger.info('sql',msg),
  dialectOptions:{
    charset:'utf8mb4',
  },
  define:{
    timestamps:true,
    createdAt:'created_at',
    updatedAt:'updated_at',
    deletedAt:'deleted_at',
  },
})

const db=async ()=>{
  try{
    await sequelize.authenticate();
    console.log('Connection has been established successfully')
  } catch(error){
    debugger
    console.error('Unable to connect to the database:',error)
  }
}

export default db