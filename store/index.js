import axios from 'axios'
export const state = () => ({
    products: [],
    list: [],
    shuffled1: [],
    netflix: [],
    people: [
        {
            id: 1,
            name: 'Adrian Van Ladrillano',
            username: 'ivanladrillano',
            instagram: {
                description: 'Simple men',
                following: [],
                followers: [],
                stories: [],
                posts: [{ caption: 'Lorem Ipsum', likes: [1, 5, 6, 7, 8, 3, 4], comments: [{ user: 1, comment: 'lorem ipsum' }], images: ['https://64.media.tumblr.com/e1e7b97e99ffcc14dd3434bc8c9cee3f/7fd92ab732fe63b2-eb/s640x960/0b1bffd757d482ec2af5a9785260fffc38910350.jpg'] }],
                settings: {
                }
            }
        },
        {
            name: 'Adrian Van Ladrillano',
            username: 'ivanladrillano',
            instagram: {
                description: 'Simple men',
                following: [],
                followers: [],
                stories: [],
                posts: [{ caption: 'Lorem Ipsum', images: ['https://64.media.tumblr.com/e1e7b97e99ffcc14dd3434bc8c9cee3f/7fd92ab732fe63b2-eb/s640x960/0b1bffd757d482ec2af5a9785260fffc38910350.jpg'] }],
                settings: {
                }
            }
        }],
    groups: [],
    host: 'localhost'
})

export const getters = {


}

export const mutations = {
    // Files
    SET_PRODUCTS(state, products) {
        state.products = products
    },

    ADD_TO_LIST(state, id) {
        console.log(id)
        state.list.push(id)
        console.log(state.list)
    },
    REMOVE_TO_LIST(state, id) {
        console.log(id)
        let index = state.list.map(el => el).indexOf(id)
        state.list.splice(index, 1)
        console.log(state.list)
    },
    // UPDATE_FILES(state, payload) {
    // let index = state.departments.map(el => el._id).indexOf(payload._id)
    // state.departments[index] = payload
    // console.log(state.departments)
    // },
}

export const actions = {
    async GET_PRODUCTS({ commit }) {
        axios
            .get(
                'https://fakestoreapi.com/products'
            )
            .then(res => {
                commit('SET_PRODUCTS', res.data)
                console.log(res)
            })
            .catch(err => {
                console.error(err)
            })

    },

}