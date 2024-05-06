
import'dotenv/config'
import babelConfig from '../babel.config'

export const configCreateAuth = {
    baseURL: "endpoint",
    login: 'test',
    password: 'test'
}

export const configAuth = {
    baseURL: 'endpoint',
    login: 'test',
    password: 'test'
}

export const configPolicy = {
    baseURL: 'endpoint',
}

export const configCreateUser = {

    "baseURL": "endpoint",

    "baseURL": "endpoint",

    "login": 'test',
    "password": 'test',
    "policy": ["3f07d273-4823-478f-82a4-4aa905aafbb1"],
    "group": ["3f07d273-4823-478f-82a4-4aa905aafbb1"],
    "status": "ENABLED"
}
 

 export const configRefreshToken = {
    baseURL: "endpoint",
    refreshToken: "token"
 }
