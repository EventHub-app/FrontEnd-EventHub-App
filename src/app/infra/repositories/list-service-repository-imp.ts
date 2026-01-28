import { api } from "@/api/api";
import type { ServiceDomain } from "@/app/domain/entities/service-domain";
import type { ListServiceRepository } from "@/app/domain/repositories/list-service-repository";
import { ErorMessage } from "@/app/Error-messege/Error-message";
import type { Service } from "@/module/types/Entities";



export class ListServiceRepositoryImp implements ListServiceRepository {
    async getServices(): Promise<Service[]> {
        try {
            const response = await api.get("user/service/list")
            return response?.data?.data
        } catch (error) {
            throw new ErorMessage()
        }
    }



}