interface Window {
    api: any
}

declare var api: {
    [k: string]: any
}

declare module 'vue/types/vue' {
    interface Vue {
        test: string
    }
}

declare module 'config' {
    import config from 'config/development'

    export default config
}

type tt = Types.PlainObject
