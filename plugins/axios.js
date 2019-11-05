export default function ({ $axios, redirect, store }) {

    // $axios.onRequest(config => {
    //     console.log('Making request to ' + config.url)
    // })
    // $axios.onResponse(response => {
    //     console.log('Making request return to ' + response)
    // })
    // $axios.onRequestError(err => {
    //     console.log('Making request return error ' + err)
    // })
    // $axios.onResponseError(err => {
    //     console.log('Making request response error to ' + err)
    // })

    $axios.interceptors.request.use(request => {
        // request.headers.common['Cache-Control'] = 'no-cache, no-store, no-transform'
        if (store.getters['auth/isAuth'] && !request.headers.common['Authorization']) {
            const token = store.getters['auth/token']
            request.headers.common['Authorization'] = `Bearer ${ token }`
            // request.headers.common['Access-Control-Allow-Methods'] = `GET, POST, OPTIONS`
            // request.headers.common['Access-Control-Allow-Origin'] = `*`
        }

        return request
    })
    $axios.onError(error => {
        if (error.response) {
            if (error.response.status === 401) {
                redirect('/admin/login?message=session')
                store.dispatch('auth/logout')
            }
            if (error.response.status === 500) {
                console.error('Server 500 error')
            }
        }
    })
}