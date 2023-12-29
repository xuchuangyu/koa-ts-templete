import request from '@/utils/request';
/**
 * 获取
 * @param queryParams
 */
export function getPlantInfoById(
  pid: string | number
) {
  return request({
    url: '/api/v1/plantInfo/' + pid,
    method: 'get',
  });
}