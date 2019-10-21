export const state = () => ({

})

export const mutations = {

}

export const actions = {
    async fetchAdmin({}) {
        return await new Promise(resolve => {
            setTimeout(() => {
                resolve([
                    {
                        _id: Math.random(),
                        title: 'Tom',
                        date: new Date(),
                        views: 22,
                        comments: [1],
                        address: 'No. 189, Grove St, Los Angeles'
                    }, {
                        _id: Math.random(),
                        title: 'John',
                        date: '2016-05-02',
                        views: 22,
                        comments: [1, 2],
                        address: 'No. 189, Grove St, Los Angeles'
                    }, {
                        _id: Math.random(),
                        title: 'Morgan',
                        date: '2016-05-04',
                        views: 22,
                        comments: [1, 2, 3],
                        address: 'No. 189, Grove St, Los Angeles'
                    }, {
                        _id: Math.random(),
                        title: 'Jessy',
                        date: '2016-05-01',
                        views: 22,
                        comments: [1, 2, 3, 4],
                        address: 'No. 189, Grove St, Los Angeles'
                    }
                ])
            }, 2020)
        })
    },
    async remove({}, id) {
        
    }
}

export const getters = {

}