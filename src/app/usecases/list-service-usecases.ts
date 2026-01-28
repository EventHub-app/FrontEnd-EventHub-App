import type { Service } from "@/module/types/Entities";
import type { ServiceDomain } from "../domain/entities/service-domain";
import type { ListServiceRepository } from "../domain/repositories/list-service-repository";

export class ListServiceUsecases {
    private repository: ListServiceRepository
    constructor(repository: ListServiceRepository) {
        this.repository = repository
    }

    async execute() {
        return await this.repository.getServices();
    }
}