import axios from 'axios';

function kebabCaseToCamel(str: string) {
  return str.replace( /(\-\w)/g, (matches) => matches[1].toUpperCase())
}

export class API {

  public endpoints: any;
  public url: string;

  constructor({url}: {url: string}) {
    this.url = url;
    this.endpoints = {};
  }
  /**
   * Create and store a single entity's endpoints
   * @param {A entity Object} entity
   */
  createEntity(entity: {name: string}) {
    /**
     * If there is a - in the entity.name, then change it
     * to camelCase. E.g
     * ```
     * myApi.createEntity({ name : 'foo-bar'})
     * myApi.endpoints.fooBar.getAll(...)
     */

    const name = kebabCaseToCamel(entity.name);
    this.endpoints[name] = this.createBasicCRUDEndpoints(entity)
  }

  createEntities(arrayOfEntity: any) {
    arrayOfEntity.forEach(this.createEntity.bind(this))
  }
  /**
   * Create the basic endpoints handlers for CRUD operations
   * @param {A entity Object} entity
   */
  createBasicCRUDEndpoints( { name } : {name: string} ) {
    let endpoints:any = {};

    const resourceURL = `${this.url}/${name}`;

    endpoints.getAll = ( query=undefined, config=undefined ) => {
      const queryParams = Object.assign({ params: { query }, config });
      console.log(queryParams, 'queryp');

      return axios.get(resourceURL, queryParams);
    };

    endpoints.getOne = ({ id }: {id: string}, config={}) =>  axios.get(`${resourceURL}/${id}`, config);

    endpoints.create = (toCreate: any, config={}) =>  axios.post(resourceURL, toCreate, config);

    endpoints.update = (toUpdate: any, config={}) => axios.put(`${resourceURL}/${toUpdate.id}`, toUpdate, config);

    endpoints.patch  = ({id}: {id: string}, toPatch: any, config={}) => axios.patch(`${resourceURL}/${id}`, toPatch, config);

    endpoints.delete = (id :string, config={}) => axios.delete(`${resourceURL}/${id}`, config);

    return endpoints

  }

}

export default API
