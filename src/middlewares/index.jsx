export const logger = (store) => (next) => (action) => {
  console.log(action);
  next(action);
};

export const featuring = (store) => (next) => (actionInfo) =>{
  const featured = [{name: 'Josefino'}, ...actionInfo.action.payload ];
  const updateactionInfo = {
    ...actionInfo,
    action: { ...actionInfo.action, payload: featured },
  };
  next(updateactionInfo);
}