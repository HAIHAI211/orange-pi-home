import { pSettings as ps, settings as s} from "@/data/setting"
import { types as ts } from "@/data/type"

const pSettings = JSON.parse(JSON.stringify(ps))
const settings = JSON.parse(JSON.stringify(s))
const types = JSON.parse(JSON.stringify(ts))

const result = []
const pidIndex = {
	// 'demo': {
	//     index: 0,
	//     deepIndex: -1
	// }
}

function format() {
	for (let i = 0; i < settings.length; i++) {
		const setting = settings[i]
		if (pidIndex[setting.pid]) {
			// 如果存在索引
			const { index, deepIndex } = pidIndex[setting.pid]
			if (deepIndex === -1) {
				// 一级
				result[index].list.push(setting)
			} else {
				// 二级
				result[index].list[deepIndex].list.push(setting)
			}
			continue
		}
		// 检查pSettings
		const pSetting = pSettings.find((item) => item.id === setting.pid)
		if (pSetting) {
			pSetting.list = [setting]
			result.push(pSetting)
			pidIndex[setting.pid] = {
				index: result.length - 1,
				deepIndex: 0,
			}
			continue
		}

		// 检查types
		for (let j = 0; j < types.length; j++) {
			const type = types[j] // 如记账
			for (let k = 0; k < type.list.length; k++) {
                const typedetail = type.list[k] // 如花销
				if (typedetail.id === setting.pid) {
					// 先确定type是否已在result里
					const typeIndex = result.findIndex((item) => item.id === type.id)
					typedetail.list = [setting]
					if (typeIndex !== -1) {
						result[typeIndex].list.push(typedetail)
						pidIndex[setting.pid] = {
							index: typeIndex,
							deepIndex: 0,
						}
					} else {
						type.list = [typedetail]
						result.push(type)
						pidIndex[setting.pid] = {
							index: result.length - 1,
							deepIndex: 0,
						}
					}
				}
			}
		}
	}
}

format()

console.log("settings", result)
console.log("pidIndex", pidIndex)

const indexList = result.map(item => item.text)
console.log(indexList, indexList)
export { result as settingList, indexList }
