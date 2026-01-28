

export class ServiceDomain {

    public startFrom: string
    public eventsCompleted: string
    public expirienceYears: string
    public imagePath: string
    public id?: string
    constructor(startFrom: string, eventsCompleted: string, expirienceYears: string, imagePath: string, id?: string) {
        this.startFrom = startFrom
        this.eventsCompleted = eventsCompleted
        this.expirienceYears = expirienceYears
        this.imagePath = imagePath
        this.id = id
    }
}