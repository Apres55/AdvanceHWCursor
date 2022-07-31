import { BUILDER_KEYS } from "@babel/types"

interface Rect {
    readonly id: string
    color?: string
    size: {
        width: number
        height: number
    }
}

const test: Rect[] = [
    {   
        id: '33',
        color: 'blur',
        size: {
            width: 22,
            height: 33
        }
    }
]

test['color'] =  'black'

const test2: Rect = {} as Rect
const tet3 = <Rect>{}

interface RectWithArea extends Rect {
    getArea: () => number
}

interface IClock {
    time: Date
    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date()

    setTime(date: Date): void {
        this.time = date
    }
}

// ccss

interface Styles {
    [key: string]: string
}

const css: Styles = { 
    border: '2px',
    width: '22px'
}

