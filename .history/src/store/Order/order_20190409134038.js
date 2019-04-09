const Details = {
    namespaced: true,
    state: {
     
    },
    actions: {
     
    },
    mutations: {
      setData(state, data) {
        state.detailsData = data;
        state.images = [data.coverImgUrl]
      },
      setAreas(state, data) {
        state.areas = data;
      },
      setIndex(state, ind) {
        state.currentIndex = ind;
      }
    }
  }
  export default Details;