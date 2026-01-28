import type { Service } from "@/module/types/Entities";
export interface ListServiceRepository {
    getServices(): Promise<Service[]>
}