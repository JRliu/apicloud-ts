// import env from 'process'
const env = process.env.NODE_ENV
export function call() {
    console.log('110')
}
export function isProduction() {
    return env === 'production'
}

export const host = isProduction() ? 'widget://' : 'http://192.168.0.101:8080/'
