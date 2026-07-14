export const GENIE_CHANNEL_ID = '002'
export const GENIE_WEB_ORIGIN = 'https://client.geniefx.com'

export function buildGenieApiHeaders({ deviceId, timeZone }) {
  return {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'x_device_id': deviceId,
    'user_time_zone': timeZone,
    'x-channel-id': GENIE_CHANNEL_ID,
    'Referer': GENIE_WEB_ORIGIN,
    'Origin': GENIE_WEB_ORIGIN
  }
}
