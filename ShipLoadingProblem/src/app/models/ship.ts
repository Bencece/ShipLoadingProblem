class Ship {

  name: string
  volume: number
  weight: number
  
  constructor(name: string="Teszt", volume: number=100, weight: number=100){
    this.name = name;
    this.volume = volume;
    this.weight = weight;
  }

}

export default Ship;