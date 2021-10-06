interface Length {
    sigla: string,
    ratioToMeter: number
}

const Meter: Length = {
    sigla: 'm',
    ratioToMeter: 1,
}

const Centimeter: Length = {
    sigla: 'cm',
    ratioToMeter: 100,
}

const Milimiter: Length = {
    sigla: 'mm',
    ratioToMeter: 1000,
}

const Yard: Length = {
    sigla: 'yd',
    ratioToMeter: 1090,
}

const Inch: Length = {
    sigla: 'in',
    ratioToMeter: 39.3701,
}

const Feet: Length = {
    sigla: 'ft',
    ratioToMeter: 3.28
};

const Length = [
    Meter,
    Centimeter,
    Milimiter,
    Yard,
    Inch,
    Feet
]

export{
    Length
}
