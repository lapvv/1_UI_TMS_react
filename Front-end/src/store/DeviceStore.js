import { makeAutoObservable } from "mobx";

export default class userStore {
  constructor() {
    this._types = [
      { id: 1, name: "Холодильники" },
      { id: 2, name: "Смартфоны" },
    ];
    this._brands = [
      { id: 1, name: "Samsung" },
      { id: 2, name: "Lenovo" },
    ];
    this._devices = [
      {
        id: 1,
        name: "C8 Pro",
        price: 5000,
        rating: 1,
        image:
          "https://pixabay.com/ru/vectors/iphone-%d0%bc%d0%be%d0%b1%d0%b8%d0%bb%d1%8c%d0%bd%d1%8b%d0%b9-%d1%82%d0%b5%d0%bb%d0%b5%d1%84%d0%be%d0%bd-%d1%82%d0%b5%d0%bb%d0%b5%d1%84%d0%be%d0%bd-160307/",
      },
      {
        id: 2,
        name: "SuperCooler",
        price: 10000,
        rating: 4,
        image:
          "https://pixabay.com/ru/vectors/iphone-%d0%bc%d0%be%d0%b1%d0%b8%d0%bb%d1%8c%d0%bd%d1%8b%d0%b9-%d1%82%d0%b5%d0%bb%d0%b5%d1%84%d0%be%d0%bd-%d1%82%d0%b5%d0%bb%d0%b5%d1%84%d0%be%d0%bd-160307/",
      },
      {
        id: 3,
        name: "idea Pad",
        price: 25000,
        rating: 5,
        image:
          "https://pixabay.com/ru/vectors/iphone-%d0%bc%d0%be%d0%b1%d0%b8%d0%bb%d1%8c%d0%bd%d1%8b%d0%b9-%d1%82%d0%b5%d0%bb%d0%b5%d1%84%d0%be%d0%bd-%d1%82%d0%b5%d0%bb%d0%b5%d1%84%d0%be%d0%bd-160307/",
      },
      {
        id: 4,
        name: "Свияга",
        price: 8000,
        rating: 3,
        image:
          "https://pixabay.com/ru/vectors/iphone-%d0%bc%d0%be%d0%b1%d0%b8%d0%bb%d1%8c%d0%bd%d1%8b%d0%b9-%d1%82%d0%b5%d0%bb%d0%b5%d1%84%d0%be%d0%bd-%d1%82%d0%b5%d0%bb%d0%b5%d1%84%d0%be%d0%bd-160307/",
      },
    ];
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }

  setBrands(brands) {
    this._brands = brands;
  }

  setDevices(devices) {
    this._devices = devices;
  }

  get types() {
    return this._types;
  }

  get brands() {
    return this._brands;
  }

  get devices() {
    return this._devices;
  }
}
