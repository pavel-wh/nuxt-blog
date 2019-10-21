const posts = [
    {
        _id: 'id1',
        title: 'Tom',
        date: new Date(),
        views: 22,
        comments: [1],
        address: 'No. 189, Grove St, Los Angeles'
    }, {
        _id: 'id2',
        title: 'John',
        date: '2016-05-02',
        views: 22,
        comments: [1, 2],
        address: 'No. 189, Grove St, Los Angeles'
    }, {
        _id: 'id3',
        title: 'Morgan',
        date: '2016-05-04',
        views: 22,
        comments: [1, 2, 3],
        address: 'No. 189, Grove St, Los Angeles'
    }, {
        _id: 'id4',
        title: 'Jessy',
        date: '2016-05-01',
        views: 22,
        comments: [1, 2, 3, 4],
        address: 'No. 189, Grove St, Los Angeles'
    }
]

export const state = () => ({

})

export const mutations = {

}

export const actions = {
    async fetchAdmin({}) {
        return await new Promise(resolve => {
            setTimeout(() => {
                resolve(posts)
            }, 2020)
        })
    },
    async fetchAdminById({}, id) {
        return await new Promise(resolve => {
            setTimeout(() => {
                resolve(posts.find(p => p._id === id))
            }, 1010)
        })
    },
    async create({}, { title, text }) {
        return await new Promise(resolve => {
            setTimeout(() => {
                resolve()
            }, 1010)
        })
    },
    async update({}, { id, text }) {
        return await new Promise(resolve => {
            setTimeout(() => {
                resolve()
            }, 1010)
        })
    },
    async remove({}, id) {
        return await new Promise(resolve => {
            setTimeout(() => {
                resolve()
            }, 1010)
        })
    },
}

export const getters = {

}