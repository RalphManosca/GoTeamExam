import axios from 'axios'

export const state = () => ({
    allTasks: [],
})

export const getters = {
    allTasks(state) {
        return state.allTasks
    },
	isLoading(state) {
        return state.isLoading
    }
}

export const actions = {
    async onGetAllTasks({ commit }) {
        try {
			const uri = `https://63906a8d65ff41831112cdd1.mockapi.io/api/v1/tasks`

            const response = await axios.get(uri)

			commit('setAllTasks', response)

        } catch (error) {
            console.warn(error)
        }
    },
    async createNewTask({ commit }, payload) {
        try {
			const uri = `https://63906a8d65ff41831112cdd1.mockapi.io/api/v1/tasks`

            await axios.post(uri, payload)

        } catch (error) {
            console.warn(error)
        }
    },
	async onDeleteTask({ commit }, payload) {
        try {
			const uri = `https://63906a8d65ff41831112cdd1.mockapi.io/api/v1/tasks/${payload.id}`

            await axios.delete(uri)

        } catch (error) {
            console.warn(error)
        }
    },
	async onUpdateTask({ commit }, payload) {
        try {
			const uri = `https://63906a8d65ff41831112cdd1.mockapi.io/api/v1/tasks/${payload.id}`

            await axios.put(uri, payload)

        } catch (error) {
            console.warn(error)
        }
    },
}

export const mutations = {
    setIsLoading(state, payload) {
        state.isLoading[payload.key] = payload.status
    },
    setAllTasks(state, payload) {
        state.allTasks = payload
    },
}