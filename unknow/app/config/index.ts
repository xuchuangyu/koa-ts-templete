const config={
  server:{
    port:process.env.SERVER_PORT
  },
  db:{
    db_host:process.env.DB_HOST,
    db_name:process.env.DB_NAME,
    db_user:process.env.DB_USER,
    db_port:process.env.DB_PORT,
    db_password:process.env.DB_PASSWORD,
  },
  log:{
    appenders: {
      cheese: { type: "file", filename: "cheese.log" } ,
      access:{ type:'file',filename:'cheese.log' },
      sql:{ type:'file',filename:'cheese.log' },
   },
   categories: { 
     default: { appenders: ["cheese"], level: "info" },
     access:{ appenders: ["cheese"],level:'info' },
     sql:{ appenders: ["cheese"],level:'info' }
    },
  },
  jwt:{
    jwt_secret:process.env.JWT_SECRET, // 私钥
    jwt_expire:process.env.JWT_EXPIRE, // 超市时间
  },
};
export default config