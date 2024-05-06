

/*
  it ("Create user success", async () => {

    const responseCreateAuthSuccess = await fetch ('https://xpanel-api.click/v1/auth', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({

          "login": "qatest1",
          "password": "qatest1"
      })
    })

    const dataAuthUserSuccess = await responseCreateAuthSuccess.json();
    expect(responseCreateAuthSuccess.status).toBe(201)
    console.log(dataAuthUserSuccess)
  })


describe("Authentication, Get Policy, Create User", () => {
  let accessToken;
  // Аунтентификация в Xpanel
  it("Should authenticate user ", async () => {
    
    const authenticationResponse = await fetch("https://xpanel-api.click/v1/auth", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        "login": "qatest1",
        "password": "qatest1"
      })
    });

    expect(authenticationResponse.status).toBe(201);

    const dataAuthenticationResponse = await authenticationResponse.json();
    accessToken = dataAuthenticationResponse.accessToken; 
  })

    // Получение Policy
    it ("Fetch policy list", async () => {const policyListResponse = await fetch('https://xpanel-api.click/v1/policy/list?limit=1&page=1', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      }
    });

    const dataPolicyListResponse = await policyListResponse.json();
    expect(policyListResponse.status).toBe(200);
    console.log(dataPolicyListResponse)})

    // Создание юзера
    it ("Create User", async () => {const responseCreateUserSuccess = await fetch ('https://xpanel-api.click/v1/user', {
      method: "POST",
      headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`},
      body: JSON.stringify ({
        "login": "qatest5",
        "password": "qatest5",
        "policy": ["3e787100-0716-42a5-bf90-0e49118679a1"],
        "group": ["3e787100-0716-42a5-bf90-0e49118679a1"],
        "status": "ENABLED"
      })
    })

    const dataCreateUserSuccess = await responseCreateUserSuccess.json();
    console.log(dataCreateUserSuccess)
    expect(responseCreateUserSuccess.status).toBe(201)
  ; })
});































/*
// Refresh Token
it ("Refresh token", async () => {
  const responseRefreshTokenSuccess = await fetch ('https://xpanel-api.click/v1/auth/refresh', {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify ({
      "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2YzA0NGMzMC1lZDQ2LTQ2MmQtOTJmNy00N2E5OWJhYjMzNjciLCJsb2dpbiI6InRlc3QiLCJpYXQiOjE3MTQ0NzQxMjksImV4cCI6MTcxNTA3ODkyOX0._NT-RAH2pew1ImWv7_b7MVgxXHtJo2cqSbSU4RjMOQw"
    })
  })

  const dataRefreshTokenSuccess = await responseRefreshTokenSuccess.json()
  console.log(dataRefreshTokenSuccess)
  expect(responseRefreshTokenSuccess.status).toBe(201)
})
*/