import { writable } from 'svelte/store'
import type { Writable } from 'svelte/store'
import type { Position } from './interface'

interface CreatePosition {
    subscribe: Writable<Position>['subscribe']
    set: (value: Position) => ReturnType<Writable<Position>['set']>
}

const createPoistion = (): CreatePosition => {
    const { subscribe, set } = writable({
        x: 0,
        y: 0
    })

    return {
        subscribe,
        set,
    }
}

interface CreateIsAnimate {
    subscribe: Writable<boolean>['subscribe']
    set: (value: boolean) => ReturnType<Writable<boolean>['set']>
}

const createIsAnimate = (): CreateIsAnimate => {
    const { subscribe, set } = writable(false)

    return {
        subscribe,
        set,
    }
}

export const position = createPoistion()
export const isAnimate = createIsAnimate()
