export const NEXT_STATE_STATUS_ENUM = {
    SPAWN: 1,
    KILL: 0
} as const

export type NEXT_STATE_STATUS = typeof NEXT_STATE_STATUS_ENUM[keyof typeof NEXT_STATE_STATUS_ENUM]; 