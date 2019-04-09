const Details = {
    namespaced: true,
    state: {
     
    },
    actions: {
      getDatailsData({ commit }, params) {
        params._this.axios.post('variety/details', { id: params.id }).then(res => {
          console.log(res)
          if (res.success) {
            commit('setData', res.data)
          } else {
            commit('setData', res.data)
          }
        })
      },
      getAreasList({ commit }, params) {
        params._this.axios.post('variety/areas', { id: params.id }).then(res => {
          console.log(res)
          // try {
          //   var json = JSON.parse(res);
          // } catch (e) {
          //   /* eslint-disable*/
          //   var json = eval("(" + res + ")");
          // }
          // console.log(json)
          if (res.success) {
            commit('setAreas', res.data)
          }
        })
      }
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