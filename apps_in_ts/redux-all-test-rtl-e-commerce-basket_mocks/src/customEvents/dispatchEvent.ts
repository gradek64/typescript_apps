const customEvent = () => {
  const events:{[key:string]:any} = {};
  const on = (id:string, fn:Function) => {
    if (id && !events[id]) {
       events[id] = [];
    }
    events[id].push(fn);
  };

  const emit =  (id:string, payload?:any) => {
    if (!Array.isArray(events[id])) return;
     events[id].forEach((callback:Function) => callback(payload));
  };

  return {
    on,
    emit,
    events,
  };
};

export default customEvent();
