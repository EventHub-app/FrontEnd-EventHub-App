import { ListServiceUsecases } from "@/app/usecases/list-service-usecases";
import { ListServiceRepositoryImp } from "../repositories/list-service-repository-imp";

export class ListServiceController {

    async getService() {
        const listServiceRepository = new ListServiceRepositoryImp()
        const listServiceUsecases = new ListServiceUsecases(listServiceRepository)
        return await listServiceUsecases.execute()
    }
}