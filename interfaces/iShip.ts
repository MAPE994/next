export default interface iShip {
    id?: string,
    image?: string,
    name?: string,
    type?: string,
    weight_kg?: string,
    year_built?: string,
    class?: string,
    home_port?: string,
    missions?: Array<iMission>,
}

export interface iMission {
    flight: string,
    name: string,
}

