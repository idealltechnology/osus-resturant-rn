import { Linking } from "react-native"
import mrvTxtTest from "./mrvTxtTest"

const Linkings = (url: string) => {
    Linking.openURL(url)
    // mrvTxtTest.TSTtoast()
}
export default Linkings