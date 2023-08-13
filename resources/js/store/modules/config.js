const state = {
    showMenu: false,
}

const getters = {
    showMenu: state => {
        return state.showMenu
    },
}

const actions = {

}

const mutations = {
    setShowMenu(state, showMenu){
        state.showMenu = showMenu;
    },
}

export default {
    state, getters, actions, mutations
}
