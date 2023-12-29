import  Jwt ,{JwtPayload,VerifyErrors} from 'jsonwebtoken';
import config from '../app/config'


function sign(data:any){
  return Jwt.sign({admin:data},config.jwt.jwt_secret as string,{expiresIn:config.jwt.jwt_expire})
}

function verify(token:string):{admin: JwtPayload | string | null,error:VerifyErrors | null}{
  try{
    const decoded=Jwt.verify(token,config.jwt.jwt_secret as string)
    return {
      admin:decoded,
      error:null
    }
  }catch(error){
    return {
      error:error as VerifyErrors | null,
      admin:null
    }
  }
}

export {
  sign,
  verify
}