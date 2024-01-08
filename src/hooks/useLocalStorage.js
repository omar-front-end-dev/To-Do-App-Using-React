/* eslint-disable no-unused-vars */
export function useLocalStorage (){
    const addToLocalStorage = (key, data) =>{
        localStorage.setItem(key, JSON.stringify(data))
    }

    const getFromLocalStorage = (key) =>{
        return JSON.parse(localStorage.getItem(key)) || [];
    }

    return {addToLocalStorage, getFromLocalStorage}
}