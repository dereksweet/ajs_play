var Country = {
  url: '/api/countries/:id',
  paramDefaults: { id:'@id' },
  actions: { 'query':  { method:'GET', isArray:false } },
  options: {}
};
