import axios from 'axios'
// resets hourly
const tempToken = 'UStjRIdsjSO7f8D24sg73L7VoGE5wP8UIw'

export async function getCardData(className:string) {
  return await axios.get(`https://us.api.blizzard.com/hearthstone/cards?locale=en_US&class=${className}&pageSize=200&access_token=${tempToken}`)
}
