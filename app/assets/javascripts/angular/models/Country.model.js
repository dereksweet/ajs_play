var Country = {
  url: '/api/v1/countries/:id',
  paramDefaults: { id:'@id' },
  actions: { 'query':  { method:'GET', isArray:false } },
  options: {}
};
