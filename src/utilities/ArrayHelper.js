

export default class ArrayHelper {

    constructor() {
    }



    static deepClone(a) {
        try {
            return JSON.parse(JSON.stringify(a))
        } catch (e) {
            console.log(e);
        }
    }

    static removeByIndex(array, index) {
        var pd = []
        array.forEach((element, i) => {
            i !== index && pd.push(element)
        });
        return pd
    }
    static isArrayEmpty(array) {

        return array.length === 0
    }
}


