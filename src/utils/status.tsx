export const STATUS = Object.freeze({
    IDLE : "IDLE",
    LOADING : "LOADING",
    SUCCES :"SUCCESS",
    FAIL : "FAIL",
}) 

export type StatusType = keyof typeof STATUS;