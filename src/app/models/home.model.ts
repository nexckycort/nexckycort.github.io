import { Repositorie } from '../interfaces/repositories.interfaces'
import http from '../lib/http'

export default {
  getRepositories: async (): Promise<Repositorie[]> => await http.get<any>('users/nexckycort/repos?client_id=Iv1.4b61ca0561aae707&client_secret=1d536a8f5429d12e1ef38a637c391f0e78b12dca')
}
