import { ToastAndroid, Clipboard } from 'react-native';
// import moment from 'moment';


export default class mrvTxtTest {

    static isTesting = true;
    // static isTesting = false;

    constructor() {
    }


    static logJson(j, name) {

        try {
            console.log('\n\n\n\n\n\n\n' + name + ':\n', JSON.stringify(j));
        } catch (error) {

            console.log(name);
            console.log(j);

        }
    }

    static log(j, name) {
        console.log('\n\n\n\n\n ', name, ':\n\n', `${j}`);
    }

    static logArray(array) {
        console.log('\n\n\n\n\n\n');

        array.forEach(element => {
            console.log(element);

        });


    }


    static copy(...txt) {

        let s = '';

        for (var i = 0; i < txt.length; i++) {
            s = s + txt[i] + "\n";
        }

        Clipboard.setString(s);
        ToastAndroid.show(s + "is copied", ToastAndroid.SHORT);

    }
    static copyTest(...txt) {
        if (!this.isTesting) {
            return
        }
        let s = '';

        for (var i = 0; i < txt.length; i++) {
            s = s + txt[i] + "\n";
        }

        Clipboard.setString(s);
        ToastAndroid.show(s + "is copied", ToastAndroid.SHORT);

    }

    static copyJson = (j) => {
        if (!this.isTesting) {
            return
        }
        var s = ''
        try {
            s = JSON?.stringify(j)

        } catch (error) {
            s = JSON?.stringify(error)

        }
        Clipboard.setString(s);
        ToastAndroid.show(s?.substring(0, 100) + "\nis copied", ToastAndroid.SHORT);

    }

    static copyFuncName(j) {
        // if (!this.isTesting) {
        //     return
        // }

        var s = JSON.stringify(
            arguments.callee.caller.name.toString()////JSON.stringify(j)
        )

        ToastAndroid.show(s + "\nis copied", ToastAndroid.SHORT);
        Clipboard.setString(s);

    }

    static copyArray(txt) {
        if (!this.isTesting) {
            return
        }

        var s = ''
        var ss = JSON.stringify(txt).split('},');

        for (var i = 0; i < ss.length; i++) {
            var b = i == ss.length - 1 ? '' : '},'
            s = s + (ss[i]) + b + "\n";

        }

        Clipboard.setString(s);
        ToastAndroid.show(s + "is copied", ToastAndroid.SHORT);

    }

    static alertArray(txt) {

        if (!this.isTesting) {
            return
        }


        var s = ''
        var ss = JSON.stringify(txt).split('},');

        for (var i = 0; i < ss.length; i++) {
            var b = i == ss.length - 1 ? '' : '},'
            s = s + (ss[i]) + b + "\n\n\n";

        }

        alert(s);

    }

    static copyObj(txt) {

        if (!this.isTesting) {
            return
        }
        var s = ''
        var ss = JSON.stringify(txt).split(',');

        for (var i = 0; i < ss.length; i++) {
            var b = i == ss.length - 1 ? '' : ','
            s = s + (ss[i]) + "\n" + b;

        }

        Clipboard.setString(s);
        ToastAndroid.show(s + "is copied", ToastAndroid.SHORT);

    }

    static copyArrayOriginal(Arr) {
        if (!this.isTesting) {
            return
        }

        var s = ''

        for (var i = 0; i < Arr.length; i++) {
            s = s + (JSON.stringify(Arr[i])) + "\n";

        }

        Clipboard.setString(s);
        ToastAndroid.show(s + "is copied", ToastAndroid.SHORT);

    }



    static TSTtoast(s) {

        if (!this.isTesting) {
            return
        }
        s = JSON.stringify(s)
        if (s) {
            ToastAndroid.show(s, ToastAndroid.SHORT);

        } else {
            ToastAndroid.show('TSTtoast', ToastAndroid.SHORT);

        }
    }



    static alertObj(txt) {
        if (!this.isTesting) {
            return
        }

        var s = ''
        var ss = JSON.stringify(txt).split(',');

        for (var i = 0; i < ss.length; i++) {
            // var b = i == ss.length - 1 ? '' : '},'
            s = s + (ss[i]) + "\n";
        }

        alert(s)

    }






}


