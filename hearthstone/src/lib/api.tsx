import axios from 'axios'
// resets hourly
const tempToken = 'US4FPI8DTws6ysRZ15WHxBz99Aqq5j2JZr'

export async function getCardData(className:string) {
  return await axios.get(`https://us.api.blizzard.com/hearthstone/cards?locale=en_US&class=${className}&pageSize=200&access_token=${tempToken}`)
}
