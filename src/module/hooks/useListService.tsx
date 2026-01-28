
import { useEffect, useState } from 'react'
import { type Service } from '../types/Entities'
import { ListServiceController } from '@/app/infra/controllers/list-service-controller'

export default function useListService() {
    const [dataService, setDataService] = useState<Service[] | undefined>()
    const [isOpened, setIsOpened] = useState<boolean>(false)
    const getServiceList = async () => {
        setIsOpened(true)
        try {
            const data = await new ListServiceController().getService();
            setDataService(data);
            console.log(data);
            setIsOpened(false)
        } catch (error) {
            console.log(error);
            setIsOpened(false)
        }
    }
    useEffect(() => {
        getServiceList()
    }, [])
    return {
        dataService,
        isOpened,
        setIsOpened
    }
}
