export default function({ store, redirect }) {
    if (!store.getters['auts/isAuthenticated']) {
        debugger
        redirect('/admin/login?message=login')
    }
}