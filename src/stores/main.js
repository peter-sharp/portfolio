export default function mainStore(state, events){
  state.imgPath = './img/';
  
  // TODO move to it's own store
  state.form = {
    submitButtonText: 'send'
  }
}
