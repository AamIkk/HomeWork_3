class Transport {
    constructor(ps) {
        this.category = ps.category;
    }
}

class LandTransport extends Transport {
    constructor(ps) {
        super(ps);
        this.type = ps.type;
    }
}

class AirTransport extends Transport {
    constructor(ps) {
        super(ps);
        this.type = ps.type;
    }
}

class WashipTransport extends Transport {
    constructor(ps) {
        super(ps);
        this.type = ps.type;
    }
}

const avto = new Transport({
    category: ['Наземный транспорт', 'Воздушный транспорт', 'Морской транспорт']
});

const car = new LandTransport({
    category: 'Наземный транспорт',
    type: ['Грузовая', 'Легковая', 'Мотоциклы', 'Животное', 'Физические']
});

const airplane = new AirTransport({
    category: 'Воздушный транспорт',
    type: ['Пассажирский', 'Грузовой']
});

const ship = new WashipTransport({
    category: 'Морской транспорт',
    type: ['Грузовой', 'Круизный', 'Паром']
});