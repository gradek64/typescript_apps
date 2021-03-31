const customEvent = () => {
  type eventWillReturn = Function[]|null
  const events:{[key:string]:eventWillReturn} = {};
  const on = (id:string, fn:Function) => {
    if (id && !events[id]) {
       events[id] = [];
    }
    events[id]!.push(fn);
  };

  const cancel = (id:string) => {
    if (!Array.isArray(events[id])) return;
    events[id] = null;
  }

  const emit =  (id:string, payload?:any) => {
    if (!Array.isArray(events[id])) return;
     events[id]!.forEach((callback:Function) => callback(payload));
  };

  return {
    on,
    emit,
    cancel,
    events,
  };
};

export default customEvent();
