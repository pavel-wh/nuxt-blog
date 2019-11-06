export default function ({ $axios, redirect, store }) {
    if (process.server) {
        $axios.setHeader('accept-encoding', '*')
    }
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
        if (store.getters['auth/isAuth'] && !request.headers.common['Authorization']) {
            request.headers.common['Authorization'] = `Bearer ${ store.getters['auth/token'] }`
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