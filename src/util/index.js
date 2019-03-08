import { Utils } from "weex-ui"
import HeaderConfig from "./../headerBarConfig"
import TabBarConfig from "./../tabbarConfig"

const pageHeight = Utils.env.deviceHeight / Utils.env.deviceWidth * 750
export const globalUtil = {
  getHeightWithoutHeader () {

    return { height: (pageHeight - HeaderConfig.tabStyles.height) + "px" }
  },
  getHeightWithoutTab () {
    return { height: (pageHeight - TabBarConfig.tabStyles.height) + "px" }
  },
  getHeightWithoutBoth () {
    return { height: (pageHeight - HeaderConfig.tabStyles.height - TabBarConfig.tabStyles.height) + "px" }
  },
}
