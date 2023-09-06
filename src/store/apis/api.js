import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
  
const testData = require("D:/dev/spanish-learning/src/verb_database.json");

//DEV ONLY!
const pause = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration)
    })
}


const verbsApi = createApi({
    reducerPath: 'quiz',
    baseQuery: fetchBaseQuery({ 
        baseUrl: testData,
        fetchFn: async (...args) => {
            await pause(10000)
            return fetch(...args)
        }
    }),
    endpoints(builder){
        return {
            getVerbs: builder.query({
                query: () => {
                    return {
                        url: '/',
                        method: 'GET'
                    }
                }
            })
        }
    }
})

export const { useGetVerbsQuery } = verbsApi
export { verbsApi }