export default function serviceCreator(types) {
  return service.bind(null, types);
}


function service(types, type, method, params, data, location) {
 return types[type](method, params, data, location);
}
