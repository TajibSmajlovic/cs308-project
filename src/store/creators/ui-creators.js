import { START_LOADING, END_LOADING } from "../types/ui-types";

export const startLoading = () => {
    return {
        type: START_LOADING
    }
}

export const endLoading = () => {
    return {
        type: END_LOADING
    }
}