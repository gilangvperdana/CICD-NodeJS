const app = require('./server') // Link to your server file
const supertest = require('supertest')
const request = supertest(app)


it('Call the /hello endpoint', async done => {
    const res = await request.get('/hello')
    expect(res.status).toBe(200)
    expect(res.text).toBe('Hello, Indonesia!')
    done()
})
it('Call the / endpoint', async done => {
    const res = await request.get('/')
    expect(res.status).toBe(200)
    expect(res.text).toBe('Ini Updatean baru tanpa nyentuh VPS')
    done()
})
it('Call the /pong endpoint', async done => {
    const res = await request.get('/ping')
    expect(res.status).toBe(200)
    expect(res.text).toBe('Pongs!')
    done()
})
it('Call the /hellos/:name endpoint', async done => {
    const res = await request.get('/hellos/Gilang')
    expect(res.status).toBe(200)
    expect(res.body.message).toBe('Hello Gilang')
    done()
})
  

  