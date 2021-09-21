import { writable } from 'svelte/store'
import type { Writable } from 'svelte/store'


interface CreateIsDisplay {
    subscribe: Writable<boolean>['subscribe']
    set: (value: boolean) => ReturnType<Writable<boolean>['set']>
}

const createIsDisplay = (): CreateIsDisplay => {
    const { subscribe, set } = writable(false)

    return {
        subscribe,
        set,
    }
}

export const isDisplay = createIsDisplay()
