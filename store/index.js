export const state = () =>
({
  pages: ["home", "dawn", "ice_melt", "natura", "raid", "vim", "ziploc"],
  hover: false
})
export const mutations = {
  hover(state, hover) {
    state.hover = hover
  }
}
