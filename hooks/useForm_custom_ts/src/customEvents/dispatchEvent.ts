const customEvent = () => {
  //this needs to be assign to regular function because we want to have access to this;
  const events = {};
  // const on = (id, fn) => {}
  type Callback = (payload?: unknown) => any;
  const on = function (id: string, fn: Callback) {
    if (id && !this.events[id]) {
      this.events[id] = [];
    }
    if (!id || typeof fn !== 'function') {
      console.warn('you event callback has to be function or id doesnt exists');
      return;
    }
    this.events[id].push(fn);
  };
  const emit = function (id: string, payload?: unknown) {
    if (!Array.isArray(this.events[id])) return;
    this.events[id].forEach((callback: Callback) => callback(payload));
  };

  return {
    on,
    emit,
    events,
  };
};

export default customEvent();
