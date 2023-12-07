import run from '../app'
import request from 'supertest'
import {Server} from 'http'

describe('http',()=>{
  let server:Server
  beforeAll(()=>{
    server = run(3003)
  })
  it('GET /admin',()=>{
    return request(server)
           .get('/admin')
           .expect(200)
           .then(request=>{
              console.log(request.body)
              expect(request.body.length).toEqual(6)
           })
  })
  afterAll(async ()=>{
    server.close()
  })
})