interface PermissionMessageMap {
    [key: number]: string;
  }
  
export const permissionMessages: PermissionMessageMap = {
    100: 'Listar roles',
    101: 'Crear roles',
    102: 'Actualizar roles',
    103: 'Eliminar roles',
    104: 'Consultar roles',
    105: 'Listar permisos',
    200: 'Listar voluntarios',
    201: 'Crear voluntarios',
    202: 'Actualizar voluntarios',
    203: 'Consultar voluntarios',
    204: 'Actualizar posición voluntario',
    300: 'Listar empresas',
    301: 'Crear empresa',
    302: 'Actualizar empresa',
    303: 'Consultar empresa',
    304: 'Consultar documento de empresa',
    400: 'Listar Categorias',
    401: 'Crear Categorias',
    402: 'Actualizar Categorias',
    403: 'Consultar Categoria',
    404: 'Consultar varias categorías por ID',
    405: 'Consultar una categoría por nombre',
    406: 'Consultar todas las categorías habilitadas',
    407: 'Consultar las categorías habilitadas de una lista de IDs',
    500: 'Consultar todas las fuente en el sistema',
    501: 'Crear fuentes en el sistema',
    502: 'Actualizar las fuentes en el sistema',
    503: 'Consultar una fuente por ID',
    504: 'Consultar una fuente por nombre',
    600: 'Listar los contaminantes',
    601: 'Crear un contaminante',
    602: 'Actualizar un contaminante',
    603: 'Consultar un contaminante por ID',
    604: 'Consultar contaminantes por patrón de nombre',
    700: 'Listar todas las fuentes contaminantes',
    701: 'Consultar una fuente contaminante por ID',
    702: 'Consultar varias fuentes contaminantes por lista de IDs',
    800: 'Listar los acciones',
    801: 'Crear una accion',
    802: 'Actualizar una accion',
    803: 'Consultar una accion por ID',
    804: 'Consultar una accion por nombre',
    900: 'Listar los planes',
    901: 'Crear un plan',
    902: 'Actualizar un plan',
    903: 'Consultar un plan por ID',
    904: 'Consultar un plan por nombre',
  };