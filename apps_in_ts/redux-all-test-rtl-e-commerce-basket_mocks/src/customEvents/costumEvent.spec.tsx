import customEvent from './dispatchEvent';

describe('dispatch Event factory', () => {
  it('should return object with properties', () => {
    const factoryProperties = ['on', 'emit', 'events'];
    expect(Object.keys(customEvent)).toEqual(factoryProperties);
  });

  describe('calls on method', () => {
    describe('populates events array', () => {
      it('called with id as String and second argument as function', () => {
        customEvent.on('OPEN_MODAL', () => {});
        expect(customEvent.events).toHaveProperty('OPEN_MODAL');
      });
      it('called with new id as String', () => {
        customEvent.on('OPEN_SHOP', () => {});
        expect(customEvent.events).toHaveProperty('OPEN_SHOP');
      });
    })
  });

  describe('calls emit method', () => {
    it('should call callback function when emit called with ID', () => {
        const mockFunction = jest.fn(()=>{})
        customEvent.on('OPEN_MODAL', mockFunction);
        customEvent.emit('OPEN_MODAL');
        expect(mockFunction).toHaveBeenCalled()
      });
    it('should call emit mapped by ID stored function with payload', () => {
        const mockFunction1 = jest.fn(()=>{})
        const mockFunction2 = jest.fn(()=>{})
        customEvent.on('OPEN_MODAL', mockFunction1);
        customEvent.on('CLOSE_MODAL', mockFunction2);
        customEvent.emit('OPEN_MODAL', 'one');
        customEvent.emit('CLOSE_MODAL', 'two');
        expect(mockFunction1).toBeCalledWith('one')
        expect(mockFunction2).toBeCalledWith('two')
    });
  });
});
