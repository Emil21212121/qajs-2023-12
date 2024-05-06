import axios from 'axios';
import { configCreateAuth, configAuth, configPolicy, configCreateUser, configRefreshToken } from '../config/config.js';

describe ("Avtorization user in Xpanel, Authentication, Get Policy, Create User AXOIS", () => {

    it ('Avtorization success Xpanel', async () => {
        const {baseURL, login, password} = configCreateAuth;

        const responseCreateAuthSuccess = await axios.post(`${baseURL}`, {
            login,
            password
        }, {
            headers: {"Content-Type": "application/json"}
        })

        expect(responseCreateAuthSuccess.status).toBe(201)
        await console.log(responseCreateAuthSuccess.data)
    })


    let accessToken;
    it ("Should authenticate user AXIOS", async () => {
        const {baseURL, login, password} = configAuth;

        const authenticationResponseAxios = await axios.patch(`${baseURL}`,
       { 
        login,
        password
       },
        {headers: {"Content-Type": "application/json"}}
    )
    expect(authenticationResponseAxios.status).toBe(201);
    accessToken = authenticationResponseAxios.data.accessToken;
    await console.log(accessToken)
    })

    it ("Policy list", async () => {
        const  {baseURL} = configPolicy;
        const policyListResponseAxios = await axios.get(`${baseURL}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
              }
        })

        expect(policyListResponseAxios.status).toBe(200)
        await console.log(policyListResponseAxios.data)
    })

    it ("Create user axios", async () => {
        const {baseURL,login, password, policy, group, status } = configCreateUser;

        const responseCreateUserSuccessAxios = await axios.post (`${baseURL}`,{
            login,
            password,
            policy,
            group,
            status }, 
    {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`},
        })

        expect(responseCreateUserSuccessAxios.status).toBe(201)
        await console.log(responseCreateUserSuccessAxios.data)
    })

})
 
<<<<<<< HEAD
/*it ("Refresh token", async () => {
=======
it ("Refresh token", async () => {
>>>>>>> e8177e7e811b9bb54ee7f2fa87e11a01abc20bc2
    const {baseURL, refreshToken} = configRefreshToken;

    const responseRefreshTokenSuccess = await axios.post(`${baseURL}`,{
        refreshToken}, {
        headers: {
            "Content-Type": "application/json"
          }
    })
    expect(responseRefreshTokenSuccess.status).toBe(201)
    console.log(responseRefreshTokenSuccess.data.refreshToken)
<<<<<<< HEAD
})*/
=======
})
>>>>>>> e8177e7e811b9bb54ee7f2fa87e11a01abc20bc2
