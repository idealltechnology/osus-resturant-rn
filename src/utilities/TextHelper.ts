const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']
const TextHelper = {
    isRTL(txt: any) {
        var ltrChars = 'A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02B8\u0300-\u0590\u0800-\u1FFF' + '\u2C00-\uFB1C\uFDFE-\uFE6F\uFEFD-\uFFFF',
            rtlChars = '\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC',
            rtlDirCheck = new RegExp('^[^' + ltrChars + ']*[' + rtlChars + ']');

        return rtlDirCheck.test(txt);
    },


    thousendSeprator(s: string | number) { s = s.toString(); return s.replace(/\B(?=(\d{3})+(?!\d))/g, ",") },

    persianonly(str: string) { var p = /^[\u0600-\u06FF\s]+$/; return p.test(str) },

    empty(value: any) { return (value === undefined || value === null || value === 0 || value === "" || value === '0'); },

    emptyNull(value: any) { return (value === undefined || value === null || value === 'undefined' || value === 'null' || value === ""); },

    emptyReplacer(value: string | number) { return this.emptyNull(value) ? '' : value },

    numOnly(num: string | number) {
        return num.toString().replace(/\D/g, '')
    }

}
export default TextHelper