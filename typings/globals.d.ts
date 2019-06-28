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
